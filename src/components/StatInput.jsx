function StatInput({name, materialState}){

    const [material, setMaterial] = materialState

    return(
      <label>
        <input type="number" name={name}/>
      </label>
    );
  
  };
  
  export default StatInput;