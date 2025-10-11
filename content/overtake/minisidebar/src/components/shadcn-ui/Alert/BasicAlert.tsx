import CodeDialog from 'src/components/ui-components/CodeDialog'
import CardBox from '../../shared/CardBox'
import Basicalert from './code/BasicAlertCode'
import BasicAlertCode from './code/BasicAlertCode.tsx?raw'

const BasicAlert = () => {
    return (
        <CardBox className='p-0'>
            <div>
            <div className="p-6">
                <h4 className="text-lg font-semibold">Basic Alert</h4>
               <Basicalert/>
            </div>
            <CodeDialog>{BasicAlertCode}</CodeDialog>
            </div>
        </CardBox>
    )
}

export default BasicAlert