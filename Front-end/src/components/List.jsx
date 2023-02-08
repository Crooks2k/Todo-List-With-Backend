import React from "react";
import Todo from "./Todo";

const List = ({removeTodoListProp, list}) => {

    const renderedlist = list.map((item) => 
    <Todo 
    title={item.title}
    completed={item.completed} 
    removeTodoItemProp={(e) => removeTodoListProp(item.id)}
    key={item.title}/>);

    return (

        <div className="ui grid center aligned">
           {renderedlist}
        </div>
    );
};

export default List;