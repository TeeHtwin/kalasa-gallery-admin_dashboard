const base_url = process.env.NEXT_PUBLIC_BASE_URL ?? '';

export async function POSTFetcher<T>(
  url: string,
  body: any,
  withToken?: boolean,
): Promise<T> {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (withToken) {
      headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    }
    const res = await fetch(`${base_url}/api/${url}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    if (res.status < 200 || res.status >= 300) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(
      `Error: Failed to fetch ${url}. Error: ${error.status} ${error.statusText}`,
    );
    return error;
  }
}
