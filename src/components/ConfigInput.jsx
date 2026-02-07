import "../index.css"

function ConfigInput({text, onChange, value}){
    return(
        <>
            <span className="text-white font-bold text-[4vw] lg:text-[1vw]">{text}</span>
            <input  className=" m-auto h-[50px] w-[75%] text-center mb-[16px] rounded-[16px]" onChange={onChange} defaultValue={value} min={1} type='number'/>             
        </>
    )
}

export default ConfigInput;