interface Options {
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers: {
    [key: string]: string;
  };
  body: string;
}

const ENDPOINT = "https://jsonplaceholder.typicode.com/";

const defaultOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  body: undefined,
};

export async function fetcher<ApiResponse>(
  url: string,
  options?: Partial<Options>
): Promise<ApiResponse | any> {
  return fetch(`${ENDPOINT}${url}`, {
    ...defaultOptions,
    ...options,
  })
    .then((response) => response.json())
    .catch((error) => error);
}
