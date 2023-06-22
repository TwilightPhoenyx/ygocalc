function MaterialInput({saveMaterialData, materialName}){

    function handlerFormData(event){
        saveMaterialData(event.target.name, parseInt(event.target.value))
    };

    return(
        <>
            <h3>{materialName}</h3>
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
        </>
    );

};

export default MaterialInput;