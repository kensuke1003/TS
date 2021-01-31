import { nanoid } from 'nanoid';
import { FC, useState } from 'react';
import { textChangeRangeIsUnchanged } from 'typescript';
import Form from './Form';
import List from './List';

export type Todo = {
  content: string;
  id: string;
  isDone: boolean;
};

//nanoid　インストール
const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      content: '掃除をする',
      id: nanoid(),
      isDone: false,
    },
    {
      content: '洗濯をする',
      id: nanoid(),
      isDone: false,
    },
  ]);

  const addTodo = (text: string) => {
    setTodos([...todos, { content: text, id: nanoid(), isDone: false }]);
  };

  const deleteTodo = (id: string):void =>{
    setTodos(todos.filter((todo)=> todo.id !== id));
  };

  const toggleTodo = (id:string): void =>{
    setTodos(
      todos.map((todo)=>{
        if(todo.id === id){
          return {...todo,isDone: !todo.isDone};
        }
        return todo;
      })
    );
  };
  return (
    <>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
};

export default App;