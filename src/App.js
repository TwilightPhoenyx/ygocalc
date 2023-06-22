import { createContext, useState } from "react";
import MaterialInput from "./components/MaterialInput";



function App() {
  
  const MyContext = createContext();
  const [statsByLvMaterial1, setStatsByLvMaterial1]= useState({})
  const [statsByLvMaterial2, setStatsByLvMaterial2]= useState({})

  const [ fusionStats, setFusionStats ] = useState({name:"fusion", level: 0, ATK: 0, DEF: 0})


  return (
    <main>

      <MyContext.Provider value={ [fusionStats, setFusionStats] }>
        <MaterialInput 
          title="First Material"
          materialName="material1" 
          statsSetter={setStatsByLvMaterial1} 
        />
        <MaterialInput 
          title="Second Material"
          materialName="material2" 
          statsSetter={setStatsByLvMaterial2} 
        />
      </MyContext.Provider>
      
    </main>
  );
}

export default App;
export {
  MyContext
}
