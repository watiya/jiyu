import { ListGroup, ListGroupItem } from 'flowbite-react';

const DefaultListcode = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>Profile</ListGroupItem>
        <ListGroupItem>Settings</ListGroupItem>
        <ListGroupItem>Messages</ListGroupItem>
        <ListGroupItem disabled>Download</ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default DefaultListcode;
