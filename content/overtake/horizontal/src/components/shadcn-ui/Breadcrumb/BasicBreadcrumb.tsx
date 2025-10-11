import CodeDialog from 'src/components/ui-components/CodeDialog'
import CardBox from '../../shared/CardBox'
import Basicbreadcrumb from './code/BasicBreadcrumbCode'
import BasicBreadcrumbCode from './code/BasicBreadcrumbCode.tsx?raw'



const BasicBreadcrumb = () => {
    return (
        <CardBox className='p-0'>
            <div>
            <div className="p-6">
                <h4 className="text-lg font-semibold mb-4">Basic Breadcrumb</h4>
                <Basicbreadcrumb/>
            </div>
            <CodeDialog>{BasicBreadcrumbCode}</CodeDialog>
            </div>
        </CardBox>
    )
}

export default BasicBreadcrumb