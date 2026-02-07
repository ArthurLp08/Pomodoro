import "../index.css"

function ConfigButton({text, onClick}){
    return(
        <button className="bg-[#212529] w-[35vw] h-[5vh] font-bold text-[#FFFFFF] text-[2vh] p-[16px] m-auto mb-[8px] flex flex-col justify-center rounded-[8px]" onClick={onClick}>{text}</button>
    )
}

export default ConfigButton;