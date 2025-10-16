export const schemaService = {
  createSchema: async (prompt: string) => {
    const response = await fetch('http://localhost:5000/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error('Failed to create category');
    }

    return response.json();
  },
};
