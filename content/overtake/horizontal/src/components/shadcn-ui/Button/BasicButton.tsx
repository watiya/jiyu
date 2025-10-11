import CardBox from '../../shared/CardBox'
import Basicbutton from './code/BasicButtonCode'
import BasicButtonCode from './code/BasicButtonCode.tsx?raw'
import CodeDialog from 'src/components/ui-components/CodeDialog'


const BasicButton = () => {
    return (
        <CardBox className='p-0'>
            <div>
            <div className="p-6">
                <h4 className="text-lg font-semibold">Basic Button</h4>
                 <Basicbutton/>
            </div>
            <CodeDialog>{BasicButtonCode}</CodeDialog>
            </div>
        </CardBox>
    )
}

export default BasicButton