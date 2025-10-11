import CodeDialog from 'src/components/ui-components/CodeDialog'
import CardBox from '../../shared/CardBox'
import Basicdrawer from './code/BasicDrawerCode'
import BasicDrawerCode from './code/BasicDrawerCode.tsx?raw'



const BasicDrawer = () => {
    
    return (
        <CardBox className='p-0'>
            <div>
            <div className="p-6">
                <h4 className="text-lg font-semibold">Basic Drawer</h4>
                <Basicdrawer/>
            </div>
            <CodeDialog>{BasicDrawerCode}</CodeDialog>
            </div>
        </CardBox>
    )
}

export default BasicDrawer