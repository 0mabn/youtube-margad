import Image from "next/image"
export default function Navigations() {
    return(
        <div className="w-screen h-[5vh] bg-[#212121] flex justify-between ">
            <div className="flex">
                 <div className="m-4">
                 <Image src="/menu.svg" width={24} height={24}/> 
            </div>
           <div className="my-[18px]">
           <Image src="/youtube.svg" width={84} height={74}/> 
           </div>
            </div>
           
           {/* searchbox */}
           <div className="flex items-center ">
            <div className="flex">
                 <input className="w-[470px] h-[40px] bg-[#121212] border-[1px] border-gray-600 bg-[#121212]"/>
            <button className="w-[64px] h-[40px] bg-[#303030] flex  items-center justify-center" >
            <Image src="/search.svg" width={19} height={20}/> 
            </button>
            <div class="bg-[#000000] rounded-full w-[40px] h-[40px] p-[12px]">
            <Image src="/mic.svg" width={15} height={15}/> 
            </div>
            </div>
           </div>
           {/* searchbox  */}
           <div class="flex justify-center items-center mr-[20px]">
             <div className="flex gap-2  w-[35px] mr-[75px] "> 
             <Image src="/camera.svg" width={34} height={34}/> 
             <Image src="/apps.svg" width={24} height={24}/> 
             <Image src="/bell.svg" width={24} height={24}/> 
           </div>
           <div className="flex items-center">
           <Image src="/profile.svg" width={24} height={24}/> 
           </div>
           </div>
    
        </div>
    )
}