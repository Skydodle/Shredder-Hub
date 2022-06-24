export async function getAllBoards() {

  const response = await fetch('/api/snbds');
  return await response.json();
}

export async function createUser(data) {
  const response = await fetch(`/api/user`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: data})
    })
  return await response.json();
}

