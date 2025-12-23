import { AlertCircle } from 'lucide-react';

const ToManyRequest = () => {
  return (
    <div className="h-full flex items-center justify-center p-12">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-orange-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Too Many Requests
        </h3>
        <p className="text-gray-600 mb-6">
          You&apos;ve made too many tracking requests. Please wait a moment
          before trying again.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="text-sm font-semibold text-blue-900 mb-1">
              What to do
            </p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Wait a few hours before searching again</li>
              <li>• Avoid refreshing the page repeatedly</li>
              <li>• Contact support if issue persists</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToManyRequest;
