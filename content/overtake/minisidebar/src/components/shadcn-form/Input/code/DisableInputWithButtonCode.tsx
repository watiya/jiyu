import { Label } from "src/components/shadcn-ui/Default-Ui/label";
import { Button } from "src/components/shadcn-ui/Default-Ui/button";
import { Input } from "src/components/shadcn-ui/Default-Ui/input";

const DisableInputWithButtonCode = () => {
  return (
    <>
      <div className="flex flex-col gap-5 mt-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input disabled type="text" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input disabled type="email" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input disabled type="password" />
        </div>
        <div className="flex gap-3">
          <Button disabled>Submit</Button>
          <Button disabled variant={"error"}>
            Cancel
          </Button>
        </div>
      </div>
    </>
  )
}

export default DisableInputWithButtonCode