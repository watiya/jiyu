import CardBox from 'src/components/shared/CardBox';
import BadgeWithIcon from './Code/BadgeWithIconCode';
import BadgeWithIconCode from './Code/BadgeWithIconCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const BadgesWithIconText = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Badge with icon text</h4>
            <BadgeWithIcon />
          </div>
          <CodeDialog>{BadgeWithIconCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default BadgesWithIconText;
