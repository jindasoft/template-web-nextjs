export interface ApiResponse<T> {
  success: boolean;
  type: string;
  message: string;
  data: T;
}
