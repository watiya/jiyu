import CardBox from '../../shared/CardBox'
import BadgewithIcon from './code/BadgeWithIconCode'
import BadgeWithIconCode from './code/BadgeWithIconCode.tsx?raw'
import CodeDialog from 'src/components/ui-components/CodeDialog'

const BadgeWithIconText = () => {
    return (
        <CardBox className='p-0'>
            <div>
            <div className="p-6">
                <h4 className="text-lg font-semibold">Badge With Icon Text</h4>
                 <BadgewithIcon/>
            </div>
            <CodeDialog>{BadgeWithIconCode}</CodeDialog>
            </div>
        </CardBox>
    )
}

export default BadgeWithIconText