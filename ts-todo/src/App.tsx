import { FC, useState } from 'react';
import Form from './Form';
import List from './List';

type Todo = {
  content: string;
  id: string;
  isDone: boolean;
};

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      content: '掃除をする',
      id: '1',
      isDone: false,
    },
    {
      content: '洗濯をする',
      id: '2',
      isDone: false,
    },
  ]);
  return (
    <>
      <Form />
      <List />
    </>
  );
};

export default App;