import Card from './card';
import Link from 'next/link';
import Character_Card from './character_card';
export default function DisplayCards({ char_list }) {
  const cardsList = char_list.map((element) => (
    <div key={element.id}>
      <Character_Card character={element} />
    </div>
  ));

  return (
    <div className='grid grid-flow-col'>
      <div className='w-1/6'></div>
      <div className=' grid grid-cols-3 gap-5  w-3/5 '>{cardsList}</div>
    </div>
  );
}
