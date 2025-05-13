import { useState } from "react";


interface CounterProps {
title: string;
initialValue: number;
}

function counter(props: CounterProps) {
    let [count , setcount] = useState(props.initialValue);
    return(
        <>
        
        <h2 className="text-primary bg-dark text-center">{props.title}</h2>
         <div style={{display: "flex", justifyContent: "center", gap: "10px",marginTop: "40px"}}>
            <button className="rounded bg-info text-danger " onClick={() => setcount(count + 1)}> Increament </button>
         </div>
         <div style={{display: "flex", justifyContent: "center", gap: "10px",marginTop: "40px"}}>
            <button className="rounded bg-info text-danger " onClick={() => setcount(count - 1)}> Increament </button>
         </div>
         <h4 style={{textAlign: "center", marginTop: "20px"}}>
            count: <span className="badge bg-warning">{count}</span>
         </h4>
        
        </>
    )
}

export default counter;

// const x: number = 100;
  // const y: number = 0;