import Link from "next/link"

export default function NavBar() {


  return (
    <div className="items-start flex flex-row gap-2 ml-8 mt-8">
      <Link href='/'
        className="rounded-lg text-white bg-gray-500 hover:bg-blue-500 p-2">
        Home Feed
      </Link>
    </div>
  )
}
