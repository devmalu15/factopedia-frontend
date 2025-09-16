export async function fetchFacts(category) {
  const response = await fetch('https://factopedia-backend-production.up.railway.app/api/category', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.message;
}