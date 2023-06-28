import React, {useState} from "react";





function SearchSale(props){





    const [SearchTerms, setSearchTerms] = useState("")





    const onChangeSearch = (event) => {



        setSearchTerms(event.currentTarget.value)





        props.refreshFunction(event.currentTarget.value)



    }





        return(



        <div>



           <input  type="search" id="regsearch" name="gsearch"

            style={{textAlign: "left",margin: "0px"}}

           value={SearchTerms}

        

           placeholder="Search by Name"



           onChange={onChangeSearch}/>



           



        </div>





    )



}





export default SearchSale;