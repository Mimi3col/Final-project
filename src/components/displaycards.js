import Card from "./card";

export default function DisplayCards({ char_list }) {


  const cardsList = char_list.map((element) => (
    <div key={element.id}>
      <button className="">

        <Card char_name={element.char_name}
          race={element.race} strenght={element.strength}
          dexterity={element.dexterity}
          constitution={element.constitution}
          wisdom={element.wisdom}
          charisma={element.charisma}
          created_at={element.created_at}
          hearts={element.hearts} />

      </button>
    </div>
  ));


  return (
    <div className=" items-center flex flex-col gap-2 m-4 min-w-96">
      {cardsList}
      <button className="bg-gray-500 text-white">
        Add Heart
      </button>
    </div>
  )
}
