import { FormEvent, useState } from 'react';
import { fetchGetTexts, fetchAddText } from '../../../helpers/api';
import { TextList } from './TextList';
import '../styles.css';

export const Form = () => {
  const [text, setText] = useState<string>("");
  const [listTexts, setListTexts] = useState([]);

  const onSubmit = async( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    if (text !== "") {
      await fetchAddText(text);
      await getTexts();
      setText("");
    }
  }

  const getTexts = async() => {
    const texts = await fetchGetTexts();
    setListTexts(texts);
  }
  
  return (
    <div>
      <h1>Magneto app</h1>

      <form onSubmit={ onSubmit }>
        <input 
          type="text" 
          placeholder="Enter text"
          name="text"
          value={ text }
          onChange={ (e) => setText(e.target.value) }
        />

        <button type="submit">Enviar</button>
      </form>

      <TextList texts={listTexts}/>
    </div>
  )
}
