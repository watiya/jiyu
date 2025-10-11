import CardBox from 'src/components/shared/CardBox';
import Contentseparator from './Code/ContentSeparatorCode';
import ContentseparatorCode from './Code/ContentSeparatorCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const ContentSeparator = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Content Separator</h4>
            <Contentseparator />
          </div>
          <CodeDialog>{ContentseparatorCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ContentSeparator;
