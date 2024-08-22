async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}


interface User {
  id: number;
  name: string;
  email: string;
}

const url = 'https://jsonplaceholder.typicode.com/users/1';

fetchData<User>(url)
  .then((data) => {
    console.log('Fetched User:', data);
  })
  .catch((error) => {
    console.error(error);
  });