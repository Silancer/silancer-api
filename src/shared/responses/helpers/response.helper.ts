import type {
  ApiErrorResponse,
  ApiSuccessResponse,
  CursorPagination,
  ValidationError,
} from "../types/response.types";

export const success = <T>(
  data: T,
  options: {
    status?: number;
    code: string;
    message: string;
    meta?: Record<string, unknown>;
  },
): ApiSuccessResponse<T> => ({
  success: true,
  status: options.status ?? 200,
  code: options.code,
  message: options.message,
  data,
  meta: options.meta,
});

export const successCursor = <T>(
  data: T[],
  pagination: CursorPagination,
  options: {
    status?: number;
    code: string;
    message: string;
  },
): ApiSuccessResponse<T[]> => ({
  success: true,
  status: options.status ?? 200,
  code: options.code,
  message: options.message,
  data,
  meta: {
    pagination,
  },
});

export const error = (options: {
  status: number;
  code: string;
  message: string;
  errors?: ValidationError[];
}): ApiErrorResponse => ({
  success: false,
  status: options.status,
  code: options.code,
  message: options.message,
  errors: options.errors,
});
