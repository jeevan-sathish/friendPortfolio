import React, { useEffect, useRef, useState } from 'react';

const AboutMe = () => {
  const aboutRef = useRef(null);
  const [lang, setLang] = useState(true);

  useEffect(() => {
    const handleClick = () => {
      setLang(prev => !prev);
    };

    const element = aboutRef.current;
    if (element) {
      element.addEventListener('click', handleClick);
    }

    return () => {
      if (element) {
        element.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className='w-[98%] h-auto min-h-[60vh] bg-gradient-to-br from-purple-400 via-purple-400 to-purple-400 
                 rounded-[30px] flex flex-col justify-center items-center p-6 text-center cursor-pointer'
    >
      <h1 className='text-5xl font-bold mb-4 text-purple-800 animate-pulse'>
        {lang ? "About Me" : "자기소개"}
      </h1>

      {lang ? (
        <p className="text-[20px] leading-relaxed text-gray-800 max-w-6xl">
  Hello! My name is <strong>[Your Name]</strong>, and I’m the proud daughter of Mr. <strong>[Father’s Name]</strong> and Mrs. <strong>[Mother’s Name]</strong>. 
  I currently reside in <strong>[Your Area, City, State]</strong>, a beautiful city known for its culture and heritage. 
  I’m in my 7th semester, pursuing a <strong>Bachelor of Engineering in Computer Science</strong> at <strong>[College Name]</strong>, located on <strong>[College Location]</strong>. 
  My interests revolve around web development, UI/UX design, and crafting smooth digital experiences that make technology more accessible and engaging. 
  I’m always eager to learn, and I actively explore new tools and technologies like <strong>React</strong> and <strong>Tailwind CSS</strong> to build efficient, modern web applications. 
  My passion lies in turning creative ideas into practical and impactful digital solutions.
</p>

      ) : (
        <p className="text-[20px] leading-relaxed text-gray-800 max-w-6xl">
  안녕하세요! 제 이름은 <strong>[이름]</strong>입니다. 저는 <strong>[아버지 이름]</strong> 님과 <strong>[어머니 이름]</strong> 님의 딸로서, 사랑하는 가족과 함께 성장해 왔습니다. 
  저는 현재 <strong>[거주 지역, 도시, 주]</strong>에 거주하고 있습니다. 
  <strong>[대학교 이름]</strong>에서 <strong>컴퓨터 공학</strong>을 전공하며, 현재 7학기에 재학 중입니다. 
  저희 대학은 <strong>[대학교 위치]</strong>에 위치해 있으며, 실무 중심의 학습을 통해 전문 역량을 쌓고 있습니다. 
  웹 개발과 사용자 인터페이스 디자인에 큰 흥미를 가지고 있으며, 직관적이고 효과적인 디지털 경험을 만드는 데 열정을 가지고 있습니다. 
  <strong>React</strong>, <strong>Tailwind CSS</strong>와 같은 최신 기술을 배우며 프로젝트에 적용하고, 창의적인 아이디어를 실현하기 위해 꾸준히 노력하고 있습니다.
</p>

      )}
    </div>
  );
};

export default AboutMe;
