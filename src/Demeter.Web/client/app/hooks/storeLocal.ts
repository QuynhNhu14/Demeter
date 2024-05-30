
// Define a hook that returns a getter and setter for interacting with localStorage
export const storeLocal = <T,>(key: string, initialValue: T) => {

  const item = localStorage.getItem(key);
  if (item === null) {
    localStorage.setItem(key, JSON.stringify(initialValue));
  }

  // Function to get the current value from localStorage
  const getStoredValue = (): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error retrieving from localStorage:", error);
      return null;
    }
  };

  // Function to update the value in localStorage
  const setStoredValue = (newValue: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error("Error storing to localStorage:", error);
    }
  };

  return { value: getStoredValue(), setValue: setStoredValue };
};
