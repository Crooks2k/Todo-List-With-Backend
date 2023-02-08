import React, { useState } from "react";
import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";
import "./App.css"
import swal from 'sweetalert';
const appTitle = "| Todo-List With Backend |";

const list = [
  { title: "test #1", completed: false, id: "1"},
  { title: "test #2", completed: false, id: "2"},
  { title: "test #3", completed: false, id: "3"}
];

const App = () => {

  const [todoList, setTodoList] = useState(list);

  const addTodo = (item) => {
    setTodoList((oldlist) => [...oldlist, item]);
  };

  const removeTodo = (id) => {
     //Sweet alert modals funct

    swal({
      title: "Estas seguro?",
      text: "Una vez eliminada, tendras que crear tu nota nuevamente!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setTodoList((oldlist) => oldlist.filter((item) => item.id !== id) ) //remove note
        swal("Tu nota fue eliminada correctamente", {
          icon: "success",
        });
      } else {
        swal("Cancelaste la eliminación de tu nota");
      }
    });
    
  };

  return(

    <div className="ui container center aligned" id="main-container">
      <Section>
        <h1 id="app-title">{appTitle}</h1>
      </Section>
      <Section>
        <Form addTodo={addTodo} />
      </Section>
      <Section>
        <List removeTodoListProp={removeTodo} list={todoList} />
      </Section>
    </div>
  ) 
}
export default App;