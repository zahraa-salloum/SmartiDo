


const Input=({label_name,input_type,onChange},)=>{  
    return(
    <div className="container_clear">
        <label className="label">{label_name}</label>
        <input className="input_white" type={input_type} onChange={onChange} required/>
    </div>
    );
}
export default Input;