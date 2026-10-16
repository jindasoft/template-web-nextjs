import { apiUrl } from "@/configs/config";
import { HttpHeader } from "@/core/constants/http_header";
import { getLocale } from "next-intl/server";

type FetchOptions = RequestInit & {
  locale?: string;
  params?: Record<string, string | number | boolean | null | undefined>;
  next?: {
    revalidate?: number;
    tags?: string[];
  };
};

const API_LOCALES: Record<string, string> = {
  en: "en-US",
  th: "th-TH",
};

export class ApiClient {
  constructor(private readonly baseUrl: string = apiUrl) { }

  async get<T>(path: string, options: Omit<FetchOptions, "method"> = {}): Promise<T> {
    return this.request<T>(path, { ...options, method: "GET" });
  }

  async request<T>(path: string, options: FetchOptions = {}): Promise<T> {
    const { locale: requestedLocale, params, ...fetchOptions } = options;
    const url = this.createUrl(path, params);
    const locale = requestedLocale ?? (await getLocale());
    const headers = new Headers(fetchOptions.headers);
    const acceptLanguage = API_LOCALES[locale] ?? locale;

    headers.set(HttpHeader.AcceptLanguage, acceptLanguage);
    const response = await fetch(url, { ...fetchOptions, headers });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  private createUrl(path: string, params?: Record<string, string | number | boolean | null | undefined>): string {
    const url = /^https?:\/\//.test(path)
      ? path
      : `${this.baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

    const searchParams = new URLSearchParams();

    Object.entries(params ?? {}).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "") {
        return;
      }

      searchParams.set(key, String(value));
    });

    const query = searchParams.toString();
    return query ? `${url}?${query}` : url;
  }
}

export const apiClient = new ApiClient();
