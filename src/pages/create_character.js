import { supabase } from '/utils/supabase';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Character_Update from '@/components/character_update';
import Fetch_Row from '@/components/fetch_row';

export default function Create_Character() {
  const router = useRouter();
  const [characterData, setcharacterData] = useState({
    char_name: '',
    race: '',
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
  });

  const { char_name, race, strength, dexterity, constitution, intelligence, wisdom, charisma } = characterData;

  const createCharacter = async () => {
    try {
      const { error } = await supabase
        .from('character_list')
        .insert({
          char_name,
          race,
          strength,
          dexterity,
          constitution,
          intelligence,
          wisdom,
          charisma,
        })
        .single();
      if (error) throw error;
      alert('character created successfully');
      setcharacterData({
        char_name: '',
        race: '',
        strength: '',
        dexterity: '',
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: '',
      });
      console.log(characterData);
      router.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='items-center text-center flex flex-col justify-center'>
      <div className=' ml-32 mr-32 align-text-top '>
        <p className='text-2xl'>Create your Character</p>
        <p>Finding Attributes: </p>
        Take six, six-sided die and roll them. Take the sum of the top 3 values of the six rolled die. Then assign this
        value to any attribute you want
      </div>
      <input
        type='text'
        text='char_name'
        value={char_name}
        onChange={(e) => setcharacterData({ ...characterData, char_name: e.target.value })}
        placeholder='enter Name of character'
        className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
      <input
        type='text'
        text='race'
        value={race}
        onChange={(e) => setcharacterData({ ...characterData, race: e.target.value })}
        placeholder='enter Race of character'
        className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
      <input
        type='text'
        text='strength'
        value={strength}
        onChange={(e) => setcharacterData({ ...characterData, strength: e.target.value })}
        placeholder='enter strength of character'
        className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
      <input
        type='text'
        text='dexterity'
        value={dexterity}
        onChange={(e) => setcharacterData({ ...characterData, dexterity: e.target.value })}
        placeholder='enter dexterity of character'
        className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
      <input
        type='text'
        text='constitution'
        value={constitution}
        onChange={(e) => setcharacterData({ ...characterData, constitution: e.target.value })}
        placeholder='enter constitution of character'
        className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
      <input
        type='text'
        text='intelligence'
        value={intelligence}
        onChange={(e) => setcharacterData({ ...characterData, intelligence: e.target.value })}
        placeholder='enter intelligence of character'
        className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
      <input
        type='text'
        text='wisdom'
        value={wisdom}
        onChange={(e) => setcharacterData({ ...characterData, wisdom: e.target.value })}
        placeholder='enter wisdom of character'
        className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>
      <input
        type='text'
        text='charisma'
        value={charisma}
        onChange={(e) => setcharacterData({ ...characterData, charisma: e.target.value })}
        placeholder='enter charisma of character'
        className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 '></input>

      <button
        className='rounded-md bg-gray-500 hover:bg-blue-500 text-white p-3'
        onClick={createCharacter}>
        Create Character
      </button>
    </div>
  );
}
