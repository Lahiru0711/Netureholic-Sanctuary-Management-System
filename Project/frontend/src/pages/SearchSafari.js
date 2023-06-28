import React, {useState} from "react";

function SearchSafari(props){

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)
    }

        return(
        <div>
           <input  type="search" id="regsearch" name="gsearch"
           value={SearchTerms}
           placeholder="Search by Vehicle Number"
           onChange={onChangeSearch}/>
           
        </div>

    )
}

export default SearchSafari;