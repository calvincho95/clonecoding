import React from "react";
import image from "../assets/images/657a79fcf1b0fa6087a250e4_new-phone-scrim.webp";

const MainScreen = () => {
  return (
    // <main>
    //   <h1>당신을 실제로 말하게 하는 영어 앱</h1>
    //   <p>사람보다 나은 AI 영어 선생님과</p>
    //   <p>마음껏 대화하고, 실시간 피드백을 받아보세요.</p>
    //   <p>금방 우리한 영어 실력을 갖게 될 거예요.</p>
    //   <button>무료 체험 시작하기</button>
    //   <div> TEST </div>
    // </main>
    <main className="container mx-auto flex flex-colu md:flex-row items-center bg-gray-100 p-8">
      {/* jtem1 */}
      <div className="flex-1 bg-white p-6 rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4">
          당신을 실제로 말하게 하는 영어 앱
        </h1>
        <p className="text-lg mb-4">
          사람보다 나은 AI 영어 선생님과 마음껏 대화하고, 실시간 피드백을
          받아보세요. 금방 유창한 영어 실력을 갖게 될 거예요.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-full  inline-block"
        >
          무료 체험 시작하기
        </a>
      </div>

      {/* item2 */}
      <div className="flex-1 mt-8 md:mt-0 md:ml-8 bg-white p-6 rounded-md shadow-md">
        <img src={image} alt="Phone App" className="w-full h-auto" />
      </div>
    </main>
  );
};

export default MainScreen;
