import React, { useState } from 'react';
import { IState as Props } from '../App'

interface IProps {
  people: Props["people"],
  setPeople: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        age: number;
        url: string;
        note?: string | undefined;
      }[]
    >
  >
}

const Form: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    img: '',
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e):void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
      if (!input.name || !input.age || !input.img) return null;
      setPeople([
          ...people,
          {
              name: input.name,
              age: parseInt(input.age),
              url: input.img,
              note: input.note
          }
      ])
      setInput({
        name: '',
        age: '',
        note: '',
        img: '',
      });
  }

  return (
    <div className='AddToList'>
      <input
        type='text'
        placeholder='Name'
        value={input.name}
        name='name'
        onChange={handleChange}
        className='AddToList-input'
      />
      <input
        type='number'
        placeholder='Age'
        value={input.age}
        name='age'
        onChange={handleChange}
        className='AddToList-input'
      />
      <input
        type='text'
        placeholder='Image URL'
        value={input.img}
        name='img'
        onChange={handleChange}
        className='AddToList-input'
      />
      <textarea
        placeholder='Notes (optional)'
        value={input.note}
        name='note'
        onChange={handleChange}
        className='AddToList-input'
      />
      <button className="AddToList-btn" onClick={handleClick}>Add to List</button>
    </div>
  );
};

export default Form;
