import { AlertCircle, ServerCrash } from 'lucide-react';

const InternalServerError = () => {
  return (
    <div className="h-full flex items-center justify-center p-12">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
          <ServerCrash className="w-10 h-10 text-red-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Server Error</h3>
        <p className="text-gray-600 mb-6">
          We&apos;re experiencing technical difficulties. Please try again in a
          few moments.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900 mb-1">
              What you can do
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Wait a few minutes and try again</li>
              <li>• Check your internet connection</li>
              <li>• Contact support if the issue persists</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalServerError;
