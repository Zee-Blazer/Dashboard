'use client';

import React, { useState, useEffect } from 'react';

import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

export function Providers({ children }: { children: React.ReactNode }) {

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
      let timeout:any = 5000;

      const resetTimer = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          console.log("Reset Timeout");
          handleLogout(); // Logout after 1 min of inactivity
        }, 60000); // 60,000ms = 1 minute
      };

      const handleLogout = () => {
        console.log("User logged out due to inactivity.");
        setIsActive(false); // Simulate logout state
        // Clear user session or redirect to login
        localStorage.removeItem("user"); // Example: clearing user session
        window.location.href = "/auth/login"; // Redirect to login page
      };

      // Listen for user activity
      window.addEventListener("mousemove", resetTimer);
      window.addEventListener("keydown", resetTimer);

      resetTimer(); // Start timer

      return () => {
        clearTimeout(timeout);
        window.removeEventListener("mousemove", resetTimer);
        window.removeEventListener("keydown", resetTimer);
      };
    }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster />
    </ThemeProvider>
  );
}