import { useContext } from "react";
import { MyContext } from "../App.js"

function FusionStats() {

    const [ fusionStats, setFusionStats ] = useContext(MyContext)

    function handlerResetFusionStats(){
        setFusionStats({name:"fusion", level: 0, ATK: 0, DEF: 0})
      }

    return(
        <div>
            <h2>Fusion</h2>
            <p>New Level: {fusionStats.level}</p>
            <p>New ATK: {fusionStats.ATK}</p>
            <p>New DEF: {fusionStats.DEF}</p>
            <button onClick={handlerResetFusionStats}>Reset Fusion</button>
        </div>
    )

};

export default FusionStats;