import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "src/components/shadcn-ui/Default-Ui/dialog"
import { Button } from 'src/components/shadcn-ui/Default-Ui/button'

const BasicDialogCode = () => {
  return (
    <>
    <div className="flex flex-wrap items-center gap-3 mt-4">
                <Dialog>
                    <DialogTrigger asChild><Button>Open Dialog</Button></DialogTrigger>
                    <DialogContent >
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle> 
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild><Button variant="secondary" >Open Dialog</Button></DialogTrigger>
                    <DialogContent >
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild><Button variant="warning" >Open Dialog</Button></DialogTrigger>
                    <DialogContent >
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild><Button variant="error" >Open Dialog</Button></DialogTrigger>
                    <DialogContent >
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
    </>
  )
}

export default BasicDialogCode