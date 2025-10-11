
import CodeDialog from 'src/components/ui-components/CodeDialog'
import CardBox from '../../shared/CardBox'
import DialogWithcustomClose from './code/DialogWithCustomCloseCode'
import DialogWithCustomCloseCode from './code/DialogWithCustomCloseCode.tsx?raw'


const DialogWithCustomCloseButton = () => {
    return (
        <CardBox className='p-0'>
            <div>
            <div className="p-6">
                <h4 className="text-lg font-semibold">Dialog With Custom Close</h4>
                <DialogWithcustomClose />
            </div>
            <CodeDialog>{DialogWithCustomCloseCode}</CodeDialog>
            </div>
        </CardBox>
    )
}

export default DialogWithCustomCloseButton