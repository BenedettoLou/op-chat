import "./search-bar.css"
import { MdOutlineSearch } from "react-icons/md";
/**
 * filter patients by name or Serial number
 */
function SearchBar() {
    return <>
        <div id="search-bar">
            <input type="text" name="search" id="search" placeholder="Search patient..."/>
            <button>
                <MdOutlineSearch />
            </button>
        </div>
    </>
}

export default SearchBar
