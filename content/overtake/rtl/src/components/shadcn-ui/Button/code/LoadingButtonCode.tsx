import { Button } from 'src/components/shadcn-ui/Default-Ui/button'
import { Loader2 } from 'lucide-react'

const LoadingButtonCode = () => {
  return (
    <>
    <div className="flex flex-wrap items-center gap-3 mt-4">
               <Button disabled ><Loader2 className="animate-spin" /> Please wait</Button>
               <Button variant="secondary" disabled ><Loader2 className="animate-spin" /> Please wait</Button>
               <Button variant="success" disabled ><Loader2 className="animate-spin" /> Please wait</Button>
               <Button variant="warning" disabled ><Loader2 className="animate-spin" /> Please wait</Button>
               <Button variant="error" disabled ><Loader2 className="animate-spin" /> Please wait</Button>
               <Button variant="info" disabled ><Loader2 className="animate-spin" /> Please wait</Button>
            </div>
    </>
  )
}

export default LoadingButtonCode