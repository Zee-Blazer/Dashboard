'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { toast } from 'sonner';

const INACTIVITY_TIMEOUT = 60000; // 1 minute

export function AutoLogout() {
  const router = useRouter();
  const { user, keepLoggedIn, lastActivity, logout } = useAuth();

  useEffect(() => {
    if (!user || keepLoggedIn) return;

    const checkInactivity = () => {
      const now = Date.now();
      if (now - lastActivity > INACTIVITY_TIMEOUT) {
        logout();
        router.push('/auth/login');
        toast.info('You have been logged out due to inactivity.');
      }
    };

    const interval = setInterval(checkInactivity, 1000);
    return () => clearInterval(interval);
  }, [user, keepLoggedIn, lastActivity, logout, router]);

  useEffect(() => {
    if (!user || keepLoggedIn) return;

    const updateActivity = () => {
      useAuth.getState().updateLastActivity();
    };

    window.addEventListener('mousemove', updateActivity);
    window.addEventListener('keydown', updateActivity);
    window.addEventListener('click', updateActivity);
    window.addEventListener('scroll', updateActivity);

    return () => {
      window.removeEventListener('mousemove', updateActivity);
      window.removeEventListener('keydown', updateActivity);
      window.removeEventListener('click', updateActivity);
      window.removeEventListener('scroll', updateActivity);
    };
  }, [user, keepLoggedIn]);

  return null;
}