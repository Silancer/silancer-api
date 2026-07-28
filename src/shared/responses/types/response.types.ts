export interface ApiSuccessResponse<T = unknown> {
  success: true;
  status: number;
  code: string;
  message: string;
  data: T;
  meta?: Record<string, unknown>;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  status: number;
  code: string;
  message: string;
  errors?: ValidationError[];
}

export interface CursorPagination {
  limit: number;
  count: number;
  hasNext: boolean;
  hasPrevious: boolean;
  nextCursor: string | null;
  previousCursor: string | null;
}
