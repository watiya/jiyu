
import { List, ListItem } from 'flowbite-react'
import CardBox from 'src/components/shared/CardBox'
import { HiCheckCircle } from "react-icons/hi";
const IconListTypo = () => {
  return (
    <div>
        <CardBox>
            <h4 className="text-lg font-semibold mb-2">Icons</h4>
            <List>
              <ListItem icon={HiCheckCircle}>
                At least 10 characters (and up to 100 characters)
              </ListItem>
              <ListItem icon={HiCheckCircle}>
                At least one lowercase character
              </ListItem>
              <ListItem icon={HiCheckCircle}>
                Inclusion of at least one special character, e.g., ! @ # ?
              </ListItem>
            </List>
          </CardBox>
    </div>
  )
}

export default IconListTypo
