import CodeDialog from 'src/components/ui-components/CodeDialog'
import CardBox from '../../shared/CardBox'
import DropdownWithradio from './code/DropdownWithRadioCode'
import DropdownWithRadioCode from './code/DropdownWithRadioCode.tsx?raw'


const DropdownWithRadio = () => {

    return (
        <CardBox className='p-0'>
            <div>
            <div className="p-6">
                <h4 className="text-lg font-semibold">Dropdown With Radio Group</h4>
                <DropdownWithradio />
            </div>
            <CodeDialog>{DropdownWithRadioCode}</CodeDialog>
            </div>
        </CardBox>
    )
}

export default DropdownWithRadio