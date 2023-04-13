const backendUrl = import.meta.env.VITE_BACKEND_URL;

export function getData(data: string) {
  return fetch(backendUrl + data, { method: 'POST' });
}
