import Card from "./card";
import Link from "next/link"
export default function DisplayCards({ char_list }) {


  const cardsList = char_list.map((element) => (
    <div key={element.id}>

      <Card char_name={element.char_name}
        race={element.race} strenght={element.strength}
        dexterity={element.dexterity}
        constitution={element.constitution}
        wisdom={element.wisdom}
        charisma={element.charisma}
        created_at={element.created_at}
        heart_ammount={element.heart_ammount}
        id={element.id}
        character_data={element}
      />
      <Link href={{
        pathname: '/extraInfoSingle',
        query: { element: element },
      }}>
        TO Extra Info</Link>
    </div>
  ));


  return (
    <div className=" items-center flex flex-col gap-2 m-4 min-w-96">
      {cardsList}
    </div>
  )
}
