import CardBox from 'src/components/shared/CardBox';
import Localizationdatep from './Code/LocalizationDatepCode';
import LocalizationdatepCode from './Code/LocalizationDatepCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LocalizationDatep = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Localization</h4>
            <Localizationdatep />
          </div>
          <CodeDialog>{LocalizationdatepCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LocalizationDatep;
