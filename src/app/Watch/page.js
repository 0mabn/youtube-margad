"use client"
import ReactPlayer from 'react-player;
import { useState, useEffect } from 'react';
import Navigations from '../navigations/page';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
export default function Video() {
    const [isClient, setIsClient] = useState(false);
    const [data, setData] = useState(null);
    const searchParams = useSearchParams();
    const videoId = searchParams.get('videoId');

   useEffect(() => {
    fetch( `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyAo5Y8p3pVIYxnze2GaImur3YpUrXJpRZU`
    ).then((res) => res.json())
    .then((videos) => setData(videos));
   }, []);
    useEffect(() => {
        setIsClient(true);
    }, []);
   console.log(data);

    return (
        <div className='bg-[#000] w-screen h-full'>
            <div>
                 <Navigations></Navigations>
                 <div className='ml-[400px]'> 
                    {isClient && (
                <ReactPlayer 
            url= {`https://www.youtube.com/watch?v=${videoId}`}
            width={800}
            height={500}
            controls
            playing={true}
            loop
            muted={true}
            /> 
            )}
             <h1 className='text-white mt-[15px] text-xl'>
                title
             </h1>
                <div className='text-[#AAAAAA] flex mt-[12px] border-b-2 border-[#303030] w-[800px] pb-[14px]'>
                 views Oct 1, 2023
             <div className='flex  gap-[15px] ml-[239px] '>
                <div className='text-white flex items-center gap-[6px]'>
                    <Image src="/like.svg"  width={25} height={25} alt='like'></Image>
                   
                </div>
                <div className='text-white flex items-center gap-[4px]'>
                    <Image src="/dislike.svg"  width={25} height={25} alt='dislike'></Image>
                </div>
                <div className='text-white flex items-center gap-[6px] text-[15px] fot-medium'>
                    <Image src="/share.svg"  width={24} height={24} alt='share'></Image>
                    SHARE
                </div>
                <div className='text-white flex items-center gap-[6px] text-[15px] font-medium'>
                    <Image src="/save.svg"  width={25} height={25} alt='save'></Image>
                    SAVE
                </div><div className='text-white'>
                    <Image src="/threeDots.svg"  width={25} height={25} alt='dits'></Image>
                </div>
             </div>
             </div>
             {/* description area  */}
             <div className=' border-b-2 border-[#303030] w-[800px]'>
                 <div className='flex mt-[20px]'>
                  <div>
                <img src="https://yt3.googleusercontent.com/3naPCRx2OyDJC3-T5OZMEscJqYxOKTN8TopYl19QGwM35rRqPSFbC6yovicQLeboIQGHCtuM=s176-c-k-c0x00ffffff-no-rj" width={50} height={50}/>
             </div>
             <div className='ml-[15px]'>
                <h1 className='text-white text-lg'>
                    channel title
                </h1>
                <p className='text-[#AAAAAA]'>
                     Subscribers
                </p>
             </div>
             <div className='flex items-center ml-[412px]'>
                <div className='text-white bg-[#CC0000] flex items-center justify-center rounded w-[130px] h-[40px]'>
                SUBSCRIBE
             </div> 
             </div>
             </div>
             <div className='text-white mt-[30px] ml-[63px] break-words w-[340px] h-[300px] snap-y overflow-scroll'> 
                <p>
                   description
                </p>
            </div>
             </div> 
             {/* description area */}
             {/* comment section  */}
            <div className='mt-[40px] flex gap-[30px]'>
                <h1 className='text-white'>
                    3212 Comments
                </h1>
                <h4 className='text-white flex gap-[10px]'>
                    <Image src="/sort.svg" width={30} height={30}></Image>
                    SORT BY
                </h4>
            </div>
            <div className='mt-[20px] flex items-center'>
                    <Image src="/skylar.svg" width={55} height={55}></Image>
                    <p className='text-[#AAAAAA] border-b-2 border-[#303030] w-[728px] h-[30px] ml-[20px]'>Add a public comment</p>
                </div>
                {/* Comments  */}
                <div className='mt-[20px] flex w-[800px]'>
                    <Image src="/james.svg" width={55} height={55}></Image>
                    <div className='flex flex-col ml-[20px] mt-[40px]'>
                        <div className='flex items-center gap-[5px]'>
                            <p className='text-white text-[15px] font-medium'>James Sekiro</p>
                            <p className='text-[#AAAAAA] text-[13px]'>8 days ago</p>
                        </div>              
                    <p className='text-white text-[15px] break-words mb-[10px]'>
                        "Pokemon sizes make no sense" Literally the first sentence and I already know it's going to be a fun math episode
                        </p>
                       <div className='text-white flex items-center text-sm '>
                       <Image src="/like.svg" width={24} height={24} className='mr-[5px]'></Image>
                       5.9K
                       <Image src="/dislike.svg" width={24} height={24} className='ml-[15px]'></Image>
                       <p className='text-[#AAAAAA] text-[12px] ml-[25px]'>REPLY</p>
                       </div>
                    </div>
                </div> 
                <div className='mt-[10px] flex w-[800px]'>
                    <Image src="/alan.svg" width={55} height={55}></Image>
                    <div className='flex flex-col ml-[20px] mt-[20px]'>
                        <div className='flex items-center gap-[5px]'>
                            <p className='text-white text-[15px] font-medium'>John Bloodborne</p>
                            <p className='text-[#AAAAAA] text-[13px]'>8 days ago</p>
                        </div>              
                    <p className='text-white text-[15px] break-words mb-[10px]'>
                    This episode feels like what Game Theory videos used to be, more based on math/science than assumptions and plot-building
                        </p>
                       <div className='text-white flex items-center text-sm'>
                       <Image src="/like.svg" width={24} height={24} className='mr-[5px]'></Image>
                       5.9K
                       <Image src="/dislike.svg" width={24} height={24} className='ml-[15px]'></Image>
                       <p className='text-[#AAAAAA] text-[12px] ml-[25px]'>REPLY</p>
                       </div>
                    </div>
                </div>
                 {/* Comments  */}
            {/* comment section  */}
            {/* videos  */}
            <div></div>
            {/* videos  */}
                 </div>
            </div>
        </div>
    );
}
