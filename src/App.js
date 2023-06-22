import { useEffect, useState } from "react";
import MaterialInput from "./components/MaterialInput";



function App() {

  const material1State = useState({name:"material1", level:1, ATK:0, DEF:0})
  const material2State = useState({name: "material2", level:1, ATK:0, DEF:0})
  const [material1, setMaterial1] = material1State
  const [material2, setMaterial2] = material2State
  const material1StatsByLevelState = useState({name:"material1", ATK:0, DEF:0})
  const material2StatsByLevelState = useState({name:"material2",  ATK:0, DEF:0})
  const [mat1StatsByLevel, setMat1StatsByLevel] = material1StatsByLevelState
  const [mat2StatsByLevel, setMat2StastByLevel] = material2StatsByLevelState
  const [tempATKStorage, setTempATKStorage] = useState()
  const [tempDEFStorage, setTempDEFStorage] = useState()
  const [tempMaterialEdited, setTempMaterialEdited] = useState(0)




  useEffect(
    ()=>{
      setTempMaterialEdited(1)
      setTempATKStorage(Math.round(material1.ATK / material1.level))
      setTempDEFStorage(Math.round(material1.DEF / material1.level))
      console.log(material1)
    },
    [material1]
  );

  useEffect(
    ()=>{
      setTempMaterialEdited(2)
      setTempDEFStorage(Math.round(material2.DEF / material2.level))
      setTempATKStorage(Math.round(material2.ATK / material2.level))
      
      console.log(material2)
    },
    [material2]
  );

  useEffect(
    ()=>{
      if (tempMaterialEdited === 1) {
        saveStatsByLevelMat1("ATK", tempATKStorage)
      } else if (tempMaterialEdited === 2) {
        saveStatsByLevelMat2("ATK", tempATKStorage)
      }
    },
    [tempATKStorage]
  );

  useEffect(
    ()=>{
      if (tempMaterialEdited === 1) {
        saveStatsByLevelMat1("DEF", tempDEFStorage)
      } else if (tempMaterialEdited === 2) {
        saveStatsByLevelMat2("DEF", tempDEFStorage)
      }
    },
    [tempDEFStorage]
  );

  useEffect(
    ()=>{
      console.log(mat1StatsByLevel, mat2StatsByLevel);
    },
    [mat1StatsByLevel,mat2StatsByLevel]
  );

  function saveToStatePropertyFactory(objectState){
    return function (attribute, formValue) {
        const [object, objectSetter] = objectState
        const newObject = {...object}
        newObject[attribute] = formValue
        objectSetter(newObject)
    }
  }

  const saveDataInMat1 = saveToStatePropertyFactory(material1State)
  const saveDataInMat2 = saveToStatePropertyFactory(material2State)
  const saveStatsByLevelMat1 = saveToStatePropertyFactory(material1StatsByLevelState)
  const saveStatsByLevelMat2 = saveToStatePropertyFactory(material2StatsByLevelState)


  return (
    <main>
      <MaterialInput saveMaterialData={saveDataInMat1} materialName="First Material" materialObject={material1}/>
      <MaterialInput saveMaterialData={saveDataInMat2} materialName="Second Material"materialObject={material2}/>
    </main>
  );
}

export default App;
