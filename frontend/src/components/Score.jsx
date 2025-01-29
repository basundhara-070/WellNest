import React from 'react'
import scoreimg from '/score.png'
export default function Score() {
  return (
    <div className='mt-32 flex w-full px-32'>
        <div className='flex flex-col justify-center items-center w-1/2'>
        <h1 className='text-6xl font-semibold'>WELLNESS SCORE</h1>
    <h4 className='text-gray-500 text-md mt-4'> Get insights on sleep, fitness, nutrition, and stress to improve your lifestyle today.</h4>
    <button className='text-4xl p-4 w-1/2 rounded-md bg-[#29b5f6d5] mt-16'>Click here</button>
        </div>
        <div className='flex justify-center items-center w-1/2'>
        <img src={scoreimg} className='w-[350px] h-[350px]' alt="" />
        </div>
        </div>
       
   
  )
}
