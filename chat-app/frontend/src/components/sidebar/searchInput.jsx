import { FiSearch } from "react-icons/fi";

const searchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search" className="input input-bordered rounded-full"/>
        <button type="submit" className="btn btn-circle bg-yellow-500 text-black" >
            <FiSearch className="w-6 h-6 outline-none"/>
        </button>
         
    </form>
  )
}

export default searchInput
