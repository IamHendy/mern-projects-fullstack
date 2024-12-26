import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import useConversation from '../../zustand/useConversation'
import useGetConversation from '../../hooks/useGetConversations'
import toast from "react-hot-toast";

const searchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation} = useConversation();
  const {conversations} = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error(" Search term must be at least 3 characters")
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase(). includes(search.toLowerCase()));
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }else toast.error("No such user found");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={search}
        placeholder="Search"
        className="input input-bordered rounded-full"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-yellow-500 text-black">
        <FiSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default searchInput;
