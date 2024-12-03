export const fetchBooks = async () => {
  // Simulación de llamada a API
  return {
    response: [
      {
        id: 1,
        title: "Clean Code",
        author: {
          id: 1,
          name: "Uncle Bob",
        },
      },
      {
        id: 2,
        title: "Clean Architecture",
        author: {
          id: 1,
          name: "Uncle Bob",
        },
      },
    ],
  };
};
