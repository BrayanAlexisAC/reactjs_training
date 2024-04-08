import React, { createElement } from "react";
import "../assets/styles/TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  
  console.log('value: ',searchValue);

  return createElement(
    'input',
    {
      className:'todoSearch', 
      type:'text', 
      placeholder:'Estudiar ReactJs', 
      value:searchValue,
      onChange:(event) => {
        setSearchValue(event.target.value)
      }
    }
  )
}

export { TodoSearch };
