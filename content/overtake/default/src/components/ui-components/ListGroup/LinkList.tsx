import CardBox from 'src/components/shared/CardBox';
import Linklist from './Code/LinkListCode';
import LinklistCode from './Code/LinkListCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LinkList = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">List items as links</h4>
            <Linklist />
          </div>
          <CodeDialog>{LinklistCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LinkList;
