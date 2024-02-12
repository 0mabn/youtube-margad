import Navigations from "./navigations/page"
import SideBar from "./sidebar/page"
import VideoPage from "./videoPage/page"
import TopMenu from "./topMenu/page"
export default function Home() {
    return <div>
        <div>
             <Navigations></Navigations>
        </div>
          <div className="flex">
            <div>
               <SideBar></SideBar>
       </div>
       <div className="flex flex-col">
       <div>
        <TopMenu></TopMenu>
       </div>
       <div>
        <VideoPage></VideoPage>
       </div>
        </div>
            </div>
       
    </div>
  }