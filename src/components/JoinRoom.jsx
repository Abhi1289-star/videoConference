import React from 'react'
import { useNavigate } from 'react-router-dom';

const JoinRoom = () => {
    const [roomId, setRoomId] = React.useState('');
    const navigate = useNavigate();

    const handleJoin=()=>{
        if(roomId.trim()){
            navigate(`/room/${roomId}`);
        }
    }
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-[#ffffff] via-[#f2f2f2] to-[#e0e0e0] text-gray-800">
        <h1 className='text-4xl font-bold mb-6 drop-shadow-sm'>join a Meeting</h1>
      <input type='text' placeholder='Enter Room ID' value={roomId} onChange={(e)=>setRoomId(e.target.value)} className='w-72 p-3 rounded-lg shadow-md border border-gray-300 focus:outline-none' />
      <button onClick={handleJoin} className='mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition duration-300 shadow-md cursor-pointer'>Join Now</button>
    </div>
  )
}

export default JoinRoom
