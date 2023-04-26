import { useRouter } from 'next/router';
import { supabase } from '../../../utils/supabase';
import { useEffect } from 'react';
import Character_Card from '@/components/character_card';
import { useState } from 'react';
import DisplayCards from '@/components/displaycards';

export default function Update() {
  const router = useRouter();
  const { id } = router.query;
  const [oldCharacters, setOldCharacters] = useState({});
  const [newCharacterData, setNewCharacterData] = useState({
    char_name: '',
    race: '',
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
  });

  let [upVote, setUpVote] = useState(0);

  const { char_name, race, strength, dexterity, constitution, intelligence, wisdom, charisma } = newCharacterData;

  const [state, setState] = useState(true);

  useEffect(() => {
    readCharacter();
  }, [state]);

  const readCharacter = async () => {
    const { data, error } = await supabase.from('character_list').select('*').eq('id', id).single();
    if (error) throw error;
    setOldCharacters(data);
    setNewCharacterData(data);
    console.log(data.heart_ammount);
    setUpVote(data.heart_ammount);
    console.log(upVote);
  };

  const updateCharacter = async () => {
    const { error } = await supabase
      .from('character_list')
      .update({
        char_name: char_name,
        race: race,
        strength: strength,
        dexterity: dexterity,
        constitution: constitution,
        intelligence: intelligence,
        wisdom: wisdom,
        charisma: charisma,
        heart_ammount: upVote,
      })
      .eq('id', id);

    setState(!state);
  };

  const deleteCharacter = async () => {
    const { error } = await supabase.from('character_list').delete().eq('id', id);

    router.push('/');
  };

  const upVoteIncrease = () => {
    setUpVote(upVote++);
    console.log(upVote);
    console.log('upVoteIncrease is Working');
    updateCharacter();
  };

  console.log(newCharacterData);
  console.log(oldCharacters);
  return (
    <div className='flex flex-row  mr-24  w-full'>
      <div className=' w-1/3'></div>
      <div className='w-1/3 justify-center align-middle mt-28'>
        <Character_Card character={oldCharacters} />
        <div className='flex flex-row'>
          <button
            className='bg-gray-400 rounded-lg hover:bg-green-400 text-black p-2'
            onClick={upVoteIncrease}>
            upVote
          </button>
          <button
            className='bg-gray-400 rounded-lg hover:bg-red-400 text-black p-2'
            onClick={deleteCharacter}>
            Delete
          </button>
        </div>
      </div>
      <div className='w-2/3'>
        <div className='items-center text-center flex flex-col justify-center'>
          <div className=' align-text-top '>
            <p className='text-2xl'>Update Your Character</p>
          </div>
          <input
            type='text'
            text='char_name'
            value={char_name}
            onChange={(e) => setNewCharacterData({ ...newCharacterData, char_name: e.target.value })}
            placeholder={oldCharacters.char_name}
            className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
          <input
            type='text'
            text='race'
            value={race}
            onChange={(e) => setNewCharacterData({ ...newCharacterData, race: e.target.value })}
            placeholder={oldCharacters.race}
            className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
          <input
            type='text'
            text='strength'
            value={strength}
            onChange={(e) => setNewCharacterData({ ...newCharacterData, strength: e.target.value })}
            placeholder={oldCharacters.strength}
            className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
          <input
            type='text'
            text='dexterity'
            value={dexterity}
            onChange={(e) => setNewCharacterData({ ...newCharacterData, dexterity: e.target.value })}
            placeholder={oldCharacters.dexterity}
            className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
          <input
            type='text'
            text='constitution'
            value={constitution}
            onChange={(e) => setNewCharacterData({ ...newCharacterData, constitution: e.target.value })}
            placeholder={oldCharacters.constitution}
            className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
          <input
            type='text'
            text='intelligence'
            value={intelligence}
            onChange={(e) => setNewCharacterData({ ...newCharacterData, intelligence: e.target.value })}
            placeholder={oldCharacters.intelligence}
            className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
          <input
            type='text'
            text='wisdom'
            value={wisdom}
            onChange={(e) => setNewCharacterData({ ...newCharacterData, wisdom: e.target.value })}
            placeholder={oldCharacters.wisdom}
            className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
          <input
            type='text'
            text='charisma'
            value={charisma}
            onChange={(e) => setNewCharacterData({ ...newCharacterData, charisma: e.target.value })}
            placeholder={oldCharacters.charisma}
            className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>

          <button
            className='rounded-md bg-gray-500 hover:bg-blue-500 text-white p-3'
            onClick={updateCharacter}>
            Update Character
          </button>
        </div>
      </div>
    </div>
  );
}
