"use client"
import React from "react";
import data from "./data.json"
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
export default function VideoPage() {
    const [isClient, setIsClient] = useState(false);
    const [data, setData] = useState(null);
    const router = useRouter();

   useEffect(() => {
    fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=16&regionCode=US&type=video&key=AIzaSyAo5Y8p3pVIYxnze2GaImur3YpUrXJpRZU'
    ).then((res) => res.json())
    .then((videos) => setData(videos));
   }, []);
    useEffect(() => {
        setIsClient(true);
    }, []);

   console.log(data); 

   const jumpToVideoPlayer = (videoId) => {
    router.push("Watch?v=" + videoId)
   }

    return (
        <div className="bg-[#000] flex w-full height-[90vh] pl-10 gap-6 snap-y overflow-scroll" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
           }}>
            {data?.items?.map(({ snippet, id}) => (
                <div style={{ width: 460, height: 370}}>
                    <div >
                              <img onClick={() => jumpToVideoPlayer(id)} src={snippet?.thumbnails?.standard?.url}/>
                        <div className="flex">
                            <div className="p-1">
                                <img src={snippet?.thumbnails?.default?.url}
                                className="rounded-full"
                                width={50}
                                height={50}/>
                            </div>
                            <div className="text-white p-1">
                            {snippet?.title}
                                <h1 className="text-[#AAAAAA] text-xs pt-1">
                                {snippet?.channelTitle}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
           
        </div>
    )
}