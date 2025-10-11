import { Skeleton } from 'src/components/shadcn-ui/Default-Ui/skeleton';

const BasicSkeletonCode = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3 mt-4 overflow-x-auto">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicSkeletonCode;
