

import CardBox from "src/components/shared/CardBox";
import Disabledfieldset from "./Codes/DisableFieldsetCode";
import DisabledFieldsetCode from "./Codes/DisableFieldsetCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";


const DisableFieldset = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Disable Fieldset Form</h4>
           <Disabledfieldset/>
        </div>
        <CodeDialog>{DisabledFieldsetCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  )
}

export default DisableFieldset
