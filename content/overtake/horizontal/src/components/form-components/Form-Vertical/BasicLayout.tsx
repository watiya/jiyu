import TitleCard from 'src/components/shared/TitleBorderCard'
import { Label, TextInput, Textarea, Button } from 'flowbite-react'



const BasicLayout = () => {
  return (
    <div>
<TitleCard title="Basic Layout">
  <div className="grid grid-cols-12 gap-30">
    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="name">Name</Label>
      </div>
      <TextInput
        id="name"
        type="text"
        placeholder="Jordan Powell"
        required
        className="form-control"
      />
    </div>
    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="company">Company</Label>
      </div>
      <TextInput
        id="company"
        type="text"
        placeholder="ACME Inc."
        required
        className="form-control"
      />
    </div>
    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="email">Email</Label>
      </div>
      <TextInput
        id="email"
        type="email"
        placeholder="jordan.powell@example.com"
        required
        className="form-control"
      />
    </div>
    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="phoneno">Phone No</Label>
      </div>
      <TextInput
        id="phoneno"
        type="number"
        placeholder="125 7545 645"
        required
        className="form-control"
      />
    </div>
    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="message">Message</Label>
      </div>
      <Textarea
        id="message"
        placeholder="Hi, Do you have a moment to talk Jeo?"
        required
        className="form-control-textarea rounded-md"
        rows={4}
      />
    </div>
    <div className="col-span-12">
      <Button type="submit" color="primary">
        Send
      </Button>
    </div>
  </div>
</TitleCard>

    </div>
  )
}

export default BasicLayout
