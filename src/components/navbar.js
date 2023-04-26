import Link from "next/link"

// NavBar is done in terms of styling
// Need to update links for new pages 

export default function NavBar() {


  return (
    <div className="items-start flex flex-row gap-2 m-3 ">
      <div className='w-1/5 flex flex-row gap-2'>
        <Link href='/'
          className="rounded-lg text-white bg-gray-400 hover:bg-blue-400 p-2">
          Home Feed
        </Link>
        <Link href='/create_character'
          className="rounded-lg text-white bg-gray-400 hover:bg-blue-400 p-2">
          Create Caracter
        </Link>
      </div>
      <div className=" align-middle text-center w-3/5 ">
        <p className=" text-gray-500 text-2xl"> D&D-Starting-Attributes </p>
      </div>
    </div>
  )
}
