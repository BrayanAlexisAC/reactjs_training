import { useState } from "react";

export function useLocalStorage(itemName, defaultValue, useJSON) {
  const localStorageItem = localStorage.getItem(itemName);

  let parseItem;
  if (useJSON) {
    parseItem = localStorageItem ? JSON.parse(localStorageItem) : defaultValue;
  } else {
    parseItem = localStorageItem ? localStorageItem : defaultValue;
  }

  const [item, setItem] = useState(parseItem);

  const updateItem = (itemValue) => {
    setItem(itemValue);
    localStorage.setItem(itemName, JSON.stringify(itemValue));
  };

  return [item, updateItem];
}
