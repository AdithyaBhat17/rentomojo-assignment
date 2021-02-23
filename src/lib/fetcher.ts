interface Options {
  method: "GET" | "POST"; // these two methods are enough for our use case.
  headers: {
    [key: string]: string;
  };
  body?: string;
}

const ENDPOINT = "https://jsonplaceholder.typicode.com/";

export async function fetcher<ApiResponse>(
  url: string,
  options: Options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: undefined,
  }
): Promise<ApiResponse | any> {
  return fetch(`${ENDPOINT}${url}`, options)
    .then((response) => response.json())
    .catch((error) => error);
}
