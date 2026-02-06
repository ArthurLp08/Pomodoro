import "../index.css"

function ModeButton({text, onClick}){
    return(
        <button className="text-[#6C757D] font-bold m-[16px] w-[128px] p-2 rounded-[8px] text-[2vh] hover:bg-[#343A40] hover:text-[#ADB5BD] transition-all" onClick={onClick}>{text}</button>
    )
}

export default ModeButton;