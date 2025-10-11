"use client"
import { createContext, useEffect, useReducer, ReactNode } from 'react';
import { firebase } from '@/app/guards/firebase/Firebase';
import { supabase } from '@/app/guards/supabase/supabaseClient';
import { useSession, signIn, signOut } from 'next-auth/react';

// Define the initial state structure
interface InitialStateType {
    isAuthenticated: boolean;
    isInitialized: boolean;
    user: any | null;
    platform: 'Firebase' | 'Supabase' | 'NextAuth' | null;
}

const initialState: InitialStateType = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
    platform: 'NextAuth',
};

const reducer = (state: InitialStateType, action: any) => {
    switch (action.type) {
        case 'AUTH_STATE_CHANGED':
            return { ...state, ...action.payload, isInitialized: true };
        case 'SET_PLATFORM':
            return { ...state, platform: action.payload };
        default:
            return state;
    }
};

const AuthContext = createContext<any | null>({
    ...initialState,
    signup: () => Promise.resolve(),
    signin: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    setPlatform: () => { },
    loginWithProvider: () => Promise.resolve(),
    loginWithSupabase: () => Promise.resolve(),
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data: session, status } = useSession();


    const setPlatform = (platform: 'Firebase' | 'Supabase' | 'NextAuth') => {
        dispatch({ type: 'SET_PLATFORM', payload: platform });
    };


    useEffect(() => {
        if (state.platform === 'Firebase') {

            const unsubscribeFirebase = firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    const fullName = user.displayName

                    dispatch({
                        type: 'AUTH_STATE_CHANGED',
                        payload: {
                            isAuthenticated: true,
                            user: {
                                id: user.uid,
                                email: user.email,
                                displayName: fullName,
                            },
                            platform: 'Firebase',
                        },
                    });
                } else {
                    dispatch({
                        type: 'AUTH_STATE_CHANGED',
                        payload: { isAuthenticated: false, user: null, platform: 'Firebase' },
                    });
                }
            });

            return () => unsubscribeFirebase();
        } else if (state.platform === 'Supabase') {
            // Restore Supabase session
            const restoreSession = async () => {
                const { data: { session } } = await supabase.auth.getSession();
                if (session?.user) {

                    const fullName = session.user.user_metadata?.full_name || session.user.email;
                    dispatch({
                        type: 'AUTH_STATE_CHANGED',
                        payload: {
                            isAuthenticated: true,
                            user: {
                                id: session.user.id,
                                email: session.user.email,
                                displayName: fullName,
                            },
                            platform: 'Supabase',
                        },
                    });
                } else {
                    dispatch({
                        type: 'AUTH_STATE_CHANGED',
                        payload: { isAuthenticated: false, user: null, platform: 'Supabase' },
                    });
                }
            };

            restoreSession();
            const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
                if (session?.user) {
                    const fullName = session.user.user_metadata?.full_name || session.user.email;
                    dispatch({
                        type: 'AUTH_STATE_CHANGED',
                        payload: {
                            isAuthenticated: true,
                            user: {
                                id: session.user.id,
                                avatar: session.user.user_metadata?.avatar || "",
                                email: session.user.email,
                                displayName: fullName,
                            },
                            platform: 'Supabase',
                        },
                    });
                } else {
                    dispatch({
                        type: 'AUTH_STATE_CHANGED',
                        payload: { isAuthenticated: false, user: null, platform: 'Supabase' },
                    });
                }
            });

            return () => {
                authListener?.subscription?.unsubscribe();
            };
        }
        else if (state.platform === 'NextAuth') {
            if (session?.user) {
                dispatch({
                    type: 'AUTH_STATE_CHANGED',
                    payload: {
                        isAuthenticated: true,
                        user: {
                            id: session.user,
                            email: session.user.email,
                            displayName: session.user.name || session.user.email,
                        },
                        platform: 'NextAuth',
                    },
                });
            } else {
                dispatch({
                    type: 'AUTH_STATE_CHANGED',
                    payload: { isAuthenticated: false, user: null, platform: 'NextAuth' },
                });
            }
        }
    }, [state.platform, session]);



    const loginWithProvider = async (provider: 'google' | 'github') => {
        if (state.platform === 'Firebase') {
            let providerInstance: any;
            switch (provider) {
                case 'google':
                    providerInstance = new firebase.auth.GoogleAuthProvider();
                    break;
                case 'github':
                    providerInstance = new firebase.auth.GithubAuthProvider();
                    break;
                default:
                    throw new Error('Provider not supported');
            }
            return firebase.auth().signInWithPopup(providerInstance);
        } else if (state.platform === 'Supabase') {
            return supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                },
            });
        }
        else if (state.platform === 'NextAuth') {
            return signIn(provider);
        }
    };

    const signup = async (email: string, password: string, userName: string) => {
        if (state.platform === 'Firebase') {
            try {

                const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
                const user = userCredential.user;


                if (user) {
                    await user.updateProfile({
                        displayName: userName,
                    });
                    await user.reload();

                }
            } catch (error: any) {
                console.error('Error signing up with Firebase:', error);
                throw new Error(error.message);
            }

        } else if (state.platform === 'Supabase') {


            try {
                const { user, error }: any = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: { full_name: userName },
                    },
                });

                if (error) {
                    throw error;
                }

                console.log('User registered successfully, confirmation email sent');
            } catch (error: any) {
                console.error('Error signing up with Supabase:', error);
                throw new Error(error.message);
            }
        }
        return null;
    };





    const signin = async (email: string, password: string) => {
        if (state.platform === 'Firebase') {
            return firebase.auth().signInWithEmailAndPassword(email, password);
        } else if (state.platform === 'Supabase') {
            try {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                console.log(error);
                if (error) throw error;

            } catch (error: any) {
                throw new Error(error.message);
            }
        }
        else if (state.platform === 'NextAuth') {
            return signIn('credentials', { email, password });
        }
        return null;
    };

    const logout = async () => {
        if (state.platform === 'Firebase') {
            await firebase.auth().signOut();
        } else if (state.platform === 'Supabase') {
            await supabase.auth.signOut();
        }
        else if (state.platform === 'NextAuth') {
            await signOut();
        }
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                setPlatform,
                loginWithProvider,
                signup,
                signin,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
