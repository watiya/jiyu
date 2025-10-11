import { ListGroup, ListGroupItem } from 'flowbite-react';

const ListButtonCode = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem onClick={() => alert('Profile clicked!')} active>
          Profile
        </ListGroupItem>
        <ListGroupItem>Settings</ListGroupItem>
        <ListGroupItem>Messages</ListGroupItem>
        <ListGroupItem>Download</ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default ListButtonCode;
