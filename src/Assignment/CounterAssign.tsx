import { useState } from "react";


function counterAssign() {
    let [count , setcount] = useState(0);
    return(
        <>
        
        <h2 className="text-primary bg-dark text-center">"Counter App"</h2>
        <div> <button className="rounded bg-info text-danger " onClick={() => setcount(count + 1)}> Increament </button></div>

        <div>  <button className="rounded bg-info text-danger " onClick={() => setcount(count - 1)}> Increament </button></div>
          
          <h4>  count: <span className="badge bg-warning">{count}</span></h4>
         
         
        
        </>
    )
}

export default counterAssign;

