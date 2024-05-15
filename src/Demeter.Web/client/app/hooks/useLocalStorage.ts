import { useState, useEffect, Dispatch, SetStateAction } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  // Initialize state with value from localStorage if available, otherwise use initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error retrieving from localStorage:", error);
      return initialValue;
    }
  });

  // Update localStorage whenever storedValue changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error storing to localStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
