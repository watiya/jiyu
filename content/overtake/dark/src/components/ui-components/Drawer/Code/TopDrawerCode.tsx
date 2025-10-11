import { useState } from 'react';
import { Button, Drawer, DrawerHeader, DrawerItems } from 'flowbite-react';

const TopDrawerCode = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button color={'error'} onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>
      <Drawer open={isOpen} onClose={handleClose} className="p-4" position="top">
        <DrawerHeader title="Drawer" />
        <DrawerItems>
          <p className="mb-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets
          </p>

          <Button color={'primary'}>Learn More</Button>
        </DrawerItems>
      </Drawer>
    </div>
  );
};

export default TopDrawerCode;
