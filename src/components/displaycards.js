import Card from "./card";

export default function DisplayCards({ char_list }) {


  const cardsList = char_list.map((element) => (
    <div key={element.id}>
      <button className="rounded-lg bg-gray-600 text-white p-2">
        <p> Name: {element.char_name}</p>
        <p> Race: {element.race}</p>
        <p> Strength: {element.strenght}</p>
        <p> Dexterity: {element.dexterity}</p>
        <p> Constitution: {element.constitution} </p>
        <p> Intelligence: {element.intelligence}</p>
        <p> Wisdom: {element.wisdom}</p>
        <p> Charisma: {element.charisma}</p>
        <p> Time Created: {element.created_at.slice(0, 19)}</p>
        <p> 🖤: {element.hearts}</p>
      </button>
    </div>
  ));


  return (
    <div className=" items-center flex flex-col gap-2 m-4 min-w-96">
      {cardsList}
    </div>
  )
}
