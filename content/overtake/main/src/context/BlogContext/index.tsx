
import  { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import { BlogPostType, BlogType } from '../../types/apps/blog';
import React from "react";
import useSWR from 'swr';
import { getFetcher, postFetcher } from 'src/api/globalFetcher';

// API Urls

// get request for blogs
let getBlogsUrl = '/api/data/blog/BlogPosts';
// Post request
let postBlogUrl = '/api/data/blog/post/add';



// Define BlogContextProps interface
export interface BlogContextProps {
    posts: BlogPostType[];
    sortBy: string;
    selectedPost: BlogPostType | null;
    isLoading: boolean;
    error: string;
    setPosts: Dispatch<SetStateAction<BlogPostType[]>>;
    setSortBy: Dispatch<SetStateAction<string>>;
    setSelectedPost: Dispatch<SetStateAction<BlogPostType | null>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setError: Dispatch<SetStateAction<any>>;
    addComment: (postId: number, newComment: BlogType) => void;
}



// Create context with default values
export const BlogContext = createContext<BlogContextProps>({
    posts: [],
    sortBy: 'newest',
    selectedPost: null,
    isLoading: true,
    error: '',
    setPosts: () => { },
    setSortBy: () => { },
    setSelectedPost: () => { },
    setLoading: () => { },
    setError: () => { },
    addComment: () => { },
});

// BlogProvider component
export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<BlogPostType[]>([]);
    const [sortBy, setSortBy] = useState<string>('newest');
    const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>('');


    // Fetch Post data from the API
    const {data:BlogPostData,isLoading:isPostsLoading,error:getBlogsError,mutate} = useSWR(getBlogsUrl,getFetcher);

    useEffect(() => {
        if(BlogPostData){
            setPosts(BlogPostData.data);
            setLoading(isPostsLoading);
        }else if(getBlogsError){
            setError(getBlogsError);
            setLoading(isPostsLoading);
        }
        else{
            setLoading(isPostsLoading);
        }
    }, [BlogPostData,getBlogsError]);

    // Adds a new comment to a specific post by updating the state.
    const addComment = async (postId: number, newComment: BlogType) => {
         await mutate(postFetcher(postBlogUrl,{postId , newComment}))
    }

    const value: BlogContextProps = {
        posts,
        sortBy,
        selectedPost,
        isLoading,
        setPosts,
        setSortBy,
        setSelectedPost,
        setLoading,
        addComment,
        error,
        setError
    };

    return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
