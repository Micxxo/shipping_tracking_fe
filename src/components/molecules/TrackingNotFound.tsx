import { useTrackingStore } from '@/stores';
import { AlertCircle, PackageX } from 'lucide-react';

const TrackingNotFound = () => {
  const { trackingError } = useTrackingStore();
  if (!trackingError) return null;

  return (
    <div className="h-full flex items-center justify-center p-12">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
          <PackageX className="w-10 h-10 text-red-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {trackingError.message}
        </h3>
        <p className="text-gray-600 mb-6">
          We couldn&apos;t find any information for this tracking number. Please
          check the number and try again.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="text-sm font-semibold text-amber-900 mb-1">
              Common Issues
            </p>
            <ul className="text-sm text-amber-800 space-y-1">
              <li>• Tracking number may be incorrect</li>
              <li>• No related courier found</li>
              <li>• Information not yet available in the system</li>
              <li>• Shipment may not have been picked up yet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingNotFound;
