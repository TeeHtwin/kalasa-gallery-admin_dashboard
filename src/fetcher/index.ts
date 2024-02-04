const base_url = process.env.NEXT_PUBLIC_BASE_URL ?? '';

export async function loginFetcher<T>(
  url: string,
  body: { email: string; password: string },
): Promise<T> {
  try {
    const res = await fetch(`${base_url}/api/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (res.status < 200 || res.status >= 300) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    return res.json();
  } catch (error: any) {
    throw new Error(
      `Error: Failed to fetch ${url} with body ${JSON.stringify(
        body,
      )}. Error: ${error.status} ${error.statusText}`,
    );
  }
}
