import { getLocaleHeader } from "@lib/util/get-locale-header"
import Medusa, { FetchArgs, FetchInput } from "@medusajs/js-sdk"

// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = "http://localhost:9000"

if (process.env.MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.MEDUSA_BACKEND_URL
}

export const sdk = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  debug: process.env.NODE_ENV === "development",
  publishableKey: process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
})

console.log("Medusa SDK Initialized with:", {
  baseUrl: MEDUSA_BACKEND_URL,
  publishableKey: process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY ? "EXISTS" : "MISSING",
});

const originalFetch = sdk.client.fetch.bind(sdk.client)

sdk.client.fetch = async <T>(
  input: FetchInput,
  init?: FetchArgs
): Promise<T> => {
  const headers = init?.headers ?? {}
  let localeHeader: Record<string, string | null> | undefined
  try {
    localeHeader = await getLocaleHeader()
    headers["x-medusa-locale"] ??= localeHeader["x-medusa-locale"]
  } catch {}

  const newHeaders = {
    ...localeHeader,
    ...headers,
  }
  init = {
    ...init,
    headers: newHeaders,
  }
  
  console.log(`Medusa fetch: ${input}`, {
    method: init.method || "GET",
    headers: newHeaders,
  });

  try {
    const response = await originalFetch(input, init);
    return response as T;
  } catch (error: any) {
    console.error("Medusa fetch error:", {
      url: input,
      status: error.status,
      statusText: error.statusText,
      message: error.message,
      publishableKey: process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY ? "EXISTS" : "MISSING",
    });
    throw error;
  }
}
