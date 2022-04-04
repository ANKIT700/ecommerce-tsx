 import React from "react"
import { Sephora } from "../../api/api";

interface storeProps{

}

 const stores:React.FC<storeProps>=(props)=>{

    React.useEffect(() => {
       
        //   Sephora.autoComplete().then((res) => {
        //   });
      }, []);
    return(<>
    Available Stores:
    </>)
 }

 export default stores;