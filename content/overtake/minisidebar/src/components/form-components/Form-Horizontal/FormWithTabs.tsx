

import { Tabs, Label, TextInput, Select, Datepicker, Button, TabItem } from 'flowbite-react'
import TitleCard from 'src/components/shared/TitleBorderCard'

const FormWithTabs = () => {
  return (
    <div>
<TitleCard title="Form With Tabs">
  <div className="overflow-x-auto">
    <Tabs aria-label="Full width tabs" className="gap-[1.25rem]">
      <TabItem active title="Personal Info">
        <div className="grid grid-cols-12 gap-[1.875rem]">
          <div className="lg:col-span-6 col-span-12 flex flex-col gap-[1.875rem]">
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="firstname">First Name</Label>
              </div>
              <div className="col-span-9">
                <TextInput
                  id="firstname"
                  type="text"
                  placeholder="John"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="country">Country</Label>
              </div>
              <div className="col-span-9">
                <Select id="gender" required className="select-md">
                  <option>India</option>
                  <option>Europe</option>
                  <option>France</option>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="birthdate">Birth Date</Label>
              </div>
              <div className="col-span-9">
                <Datepicker className="form-control" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 flex flex-col gap-[1.875rem]">
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="lastname">Last Name</Label>
              </div>
              <div className="col-span-9">
                <TextInput
                  id="lastname"
                  type="text"
                  placeholder="Deo"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="language">Language</Label>
              </div>
              <div className="col-span-9">
                <Select id="gender" required className="select-md">
                  <option>English</option>
                  <option>French</option>
                  <option>Spanish</option>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="phone">Phone No</Label>
              </div>
              <div className="col-span-9">
                <TextInput
                  id="phone"
                  type="text"
                  placeholder="958 1475 458"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-[1.875rem]">
          <Button type="submit" color="primary">
            Submit
          </Button>
          <Button type="reset" color="error">
            Cancel
          </Button>
        </div>
      </TabItem>
      <TabItem title="Account Details">
        <div className="grid grid-cols-12 gap-[1.875rem]">
          <div className="lg:col-span-6 col-span-12 flex flex-col gap-[1.875rem]">
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="username">Username</Label>
              </div>
              <div className="col-span-9">
                <TextInput
                  id="username"
                  type="text"
                  placeholder="John.Deo"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="password">Password</Label>
              </div>
              <div className="col-span-9">
                <TextInput
                  id="password"
                  type="text"
                  placeholder="john.deo"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 flex flex-col gap-[1.875rem]">
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="email">Email</Label>
              </div>
              <div className="col-span-9">
                <TextInput
                  id="email"
                  type="text"
                  placeholder="john.deo@example.com"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="confirm">Confirm</Label>
              </div>
              <div className="col-span-9">
                <TextInput
                  id="confirm"
                  type="text"
                  placeholder="john.deo"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-[1.875rem]">
          <Button type="submit" color="primary">
            Submit
          </Button>
          <Button type="reset" color="error">
            Cancel
          </Button>
        </div>
      </TabItem>
      <TabItem title="Social Links">
        <div className="grid grid-cols-12 gap-[1.875rem]">
          <div className="lg:col-span-6 col-span-12 flex flex-col gap-[1.875rem]">
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="twitter">Twitter</Label>
              </div>
              <div className="col-span-9">
                <TextInput
                  id="twitter"
                  type="text"
                  placeholder="https://twitter.com/abc"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="google">Google</Label>
              </div>
              <div className="col-span-9">
                <TextInput
                  id="google"
                  type="text"
                  placeholder="https://plus.google.com/abc"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="instagram">Instagram</Label>
              </div>
              <div className="col-span-9">
                <TextInput
                  id="instagram"
                  type="text"
                  placeholder="https://instagram.com/abc"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 flex flex-col gap-[1.875rem]">
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="facebook">Facebook</Label>
              </div>
              <div className="col-span-9">
                <TextInput
                  id="facebook"
                  type="text"
                  placeholder="https://facebook.com/abc"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="linkedin">Linkedin</Label>
              </div>
              <div className="col-span-9">
                <TextInput
                  id="linkedin"
                  type="text"
                  placeholder="https://linkedin.com/abc"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-7 items-center">
              <div className="col-span-3">
                <Label htmlFor="quora">Quora</Label>
              </div>
              <div className="col-span-9">
                <TextInput
                  id="quora"
                  type="text"
                  placeholder="https://quora.com/abc"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-[1.875rem]">
          <Button type="submit" color="primary">
            Submit
          </Button>
          <Button type="reset" color="error">
            Cancel
          </Button>
        </div>
      </TabItem>
    </Tabs>
  </div>
</TitleCard>

    </div>
  )
}

export default FormWithTabs
