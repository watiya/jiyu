import CardBox from 'src/components/shared/CardBox';
import RenderAsElements from './Codes/RenderAsElements';
import RenderAsElementsCode from './Codes/RenderAsElements.tsx?raw';
import CodeDialog from 'src/components/ui-components/CodeDialog';

const RenderSwitches = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Rendering as Element</h4>
            <RenderAsElements />
          </div>
          <CodeDialog>{RenderAsElementsCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default RenderSwitches;
