import { Alert } from 'flowbite-react';

const LightDissmisableCode = () => {
  return (
    <div className="flex flex-col gap-2">
      <Alert
        color="lightprimary"
        onDismiss={() => alert('Alert dismissed!')}
        className="rounded-md"
      >
        <span className="font-medium">Primary</span> - A simple Primary alert
      </Alert>

      <Alert
        color="lightsecondary"
        onDismiss={() => alert('Alert dismissed!')}
        className="rounded-md"
      >
        <span className="font-medium">Secondary</span> - A simple Secondary alert
      </Alert>

      <Alert
        color="lightsuccess"
        onDismiss={() => alert('Alert dismissed!')}
        className="rounded-md"
      >
        <span className="font-medium">Success</span> - A simple Success alert
      </Alert>

      <Alert color="lightinfo" onDismiss={() => alert('Alert dismissed!')} className="rounded-md">
        <span className="font-medium">Info</span> - A simple Info alert
      </Alert>

      <Alert
        color="lightwarning"
        onDismiss={() => alert('Alert dismissed!')}
        className="rounded-md"
      >
        <span className="font-medium">Warning</span> - A simple Warning alert
      </Alert>

      <Alert color="lighterror" onDismiss={() => alert('Alert dismissed!')} className="rounded-md">
        <span className="font-medium">Error</span> - A simple Error alert
      </Alert>

      <Alert color="lightgray" onDismiss={() => alert('Alert dismissed!')} className="rounded-md">
        <span className="font-medium">Dark</span> - A simple Dark alert
      </Alert>
    </div>
  );
};

export default LightDissmisableCode;
