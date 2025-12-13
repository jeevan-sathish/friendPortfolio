import React from 'react';

const Cordian = () => {
  const [show, setShow] = React.useState(null);
  const [data] = React.useState([
    {
      id: 1,
      question: 'Do you have experience on industry level projects?',
      answer:
        'Since I’m a fresher, I do have some experience but not advanced yet—currently building small-scale application UIs and UX designs.',
    },
    {
      id: 2,
      question: 'Languages you speak and know the most?',
      answer:
        'I speak two languages. My preferred and native language is Kannada, and professionally I use English at an intermediate to advanced level.',
    },
    {
      id: 3,
      question: 'Your strength and weakness?',
      answer:
        'I’m a fast learner and quickly adapt to new technologies in dynamic environments like web development. At the same time, public speaking wasn’t my strength, but I’ve been improving it by actively participating in group discussions and presentations.',
    },
    {
      id: 4,
      question: 'What are your hobbies?',
      answer: 'I love reading books and sleeping 😁.',
    },
  ]);

  const handleShow = (index) => {
    setShow(show === index ? null : index);
  };

  return (
    <div className='w-[98%] min-h-[80vh] pb-[30px] flex flex-col justify-center rounded-[30px] items-center bg-gradient-to-br from-purple-400 via-purple-400 to-pink-300'>
      <h1 className='w-full pt-[30px] pb-[30px] text-5xl font-bold text-purple-800 text-center animate-pulse'>
        Questions to Get Clarified
      </h1>

      {data.map((ele, i) => (
        <div key={i} className='w-[80%] mt-4'>
          <div className='flex justify-between items-center border-2 border-black p-4 rounded-md bg-purple-300 shadow'>
            <span className='text-xl font-medium'>{ele.question}</span>
            <button
              className='ml-4 w-[100px] h-[50px] rounded-[30px] bg-purple-500 text-white hover:scale-105 transition-transform'
              onClick={() => handleShow(i)}
            >
              {show === i ? 'Hide' : 'Show'}
            </button>
          </div>
          {show === i && (
            <div className='mt-2 p-4 bg-white border border-gray-300 rounded-md shadow text-gray-800 text-lg'>
              {ele.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cordian;
