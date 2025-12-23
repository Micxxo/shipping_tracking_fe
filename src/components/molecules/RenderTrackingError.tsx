import { HttpStatusCode } from 'axios';
import ToManyRequest from './ToManyRequest';
import TrackingNotFound from './TrackingNotFound';
import InternalServerError from './InternalServerError';
import BadRequest from './BadRequest';

interface RenderTrackingErrorProps {
  code: HttpStatusCode;
}

const RenderTrackingError = ({ code }: RenderTrackingErrorProps) => {
  if (code === HttpStatusCode.TooManyRequests) return <ToManyRequest />;
  if (code === HttpStatusCode.NotFound) return <TrackingNotFound />;
  if (code === HttpStatusCode.BadRequest) return <BadRequest />;

  return <InternalServerError />;
};

export default RenderTrackingError;
