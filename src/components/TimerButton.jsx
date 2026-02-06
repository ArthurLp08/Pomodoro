import "../index.css"


function TimerButton({text, onClick}){
    return(
        <button className="bg-[#343A40] w-[6vw] h-[5vh] font-bold text-[#ADB5BD] text-[2vh] rounded-[8px] m-[8px]" onClick={onClick}>{text}</button>
    )
}

export default TimerButton;