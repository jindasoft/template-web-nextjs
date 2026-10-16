import type { Meta } from './meta';

export interface ApiResponse<T> {
  success: boolean;
  type: string;
  message: string;
  meta?: Meta;
  data: T;
}
