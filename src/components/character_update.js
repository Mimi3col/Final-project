import { useState } from 'react';
import { supabase } from '../../utils/supabase';
import { useRouter } from 'next/router';

export default function Character_Update() {
  const [characterData, setcharacterData] = useState({
    char_name: '',
    race: '',
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
    heart_amount: '',
  });

  const { char_name, race, strength, dexterity, constitution, intelligence, wisdom, charisma } = characterData;

  const updateCharacter = async () => {
    try {
      //const { data, error } = await supabase.from('character_list').update({ name: 'Australia' }).eq('id', 1).select();

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
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div>
        <button
          className='bg-gray-400 text-black rounded-lg'
          onClick={createBlankCharacter}>
          make blank Character
        </button>
      </div>
    </div>
  );
}
