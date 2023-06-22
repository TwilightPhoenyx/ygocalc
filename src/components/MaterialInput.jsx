import { useState, useEffect } from "react";
import CalculateNewStats from "./CalculateNewStats";

function MaterialInput({ title, materialName, statsSetter }){

    const materialState = useState({name:materialName, level:1, ATK:0, DEF:0})
    const [ material, setMaterial ] = materialState
    const statsByLevelState = useState({name:materialName, ATK:0, DEF:0})
    const [ statsByLevel, setStatsByLevel ] = statsByLevelState

    useEffect(
        ()=>{
            statsSetter(statsByLevel)
        },
        [statsByLevel]
    );

    useEffect(
        ()=>{
          const ATK = Math.round(material.ATK / material.level)
          const DEF = Math.round(material.DEF / material.level)
          setStatsByLevel({...statsByLevel, ATK, DEF})
        },
        [material]
    );

    function saveToStatePropertyFactory(objectState){
        return function (attribute, formValue) {
            const [object, objectSetter] = objectState
            const newObject = {...object}
            newObject[attribute] = formValue
            objectSetter(newObject)
        }
    }

    const saveDataInMaterial = saveToStatePropertyFactory(materialState)

    function handlerFormData(event){
        saveDataInMaterial(event.target.name, parseInt(event.target.value))
    };

    return(
        <>
            <h2>{title}</h2>
            <form onInput={handlerFormData}>
                <label>
                    Level
                    <input type="number" name="level" min="1" max="12" defaultValue="1"/>
                </label>
                <label>
                    ATK
                    <input type="number" name="ATK" min="0" max="9999" defaultValue="0"/>
                </label>
                <label>
                    DEF
                    <input type="number" name="DEF" min="0" max="9999" defaultValue="0"/>
                </label>
            </form>
            <CalculateNewStats materialStatsByLevel={statsByLevel}/>
        </>
    );

};

export default MaterialInput;