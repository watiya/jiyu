import CardBox from '../../shared/CardBox'
import Basicdialog from './code/BasicDialogCode'
import BasicDialogCode from './code/BasicDialogCode.tsx?raw'
import CodeDialog from 'src/components/ui-components/CodeDialog'


const BasicDialog = () => {
    return (
        <CardBox className='p-0'>
            <div>
            <div className="p-6">
                <h4 className="text-lg font-semibold">Basic Dialog</h4>
                  <Basicdialog/>
            </div>
            <CodeDialog>{BasicDialogCode}</CodeDialog>
            </div>
        </CardBox>
    )
}

export default BasicDialog