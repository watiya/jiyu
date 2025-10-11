import { Button } from "src/components/shadcn-ui/Default-Ui/button";
import { ToastAction } from "src/components/shadcn-ui/Default-Ui/toast";
import { useToast } from "src/hooks/use-toast";

const ActionToastCode = () => {
  const { toast } = useToast();
  return (
    <>
    <div>
      <Button
          variant="outline"
          onClick={() => {
            toast({
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

export default ActionToastCode