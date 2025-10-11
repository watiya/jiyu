
import { Button } from 'src/components/shadcn-ui/Default-Ui/button'

const OutlineButtonCode = () => {
  return (
    <>
    <div className="flex flex-wrap items-center gap-3 mt-4">
               <Button variant="outline">Primary</Button>
               <Button variant="outlinesecondary">Secondary</Button>
               <Button variant="outlinesuccess">Success</Button>
               <Button variant="outlinewarning">Warning</Button>
               <Button variant="outlineerror">Error</Button>
               <Button variant="outlineinfo">Info</Button>
            </div>
    </>
  )
}

export default OutlineButtonCode