import CodeDialog from 'src/components/ui-components/CodeDialog'
import CardBox from '../../shared/CardBox'
import BreadcrumbwithEllipsis from './code/BreadcrumbWithEllipsisCode'
import BreadcrumbWithEllipsisCode from './code/BreadcrumbWithEllipsisCode.tsx?raw'



const BreadcrumbWithEllipsis = () => {
    return (
        <CardBox className='p-0'>
            <div>
            <div className="p-6">
                <h4 className="text-lg font-semibold">Breadcrumb Ellipsis</h4>
                <BreadcrumbwithEllipsis />
            </div>
            <CodeDialog>{BreadcrumbWithEllipsisCode}</CodeDialog>
            </div>
        </CardBox>
    )
}

export default BreadcrumbWithEllipsis