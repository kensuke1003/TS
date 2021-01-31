import { FC } from 'react';

type Props ={
  content: string;
  id: string;
  isDone: boolean;
  deleteTodo:(id: string)=>void;
  toggleTodo:(id: string)=>void;
};


//typescriptは２つ値を受け渡すこと！！！！！！

const Item: FC<Props> = ({content,id,isDone,deleteTodo,toggleTodo}) => {
  return(
    <li>
      <input type='checkbox' onChange={() => toggleTodo(id)} checked={isDone} />
      <span>{content}</span>
      <button onClick={()=>deleteTodo(id)}>削除</button>
    </li>
  );
};

export default Item;