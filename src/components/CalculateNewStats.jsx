import { useEffect, useState, useContext } from "react";
import { MyContext } from "../App.js"

function CalculateNewStats({materialStatsByLevel}){

    const [ fusionStats, setFusionStats ] = useContext(MyContext)

    useEffect(
      ()=>{
        console.log(fusionStats);
      },
      [fusionStats]
    )

    function handlerAddToStats(){
      const newFusionStats = {...fusionStats}
      const level = newFusionStats.level + 1
      const ATK = newFusionStats.ATK + materialStatsByLevel.ATK
      const DEF = newFusionStats.DEF + materialStatsByLevel.DEF
      setFusionStats({...fusionStats, level, ATK, DEF})
    };

    return(
      <>
        <h3>Stats by Level of {materialStatsByLevel.name}</h3>
        <p>ATK: {materialStatsByLevel.ATK}</p>
        <p>DEF: {materialStatsByLevel.DEF}</p>
        <button onClick={handlerAddToStats}>+</button>
      </>
    );
  
};
  
  export default CalculateNewStats;