import { ErrorResponse } from '@/interfaces';
import { type AxiosError, HttpStatusCode } from 'axios';

/**
 * Custom service error for standardized error throwing
 */
export class ServiceError extends Error {
  code: number;

  /**
   * Constructor
   */
  constructor(message: string, code: number) {
    super(message);
    this.name = 'ServiceError';
    this.code = code;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Helper to handle Axios or unexpected errors safely
 */
export const handleThrowServiceError = (err: unknown): never => {
  const error = err as AxiosError<ErrorResponse>;

  const code =
    error.response?.data?.statusCode ?? HttpStatusCode.InternalServerError;
  const message = error.response?.data?.message ?? 'Unexpected error';

  throw new ServiceError(message, code);
};
