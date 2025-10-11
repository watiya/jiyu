
import { Button } from 'src/components/shadcn-ui/Default-Ui/button'


const GhostButtonCode = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 mt-4">
               <Button variant="ghostprimary" >Primary</Button>
               <Button variant="ghostsecondary" >Secondary</Button>
               <Button variant="ghostsuccess" >Success</Button>
               <Button variant="ghostwarning" >Warning</Button>
               <Button variant="ghosterror" >Error</Button>
               <Button variant="ghostinfo" >Info</Button>
            </div>
  )
}

export default GhostButtonCode