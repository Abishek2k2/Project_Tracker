import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full py-5  mt-10 flex justify-start gap-5 flex-nowrap'>
        <div className='h-full w-[300px] bg-yellow-400 p-5 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam dolore blanditiis laudantium mollitia sit beatae vero error, nesciunt ipsa, architecto quia animi inventore quae, natus ex ut omnis? Quasi!</p>
        </div>
        <div className='h-full w-[300px] bg-red-400 p-5 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam dolore blanditiis laudantium mollitia sit beatae vero error, nesciunt ipsa, architecto quia animi inventore quae, natus ex ut omnis? Quasi!</p>
        </div>
        <div className='h-full w-[300px] bg-blue-400 p-5 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam dolore blanditiis laudantium mollitia sit beatae vero error, nesciunt ipsa, architecto quia animi inventore quae, natus ex ut omnis? Quasi!</p>
        </div>
        <div className='h-full w-[300px] bg-green-400 p-5 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam dolore blanditiis laudantium mollitia sit beatae vero error, nesciunt ipsa, architecto quia animi inventore quae, natus ex ut omnis? Quasi!</p>
        </div>
    </div>
  )
}

export default TaskList