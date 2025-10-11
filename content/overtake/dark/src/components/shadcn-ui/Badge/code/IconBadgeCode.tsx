import { Badge } from 'src/components/shadcn-ui/Default-Ui/badge';
import { Icon } from '@iconify/react/dist/iconify.js';

const IconBadgeCode = () => {
  return (
    <>
      <div className="flex items-center gap-3 flex-wrap">
        <Badge>
          <Icon icon="tabler:check" className="text-base" />
        </Badge>
        <Badge variant="secondary">
          <Icon icon="tabler:time-duration-30" className="text-base" />
        </Badge>
        <Badge variant="success">
          <Icon icon="tabler:time-duration-60" className="text-base" />
        </Badge>
        <Badge variant="error">
          <Icon icon="tabler:calendar-time" className="text-base" />
        </Badge>
        <Badge variant="info">
          <Icon icon="tabler:file-time" className="text-base" />
        </Badge>
      </div>
    </>
  );
};

export default IconBadgeCode;
