import React from "react";
import mern from '../../public/bookstore.png'
import umt from '../../public/umt.png'
import galaxia from '../../public/galaxia.png'
import chat from '../../public/chat.png'
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mern,
      name: "ECOMMERCE BOOKSTORE",
      link:'https://book-store-peach-six.vercel.app/',
      code:'https://github.com/Shaneali01/Book-Store',
      type:'Book Store'
    },
    {
      id: 2,
      logo: umt,
      name: "UMT BLOG APP",
      link:'https://umt-blog-app.vercel.app/',
      code:'https://github.com/Shaneali01/umt-blog-app',
      type:'Bloggin App'
    },
    {
      id: 3,
      logo: galaxia,
      name: "Galaxia",
      link:'https://gallaxia.netlify.app/',
      type:'Bloggin App'
    },
    {
      id: 4,
      logo: chat,
      name: "CHAT APPLICATION",
      link:'',
      type:"Chat Application"
    },
    
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Mern Stack Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name,link,code,type }) => (
            <a href={link}>  <div
            className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300"
            key={id}
          >
            <img
              src={logo}
              className="w-[150px] md:mx-5 h-[150px] p-1 rounded-full border-[2px]"
              alt=""
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">{name}</div>
              <p className="px-2 text-gray-700">
                {type}
              </p>
            </div>
            <div className=" px-6 py-4 space-x-3 justify-around">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                <a href={code}>CODE</a>
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                LIVE PROJECT
              </button>
            </div>
          </div></a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
