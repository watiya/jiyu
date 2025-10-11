import { ListGroup, ListGroupItem } from 'flowbite-react';

const LinkListCode = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem href="#" active>
          Profile
        </ListGroupItem>
        <ListGroupItem href="#">Settings</ListGroupItem>
        <ListGroupItem href="#">Messages</ListGroupItem>
        <ListGroupItem href="#">Download</ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default LinkListCode;
