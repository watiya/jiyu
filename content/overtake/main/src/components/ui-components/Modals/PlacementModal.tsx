import CardBox from 'src/components/shared/CardBox';
import Placementmodal from './Code/PlacementModalCode';
import PlacementmodalCode from './Code/PlacementModalCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const PlacementModal = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Placement options</h4>
            <Placementmodal />
          </div>
          <CodeDialog>{PlacementmodalCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default PlacementModal;
