import { Card, Label, TextInput, Checkbox, Button } from 'flowbite-react';

const CardWithFormCode = () => {
  return (
    <>
      <div>
        <Card className='max-w-sm'>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1">Your email</Label>
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="info@matdash.com"
                className="form-control"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1">Your password</Label>
              </div>
              <TextInput id="password1" type="password" className="form-control" required />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" className="checkbox" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit" color="primary" className='w-fit px-10'>
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default CardWithFormCode;
