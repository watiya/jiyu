import CodeDialog from 'src/components/ui-components/CodeDialog'
import CardBox from '../../shared/CardBox'
import BreadcrumbwithSeparator from './code/BreadcrumbWithSeparatorCode'
import BreadcrumbWithSeparatorCode from './code/BreadcrumbWithSeparatorCode.tsx?raw'



const BreadcrumbWithSeparator = () => {
    return (
        <CardBox className='p-0'>
            <div>
            <div className="p-6">
                <h4 className="text-lg font-semibold mb-4">Breadcrumb With Custom Separator</h4>
                <BreadcrumbwithSeparator/>
            </div>
            <CodeDialog>{BreadcrumbWithSeparatorCode}</CodeDialog>
           </div>
        </CardBox>
    )
}

export default BreadcrumbWithSeparator