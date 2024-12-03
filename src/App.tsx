import { useEffect } from "react";
import { useStore } from "./store/zustandStore";
import { fetchBooks } from "./api/booksAPI";
import { fetchUsers } from "./api/usersAPI";

export const App = () => {
  const { books, users, setBooks, setUsers } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const booksData = await fetchBooks();
      const usersData = await fetchUsers();
      setBooks(booksData.response);
      setUsers(usersData.response);
    };

    fetchData();
  }, [setBooks, setUsers]);

  return (
    <div>
      <h1>Books and Users</h1>
      <h2>Books:</h2>
      <pre>{JSON.stringify(books, null, 2)}</pre>
      <h2>Users:</h2>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};
