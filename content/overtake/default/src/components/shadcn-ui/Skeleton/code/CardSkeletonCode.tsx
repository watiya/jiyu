import { Skeleton } from "src/components/shadcn-ui/Default-Ui/skeleton"

const CardSkeletonCode = () => {
  return (
    <>
    <div className="flex flex-wrap items-center gap-3 mt-4">
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
            </div>
    </>
  );
};

export default CardSkeletonCode;
