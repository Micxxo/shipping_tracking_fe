import { Skeleton } from '../ui/skeleton';

const TrackingSkeletons = () => {
  return (
    <div className="p-8 space-y-4">
      <Skeleton className="w-full h-40" />
      <div className="w-full flex items-center">
        <Skeleton className="w-1/3 h-10" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="w-10 h-32" />
        <Skeleton className="w-full h-32" />
      </div>

      <div className="flex gap-2">
        <Skeleton className="w-10 h-32" />
        <Skeleton className="w-full h-32" />
      </div>
    </div>
  );
};

export default TrackingSkeletons;
