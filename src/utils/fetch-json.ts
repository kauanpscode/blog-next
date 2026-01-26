export const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const jsonPosts = await response.json();

  return jsonPosts.data;
};
