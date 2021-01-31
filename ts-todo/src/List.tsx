import { FC } from 'react';
import Item from './Item';
import { Todo } from './App';


//必要なPropsを描く
type Props = {
  todos: Todo[];
  //　？はオプショナル
  abc?: string;
  deleteTodo: (id:string)=>void;
  toggleTodo: (id: string) =>void;
};
const List: FC<Props> = ({todos,deleteTodo,toggleTodo}) => {
  return (
    <>
      {todos.map((todo)=>{
        return(
          <Item
          key={todo.id}
          content={todo.content}
          id={todo.id}
          isDone={todo.isDone}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          />
        );
      })}
      </>
  );
};

export default List;