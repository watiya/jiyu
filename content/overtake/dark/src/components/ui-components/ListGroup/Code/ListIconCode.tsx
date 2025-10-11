import { ListGroup, ListGroupItem } from 'flowbite-react';
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';

const ListIconCode = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem icon={HiUserCircle} active>
          Profile
        </ListGroupItem>
        <ListGroupItem icon={HiOutlineAdjustments}>Settings</ListGroupItem>
        <ListGroupItem icon={HiInbox}>Messages</ListGroupItem>
        <ListGroupItem icon={HiCloudDownload}>Download</ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default ListIconCode;
