localStorage.removeItem('TODOs_v1')

const defaultElements = [
  { text: "Buscar Notas Cursos Html, Css", completed: false },
  { text: "Iniciar curso introduccion Reactjs", completed: true },
  { text: "Iniciar curso Sprgin JPA", completed: true },
  { text: "Completar Path Amazon Web Services", completed: false },
  { text: "Relizar Decalacion anual", completed: true },
];

localStorage.setItem('TODOs_v1', JSON.stringify(defaultElements))