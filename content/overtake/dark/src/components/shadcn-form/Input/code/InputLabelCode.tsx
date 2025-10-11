import { Label } from "src/components/shadcn-ui/Default-Ui/label";
import { Input } from "src/components/shadcn-ui/Default-Ui/input";

const InputLabelCode = () => {
  return (
    <>
      <div className="flex flex-col gap-5 mt-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" />
        </div>
      </div>
    </>
  )
}

export default InputLabelCode