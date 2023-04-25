import { useState } from "react"
import { supabase } from "../../utils/supabase"
import Router, { useRouter } from "next/router"

export default function Card(element) {



  return (
    <div className="flex flex-col">
      <button className="rounded-lg bg-gray-800 text-white hover:bg-blue-600"
        onClick={() => {
          Router.push('/displayCharacter', undefined, { name: element.char_name, id: element.id })
        }}>
        <p> Name: {element.char_name}</p>
        <p> Race: {element.race}</p>
        <p> Strength: {element.strenght}</p>
        <p> Dexterity: {element.dexterity}</p>
        <p> Constitution: {element.constitution} </p>
        <p> Intelligence: {element.intelligence}</p>
        <p> Wisdom: {element.wisdom}</p>
        <p> Charisma: {element.charisma}</p>
        <p> Time Created: {element.created_at.slice(0, 19)}</p>
        <p> 🖤: {element.heart_ammount}</p>
      </button>
      <div className=" flex flex-row justify-center gap-5">
        <button className="rounded-md bg-yellow-400 hover:bg-green-500 w-full ">
          🖤
        </button>
        <button className="rounded-md bg-red-500 hover:bg-green-500 w-full">
          💬
        </button>
      </div>
    </div>
  )
}
