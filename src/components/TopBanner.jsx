import image from "../assets/images/logo.svg";

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
    <div className=" text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src={image} alt="Speak" className="w=[110px] h=[26.87px]" />
        </div>
        <div className="flex space-x-4">
          <button className="text-black h=[100px] w=[46px]">
            천하제일 변명대회
          </button>
          <button className="text-black h=[95.22px] w=[20px]">
            스픽: 더 알아보기
          </button>
          <button className="text-black h=[77.45px] w=[20px]">
            비즈니스/제휴
          </button>
          <button
            style={{ backgroundColor: "#F5F5F5", fontSize: "14px" }}
            className="text-black border rounded-full px-8 py-2  "
          >
            🇰🇷 한국어
          </button>
        </div>
        <button
          style={{ backgroundColor: "#1C49FF", fontSize: "14px" }}
          className="text-white px-10 py-2 rounded-full "
        >
          무료 체험 시작하기
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
