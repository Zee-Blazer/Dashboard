import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  fullName: string;
}

interface AuthState {
  user: User | null;
  keepLoggedIn: boolean;
  lastActivity: number;
  setUser: (user: User | null) => void;
  setKeepLoggedIn: (keep: boolean) => void;
  updateLastActivity: () => void;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      keepLoggedIn: false,
      lastActivity: Date.now(),
      setUser: (user) => set({ user }),
      setKeepLoggedIn: (keep) => set({ keepLoggedIn: keep }),
      updateLastActivity: () => set({ lastActivity: Date.now() }),
      logout: () => set({ user: null, keepLoggedIn: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);