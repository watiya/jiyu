import { Badge } from 'src/components/shadcn-ui/Default-Ui/badge'
import { Icon } from '@iconify/react/dist/iconify.js'

const BadgeWithIconCode = () => {
  return (
     <>
     <div className="flex items-center flex-wrap gap-3 mt-4">
             <Badge><div className="flex items-center gap-1"><Icon icon="tabler:check" className='text-base' />2 minutes ago</div></Badge>
             <Badge variant="secondary" ><div className="flex items-center gap-1"><Icon icon="tabler:time-duration-30" className='text-base' />3 days ago</div></Badge>
             <Badge variant="success" ><div className="flex items-center gap-1"><Icon icon="tabler:time-duration-60" className='text-base' />4 minutes dago</div></Badge>
             <Badge variant="error" ><div className="flex items-center gap-1"><Icon icon="tabler:calendar-time" className='text-base' />6 days ago</div></Badge>
             <Badge variant="info" ><div className="flex items-center gap-1"><Icon icon="tabler:file-time" className='text-base' />10 days ago</div></Badge>
      </div>
     </>
  )
}

export default BadgeWithIconCode