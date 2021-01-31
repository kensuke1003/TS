import { FC,useState } from 'react';

type Props= {
   addTodo: (text: string) => void;
 }


const Form: FC<Props> = ({addTodo}) => {
  const [text,setText] = useState('');

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(text.length === 0){
      alert('文字を入力してください');
      return;
    }
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit ={handleSubmit}>
      <input value={text} onChange= {(e)=>setText(e.target.value)} />
      <button>送信</button>
    </form>
  );
};

export default Form;







// これはchatappから撮ってきたもの