import React from 'react'

const Nav = () => {
  return (
  <div className="w-[40%] h-[15vh] bg-purple-300 backdrop-blur-2xl rounded-2xl m-1.5 flex items-center gap-[20px] px-6 sticky top-[1px] z-50">
  <span className="font-extrabold text-black p-[10px] text-[30px]">Name 🦋</span>
  <span className='text-blue-600 font-semibold text-[20px]'>My Personal portfolio...</span>
  <span><a href="https://www.linkedin.com/"><img src="linked in.png" alt="Ln" width={70} height={70} /></a></span>
  <span><a href="https://www.linkedin.com/"><img src="git.png" alt="Ln" width={40} height={40} /></a></span>
</div>

  )
}

export default Nav