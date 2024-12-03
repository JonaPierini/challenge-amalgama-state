import { create } from "zustand";

interface Author {
  id: number;
  name: string;
}

interface Book {
  id: number;
  title: string;
  author: Author;
}

interface FavoriteBook {
  id: number;
  favorited_at: string;
}

interface User {
  id: number;
  email: string;
  nickname: string;
  favorite_books: FavoriteBook[];
}

interface State {
  books: Book[];
  users: User[];
  setBooks: (books: Book[]) => void;
  setUsers: (users: User[]) => void;
}

export const useStore = create<State>((set) => ({
  books: [],
  users: [],
  setBooks: (books) => set(() => ({ books })),
  setUsers: (users) => set(() => ({ users })),
}));
