import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[30vh] bg-violet-700 flex flex-col justify-center items-center text-white gap-'>
    <span className='flex flex-row gap-[100px]'>
        <span>
    <p>mail:<a href="#">youremail@gmail.com</a></p>
    <br />
    <p>contact:XXXXXXXXXX</p>
    </span>
    <span>
        <p>gitHub: <a href="#">GitHub.com</a></p>
        <br />
        <p>LinkedIN:<a href='#'>LinkedIn.com</a> </p>
    </span>
    </span>
    <span className='w-full h-auto flex flex-col justify-center items-center mt-[30px]'>
    <p>@copyright all reserved</p>
    <p>made with love💗 jeevan s </p>
    </span>
  
    
    </div>
  )
}

export default Footer