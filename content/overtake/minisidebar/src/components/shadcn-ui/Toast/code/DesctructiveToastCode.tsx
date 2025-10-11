import { useToast } from "src/hooks/use-toast";
import { Button } from "src/components/shadcn-ui/Default-Ui/button";
import { ToastAction } from "src/components/shadcn-ui/Default-Ui/toast";

const DestrictiveToastCode = () => {
  const { toast } = useToast();
  return (
    <>
    <div>
      <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
    </div>
    </>
  )
}

export default DestrictiveToastCode