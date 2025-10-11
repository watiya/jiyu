import CardBox from 'src/components/shared/CardBox';
import MegamenuIcon from './Code/MegamenuIconCode';
import MegamenuIconCode from './Code/MegamenuIconCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const MegamenuWithIcons = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Mega Menu With Icons</h4>
            <MegamenuIcon />
          </div>
          <CodeDialog>{MegamenuIconCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default MegamenuWithIcons;
