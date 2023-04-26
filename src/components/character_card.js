import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Character_Card({ character }) {
  return (
    <Link
      href={{
        pathname: '/update/[id]',
        query: { id: character.id },
      }}
      className='rounded-xl  text-black w-full h-full '>
      <div className='rounded-xl bg-gray-400  text-black w-full  hover:bg-blue-400 text-xl '>
        <div className='flex flex-col grow text-start h-4/5 p-2'>
          <p className='text-2xl font-semibold '>{character.char_name}</p>
          <p>Race: {character.race}</p>
          <p>strength: {character.strength}</p>
          <p>Dexterity: {character.dexterity}</p>
          <p>Constitution: {character.constitution}</p>
          <p>Intelligence: {character.intelligence}</p>
          <p>Wisdom: {character.wisdom}</p>
          <p>Charisma:{character.charisma}</p>
        </div>
        <div className='flex flex-row-reverse text-end h-1/5 '>
          <div className='w-1/12'> </div>
          UPvotes: {character.heart_ammount}
        </div>
      </div>
    </Link>
  );
}
