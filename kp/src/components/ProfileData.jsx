import React from 'react'

const ProfileData = () => {
    const [lang,setLang]=React.useState(true)

    function handleLangChange(){
        setLang(prev=>!prev)
    }
  return (
    <div className='w-[70%] flex flex-col justify-center gap-[10px]  items-center font-extrabold text-white pl-[40px] ' >
          <span>
             <p className='leading-[90px] text-[98px] '> I'm <span className='text-purple-900 animate-pulse'>Your name </span><span >🌸</span> </p>  
           {
            lang?(
                <p className='text-[30px] text-blue-200 mt-[10px]'>"I'm a passionate <span className='text-blue-800'>web developer</span>, 
           dedicated to expanding my skills and building beautiful, impactful websites." </p>
            ):(
                <p className='text-[30px] text-blue-200 mt-[10px]'>저는 열정적인 <span className='text-blue-800'>"웹 개발자"</span>  로서, 제 기술을 확장하고 아름답고 인상적인 웹사이트를 만드는 데 전념하고 있습니다.</p>
            )
           }
          </span>

           <button  onClick={handleLangChange} 
           className='w-[200px] h-[80px] bg-pink-400 m-[30px] rounded-[30px] animate-bounce text-[20px] text-black'>
            {
            lang?"click me":"클릭해줘"
           }
           </button>

    </div>
  )
}

export default ProfileData