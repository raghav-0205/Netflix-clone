import React ,{useState} from 'react'
import { easeInOut, hover, motion } from "framer-motion";
import { FaMagnifyingGlass, FaRegBell } from "react-icons/fa6";


function Search({setsearchOpen , searchOpen}) {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e)=>{
        setSearchInput(e.target.value)
    }

  return (
    <div>
      <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: -10 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex"
              >
                <span className={`${searchOpen ? "bg-[#181818] p-1": ""} rounded-tl-sm rounded-bl-sm border-t border-l border-b border-[#262626]`}><FaMagnifyingGlass className={`hover:cursor-pointer m-auto`} size={20} onClick={()=>setsearchOpen(!searchOpen)}/></span>
                  <input type="text" value={searchInput} placeholder="Search for a movie or TV show" className="w-[20vw] h-[3vh] p-4 text-sm text-gray-300 rounded-tr-sm rounded-br-sm bg-[#181818] opacity-98 outline-none border border-[#262626]" autoFocus onBlur={()=> setsearchOpen(!searchOpen)} onChange={handleChange}/>
            </motion.div>
    </div>
  )
}

export default Search
