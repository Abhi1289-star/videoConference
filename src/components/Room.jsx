
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, Server_Secret } from '../constants';
import { useParams } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';


const Room = () => {
  const { roomId } = useParams();
 const meeting = useRef(null);

 useEffect(()=>{
    const userID= String(Math.floor(Math.random()*10000));
    const username="user_"+userID;
    const KitToken= ZegoUIKitPrebuilt.generateKitTokenForTest(APP_ID, Server_Secret, roomId, userID, username);
    const zc = ZegoUIKitPrebuilt.create(KitToken);
    zc.joinRoom({
        container:meeting.current,
        scenario:{
            mode: ZegoUIKitPrebuilt.VideoConference,
        },
    });
 }, [roomId]);
  return (
    <div className="h-screen w-full" ref={meeting} >

    </div>
  )
}

export default Room;

   
