
interface Props {
  texts?: any[]
}

export const TextList = ({texts}: Props) => {
  return (
    <ul>
      {
        texts?.map( (text) => <li key={text.id} className="list_element">{text.text}</li>)
      }
    </ul>
  )
}
