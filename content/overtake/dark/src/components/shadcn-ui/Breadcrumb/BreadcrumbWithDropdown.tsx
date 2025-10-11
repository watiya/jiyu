import CodeDialog from 'src/components/ui-components/CodeDialog'
import CardBox from '../../shared/CardBox'
import BreadcrumbwithDropdown from './code/BreadcrumbWithDropdownCode'
import BreadcrumbWithDropdownCode from './code/BreadcrumbWithDropdownCode.tsx?raw'



const BreadcrumbWithDropdown = () => {
    return (
        <CardBox className='p-0'>
            <div>
            <div className="p-6">
                <h4 className="text-lg font-semiboldmb-4">Breadcrumb With Dropdown</h4>
                <BreadcrumbwithDropdown />
            </div>
            <CodeDialog>{BreadcrumbWithDropdownCode}</CodeDialog>
           </div>
        </CardBox>
    )
}

export default BreadcrumbWithDropdown