import image from "../assets/images/phone.png";

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
    <main className="container mx-auto flex flex-colu md:flex-row items-center  p-8">
      {/* jtem1 */}
      <div className="flex-1 text-left ml-0 p-6 rounded-md">
        <h1 className="text-5xl font-bold mb-4">
          당신을 실제로 <br />
          말하게 하는 영어 앱
        </h1>
        <p className="text-sm mb-4 text-[#8990AD]">
          사람보다 나은 AI 영어 선생님과 <br />
          마음껏 대화하고, 실시간 피드백을 받아보세요. <br />
          금방 유창한 영어 실력을 갖게 될 거예요.
        </p>
        <a
          href="#"
          className=" bg-[#1C49FF] text-white px-5 hover:bg-[#1c49ffaf] transition-colors duration-1000 py-4 rounded-full  inline-block"
        >
          무료 체험 시작하기
        </a>
      </div>

      {/* item2 */}
      <div className="flex-1 mt-8 md:mt-0 md:ml-8 p-6 rounded-md ">
        <img src={image} alt="Phone App" className="max-w-[480px] w-full" />
      </div>
    </main>
  );
};

export default MainScreen;
