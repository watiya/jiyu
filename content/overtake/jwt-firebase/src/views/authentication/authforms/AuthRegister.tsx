import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "src/guards/auth/AuthContext";
import { Icon } from "@iconify/react/dist/iconify.js";


const AuthRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const { signup }: any = useContext(AuthContext);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await signup(email, password, userName);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <>
      {error && (
        <Alert className="fixed top-10 z-9999 start-1/2" color="failure" icon={() => <Icon className="text-lg" icon="solar:info-circle-bold" />}>
          <span className="font-medium ms-2 text-base">{error}</span>
        </Alert>
      )}

      <form className="mt-6" onSubmit={handleRegister}>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="name">Name</Label>
          </div>
          <TextInput
            id="name"
            type="text"
            sizing="md"
            className="form-control"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="emadd">Email Address</Label>
          </div>
          <TextInput
            id="emadd"
            type="text"
            sizing="md"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <div className="mb-2 block">
            <Label htmlFor="userpwd">Password</Label>
          </div>
          <TextInput
            id="userpwd"
            type="password"
            sizing="md"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button color={'primary'} className="w-full">Sign Up</Button>

      </form>
    </>
  )
}

export default AuthRegister
