// home feed and base page layout 

import { useEffect, useState } from "react";
import { supabase } from "/utils/supabase";
import DisplayCards from "@/components/displaycards";

export default function Home() {
  const [charInfo, setCharInfo] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetchCharInfo();

  }, []);

  const fetchCharInfo = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("character_list")
        .select('*')


      if (error) throw error;
      setCharInfo(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(charInfo);

  if (loading) {
    return <div className=" text-black text-2xl">Fetching Characters...</div>;
  }


  return (
    <div className='text-center  items-center '>

      <div className=' self-center'>
        <DisplayCards char_list={charInfo} />

      </div>
    </div>
  )
}
