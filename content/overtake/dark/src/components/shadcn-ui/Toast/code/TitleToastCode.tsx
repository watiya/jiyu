import { Button } from "src/components/shadcn-ui/Default-Ui/button";
import { useToast } from 'src/hooks/use-toast';
const TitleToastCode = () => {
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
            });
          }}
        >
          Show Toast
        </Button>
    </div>
    </>
  )
}

export default TitleToastCode