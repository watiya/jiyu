import CardBox from '../../shared/CardBox'
import Outlinebadge from './code/OutlineBadgeCode'
import OutlinebadgeCode from './code/OutlineBadgeCode.tsx?raw'
import CodeDialog from 'src/components/ui-components/CodeDialog'

const OutlineBadge = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Outline Badge</h4>
          <Outlinebadge />
        </div>
        <CodeDialog>{OutlinebadgeCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default OutlineBadge