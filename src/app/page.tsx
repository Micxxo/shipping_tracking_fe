'use client';
import RenderTrackingError from '@/components/molecules/RenderTrackingError';
import { TrackingHeader } from '@/components/molecules/TrackingHeader';
import TrackingHistory from '@/components/molecules/TrackingHistory';
import TrackingSkeletons from '@/components/molecules/TrackingSkeletons';
import { Tracking } from '@/interfaces';
import { useTrackingStore } from '@/stores';
import { Package, MapPin, Calendar } from 'lucide-react';

export default function Home() {
  const { isTrackingLoading, trackingData, trackingError } = useTrackingStore();

  const getStatusColor = (tag: string) => {
    switch (tag) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'InTransit':
        return 'bg-blue-100 text-blue-800';
      case 'Exception':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatOriginLocation = (tracking?: Tracking): string => {
    if (!tracking) return '-';

    const city = tracking.origin_city ?? tracking.origin_raw_location ?? '-';
    const state = tracking.origin_state;

    return [city, state].filter(Boolean).join(', ');
  };

  const formatLocation = (tracking?: Tracking): string => {
    const resolvedCity =
      tracking?.destination_city ?? tracking?.destination_raw_location ?? '-';
    return [resolvedCity, tracking?.destination_state]
      .filter(Boolean)
      .join(', ');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-0 sm:p-6 lg:p-8">
      <div className="max-w-full md:max-w-4xl mx-auto">
        <div className="bg-white flex flex-col rounded-none md:rounded-2xl shadow-xl overflow-hidden h-screen md:h-auto">
          <TrackingHeader />
          <div className="flex-1 overflow-y-auto lg:overflow-y-hidden">
            {isTrackingLoading && <TrackingSkeletons />}

            {trackingError && <RenderTrackingError code={trackingError.code} />}

            {trackingData && !trackingError && (
              <div className="p-6 sm:p-8">
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Tracking Number
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {trackingData?.tracking_number}
                      </p>
                    </div>
                    {trackingData.tag && (
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                          trackingData.tag
                        )}`}
                      >
                        {trackingData?.subtag_message}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Origin</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {formatOriginLocation(trackingData)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="text-xs text-gray-600 mb-1">
                          Destination
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {formatLocation(trackingData)}
                        </p>
                      </div>
                    </div>

                    {trackingData?.courier_estimated_delivery_date && (
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-purple-600 mt-1" />
                        <div>
                          <p className="text-xs text-gray-600 mb-1">
                            Est. Delivery
                          </p>
                          <p className="text-sm font-semibold text-gray-900">
                            {new Date(
                              trackingData.courier_estimated_delivery_date.estimated_delivery_date
                            ).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Tracking History
                  </h2>
                </div>

                <TrackingHistory />
              </div>
            )}

            {!trackingData && !trackingError && !isTrackingLoading && (
              <div className="h-full p-12 text-center">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">
                  Enter a tracking number to view shipment details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
