export default function TopMenu() {
    const ButtonNames = Array(29).fill("item");
    return (
        <div>
            <div className="bg-[#212121] p-3 flex gap-3 w-[90vw] h-[5vh]">
                <button className="w-10 h-8 rounded-full text-black border-zinc-600 border-2 bg-white " style={{fontSize: "14px"}}>All</button>
             {ButtonNames.map((name, index) => (
                <button key={index} className="h-8 w-14 rounded-full text-white border-zinc-600 border-2" style={{fontSize: "14px"}}
                >{name}</button>
             ))}
             </div>
        </div>
    )
}