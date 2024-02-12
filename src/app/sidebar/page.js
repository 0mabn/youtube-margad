import Image from "next/image"
export default function SideBar() {
    return (
        <div className="w-[10vw] h-[109vh] bg-[#212121] font-sans ">
            {/* 1st  */}
            <div className="flex flex-col gap-[18px] pb-[15px] pt-[20px] border-b-2 border-[#303030]">
              <div className="flex pl-[23px]">
               <Image src="/vector.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Home</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/explore.svg" width={24} height={24}/> 
               <p class="text-white pl-[24px]">Explore</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/subscriptions.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Subscriptions</p>
            </div>
        </div>  
        {/* 1st */}
        {/* 2nd */}
        <div class="flex flex-col gap-[18px] pb-[15px] pt-[20px] border-b-2 border-[#303030]">
              <div className="flex pl-[23px]">
              <Image src="/library.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Library</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/history.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">History</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/yourVideos.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Your Videos</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/watchLater.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Watch Later</p>
            </div>
            <div className="flex pl-[24px]">
            <Image src="/likedVideos.svg" width={21} height={24}/>  
               <p className="text-white pl-[24px]">Liked Videos</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/showMore.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Show More</p>
            </div>
        </div>  
        {/* 2nd  */}
        {/* Subscriptions  */}
        <div>
            <h1 className="text-[#AAAAAA] font-sans font-semibold pl-[23px] pt-[20px]">SUBSCRIPTIONS</h1>
            <div className="flex flex-col gap-[18px] pb-[15px] pt-[20px] border-b-2 border-[#303030]">
              <div className="flex pl-[23px]">
              <Image src="/james.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">James Gouse</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/alan.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Alan Cooper</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/marcus.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Marcus Levin</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/alexis.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Alexis Sears</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/jessica.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Jessica Lambert</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/anna.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Anna White</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/skylar.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Skylar Dias</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/showMore.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Show 13 More</p>
            </div>
        </div>
        </div>
        {/* Subscriptions  */}
        <div>
        <h1 className="text-[#AAAAAA] font-sans font-semibold pl-[23px] pt-[20px]">MORE FROM YOUTUBE</h1>
        <div className="flex flex-col gap-[18px] pb-[15px] pt-[20px] border-b-2 border-[#303030]">
            <div className="flex pl-[23px]">
            <Image src="/premium.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Youtube Premium</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/gaming.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Gaming</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/live.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Live</p>
            </div>
            <div className="flex pl-[25px]">
            <Image src="/sports.svg" width={18} height={24}/> 
               <p className="text-white pl-[24px]">Sports</p>
            </div>
        </div>
        </div>
        <div className="flex flex-col gap-[18px] pb-[15px] pt-[20px] border-b-2 border-[#303030]">
            <div className="flex pl-[23px]">
            <Image src="/settings.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Settings</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/report.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Report History</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/help.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Help</p>
            </div>
            <div className="flex pl-[23px]">
            <Image src="/feedback.svg" width={24} height={24}/> 
               <p className="text-white pl-[24px]">Send Feedback</p>
            </div>
        </div>
            </div>
            
    )
}