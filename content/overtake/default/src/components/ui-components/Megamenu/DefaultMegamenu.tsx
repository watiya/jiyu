import CardBox from 'src/components/shared/CardBox';
import DefaultMegaMenu from './Code/DefaultMegamenuCode';
import DefaultMegaMenuCode from './Code/DefaultMegamenuCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultMegamenu = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Mega Menu</h4>
            <DefaultMegaMenu />
          </div>
          <CodeDialog>{DefaultMegaMenuCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultMegamenu;
