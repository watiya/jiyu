import { Alert } from 'flowbite-react';

const LightBorderAcccentCode = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Alert color="lightprimary" withBorderAccent>
        <span>
          <span className="font-medium">Primary</span> - A simple Primary alert
        </span>
      </Alert>

      <Alert color="lightsecondary" withBorderAccent>
        <span>
          <span className="font-medium">Secondary</span> - A simple Secondary alert
        </span>
      </Alert>

      <Alert color="lightsuccess" withBorderAccent>
        <span>
          <span className="font-medium">Success</span> - A simple Success alert
        </span>
      </Alert>

      <Alert color="lightinfo" withBorderAccent>
        <span>
          <span className="font-medium">Info</span> - A simple Info alert
        </span>
      </Alert>

      <Alert color="lightwarning" withBorderAccent>
        <span>
          <span className="font-medium">Warning</span> - A simple Warning alert
        </span>
      </Alert>

      <Alert color="lighterror" withBorderAccent>
        <span>
          <span className="font-medium">Error</span> - A simple Error alert
        </span>
      </Alert>
    </div>
  );
};

export default LightBorderAcccentCode;
