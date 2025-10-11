import CodeDialog from 'src/components/ui-components/CodeDialog';
import BasicradioGroup from './Codes/BasicRadioGroupCode';
import BasicRadioGroupCode from './Codes/BasicRadioGroupCode.tsx?raw';
import CardBox from 'src/components/shared/CardBox';




const BasicRadioGroup = () => {

  
  return (
    <div>
      <CardBox className='p-0'>
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Styling Radio Group</h4>
          <BasicradioGroup/>
        </div>
        <CodeDialog>{BasicRadioGroupCode}</CodeDialog>
        </div>
      
      </CardBox>
    </div>
  )
}

export default BasicRadioGroup
