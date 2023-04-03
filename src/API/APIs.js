export default async function fetchAnimalData() {
  const baseURL = 'https://brianiswu-cat-facts-v1.p.rapidapi.com/facts';
  const response = await fetch(baseURL);
  if (response.status !== 200) {
    throw new Error('Please check your endpoint');
  } try {
    const animalData = await response.json();
    return animalData;
  } catch (error) {
    throw new Error(error.message);
  }
}
