import { useEffect, useState, useContext } from "react";
import { MyContext } from "../App.js"

function CalculateNewStats({materialStatsByLevel, materialName}){

    const [ fusionStats, setFusionStats ] = useContext(MyContext)

    const [ statTransferType, setStatTransferType ] = useState(materialName+"-neutral")

    useEffect(
      ()=>{
        console.log(statTransferType);
      },
      [statTransferType]
    )

    function handlerAddToStats(){
      const newFusionStats = {...fusionStats}
      const level = newFusionStats.level + 1
      if (statTransferType === materialName+"-ATK") {
        const ATK = newFusionStats.ATK + (materialStatsByLevel.ATK*2)
        setFusionStats({...fusionStats, level, ATK})
      } else if (statTransferType === materialName+"-DEF") {
        const DEF = newFusionStats.DEF + (materialStatsByLevel.DEF*2)
        setFusionStats({...fusionStats, level, DEF})
      } else {
        const ATK = newFusionStats.ATK + materialStatsByLevel.ATK
        const DEF = newFusionStats.DEF + materialStatsByLevel.DEF
        setFusionStats({...fusionStats, level, ATK, DEF})
      }
    };

    function handlerStatTransferType(event){
      if (event.target.name === materialName+"-stats"){
        setStatTransferType(event.target.value)
      }
    };

    return(
      <>
        <h3>Stats by Level of {materialStatsByLevel.name}</h3>
        <p>ATK: {materialStatsByLevel.ATK}</p>
        <p>DEF: {materialStatsByLevel.DEF}</p>
        <fieldset onInput={handlerStatTransferType}>
          <label>
            <input type="radio" name={materialName+"-stats"} value={materialName+"-neutral"} defaultChecked/>
            Normal
          </label>
          <label>
            <input type="radio" name={materialName+"-stats"} value={materialName+"-ATK"}/>
            ATK value x2
          </label>
          <label>
            <input type="radio" name={materialName+"-stats"} value={materialName+"-DEF"}/>
            DEF value x2
          </label>
        </fieldset>
        <button onClick={handlerAddToStats}>Add to Fusion</button>
      </>
    );
  
};
  
  export default CalculateNewStats;