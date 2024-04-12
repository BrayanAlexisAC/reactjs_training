import React from "react";

export function useLocalStorage(itemName, defaultValue, useJSON) {
  const [item, setItem] = React.useState(defaultValue);
  const [isLoading, setIsLoading] = React.useState(true)
  const {hasError, setHasError} = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName)
        let parseItem;
        if (useJSON) {
          parseItem = localStorageItem ? JSON.parse(localStorageItem) : defaultValue;
        } else {
          parseItem = localStorageItem ? localStorageItem : defaultValue;
        }
        setItem(parseItem)
        setIsLoading(false)
      } catch (error) {
        setHasError(true)
        console.error(error)
        setIsLoading(false)
      }
    }, 2000)
  },[])
  
  const updateItem = (itemValue) => {
    setItem(itemValue);
    localStorage.setItem(itemName, JSON.stringify(itemValue));
  };

  return {
    item, 
    updateItem,
    isLoading,
    hasError
  };
}
