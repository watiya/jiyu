
import CardBox from '../../shared/CardBox'
import CodeDialog from 'src/components/ui-components/CodeDialog'
import Basicaccordian from './code/BasicAccordiancode'
import BasicAccordiancode from './code/BasicAccordiancode.tsx?raw'


const BasicAccordion = () => {
    return (
        <CardBox className='p-0'>
            <div>
            <div className="p-6">
                <h4 className="text-lg font-semibold">Accordion</h4>
                <Basicaccordian />
            </div>
            <CodeDialog>{BasicAccordiancode}</CodeDialog>
            </div>
        </CardBox>
    )
}

export default BasicAccordion