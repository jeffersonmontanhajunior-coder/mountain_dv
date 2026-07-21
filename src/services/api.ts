type FetchOptions = RequestInit & { timeoutMs?: number };

export async function apiFetch<T>(
  path: string,
  options: FetchOptions = {},
): Promise<T> {
  const { timeoutMs = 8000, ...rest } = options;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(path, { ...rest, signal: controller.signal });
    if (!res.ok) {
      throw new Error(`Erro ${res.status} ao buscar ${path}`);
    }
    return (await res.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}
