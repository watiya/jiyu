import { Alert } from 'flowbite-react';

const LightDefaultAlertCode = () => {
  return (
    <div className="flex flex-col gap-2">
      <Alert color="lightprimary" className="rounded-md">
        <span className="font-medium">Primary</span> - A simple primary alert
      </Alert>

      <Alert color="lightsecondary" className="rounded-md">
        <span className="font-medium">Secondary</span> A simple Secondary alert
      </Alert>

      <Alert color="lightsuccess" className="rounded-md">
        <span className="font-medium">Success</span> A simple Success alert
      </Alert>

      <Alert color="lightinfo" className="rounded-md">
        <span className="font-medium">Info</span> A simple Info alert
      </Alert>

      <Alert color="lightwarning" className="rounded-md">
        <span className="font-medium">Warning</span> A simple Warning alert
      </Alert>

      <Alert color="lighterror" className="rounded-md">
        <span className="font-medium">Error</span> A simple Error alert
      </Alert>

      <Alert color="lightgray" className="rounded-md">
        <span className="font-medium">Light</span> A simple Light alert
      </Alert>
    </div>
  );
};

export default LightDefaultAlertCode;
