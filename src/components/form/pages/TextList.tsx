import React from 'react';

interface Props {
  texts?: any[]
}

export const TextList = ({texts}: Props) => {
  return (
    <ul className='list'>
      {
        texts?.map( (text) => <li key={text.id} className="list_element">{text.text}</li>)
      }
    </ul>
  )
}
