import { formatDate } from '@/helpers';
import { useTrackingStore } from '@/stores';
import { MapPin, PackageSearch } from 'lucide-react';

const TrackingHistory = () => {
  const { trackingData } = useTrackingStore();

  if (!trackingData) return null;
  const checkpoints = trackingData?.checkpoints ?? [];

  if (checkpoints.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <PackageSearch className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          No Tracking History Yet
        </h3>
        <p className="text-sm text-gray-600 max-w-sm">
          Tracking information will appear here once your package starts moving.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {checkpoints.toReversed().map((checkpoint, index) => (
        <div
          key={checkpoint.checkpoint_time + index}
          className="relative pl-8 pb-6 last:pb-0"
        >
          <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600">
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>

          {index !== (trackingData.checkpoints?.length ?? 0) - 1 && (
            <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gray-200"></div>
          )}

          <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <p className="font-semibold text-gray-900">
                {checkpoint.message}
              </p>
              <span className="text-xs text-gray-600 whitespace-nowrap ml-2">
                {formatDate(checkpoint.checkpoint_time)}
              </span>
            </div>

            {checkpoint.location && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{checkpoint.location}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackingHistory;
