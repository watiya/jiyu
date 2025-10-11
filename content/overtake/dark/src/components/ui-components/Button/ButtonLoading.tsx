
import CardBox from "src/components/shared/CardBox";
import { Button, Spinner } from "flowbite-react";

const ButtonLoading = () => {
  return (
    <>
      <CardBox>
        <h4 className="text-lg font-semibold">Button with loading state</h4>
        <div className="flex flex-wrap items-start gap-2 mt-2">
          <Button color="primary" size="xs">
            <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
            Click me!
          </Button>
          <Button color="primary" size="sm" pill>
            <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
            Click me!
          </Button>
          <Button color="primary" size="md" outline>
            <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
            Click me!
          </Button>
        </div>
        <div className="flex flex-wrap items-start gap-2 mt-2">
          <Button color="secondary" size="xs">
            <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
            Click me!
          </Button>
          <Button color="secondary" size="sm" pill>
            <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
            Click me!
          </Button>
          <Button color="secondary" size="md" outline>
            <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
            Click me!
          </Button>
        </div>
      </CardBox>
    </>
  );
};

export default ButtonLoading;
