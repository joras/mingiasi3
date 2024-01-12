import { PaginationOptions } from "./api/apiClient";

export async function fetchWithPagination<T>(
  func: (pagination: PaginationOptions) => Promise<T[]>,
  maxFetch: number = 1000,
  pageSize: number = 10,
): Promise<T[]> {
  const results: T[] = [];

  let currentOffset = 0;
  let currentFetch = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const response = await func({ amount: pageSize, offset: currentOffset });

    results.push(...response);

    if (response.length < pageSize) {
      break;
    }

    currentOffset += pageSize;
    currentFetch += 1;

    if (currentFetch >= maxFetch) {
      throw new Error("unexpected error, too many fetches for pagination");
    }
  }

  return results;
}
