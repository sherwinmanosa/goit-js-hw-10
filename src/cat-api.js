const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_Y2vaqRjVp28c3VI7TCUCcgMbPbKxhkA0zPyJ4jDxwgoV87boSCG1hjnIp6QV9H1u';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}
