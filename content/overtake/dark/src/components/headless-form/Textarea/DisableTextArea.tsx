import CardBox from 'src/components/shared/CardBox';
import DisableTextArea from './code/DisableTextAreaCode';
import DisableTextAreaCode from './code/DisableTextAreaCode.tsx?raw';
import CodeDialog from 'src/components/ui-components/CodeDialog';

const DisableTextarea = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Disabled Textarea</h4>
            <DisableTextArea />
          </div>
          <CodeDialog>{DisableTextAreaCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DisableTextarea;
