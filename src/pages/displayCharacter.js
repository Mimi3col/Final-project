
export default function DisplayCharacter(character) {

  console.log(character);

  return (
    <div>
      Display:{character.id}
      Name:{character.char_name}
    </div>
  )
}
