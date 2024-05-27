import React from "react";

const TopBanner = () => {
  return (
    // <header>
    //   <div class="bg-white shadow-md py-2 border-black p-20 w=[1130px] h=[68px]">
    //     <div class="container mx-auto flex justify-between items-center">
    //       <nav>
    //         <button>Speak</button>
    //         <button>천하제일 변명대회</button>
    //         <button>스픽: 더 알아보기</button>
    //         <button>비즈니스/제휴</button>
    //         <button>한국어</button>
    //         <button>무료 체험 시작하기</button>
    //       </nav>
    //     </div>
    //   </div>
    // </header>
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="path/to/your/logo.png" alt="Speak" className="h-8" />
          <span className="ml-3 text-xl font-bold">Speak</span>
        </div>
        <div className="flex space-x-4">
          <button className="text-white">천하제일 변명대회</button>
          <button className="text-white">스픽: 더 알아보기</button>
          <button className="text-white">비즈니스/제휴</button>
          <button className="text-white">한국어</button>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          무료 체험 시작하기
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
