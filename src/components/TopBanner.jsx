import image from "../assets/images/logo.svg";
import face from "../assets/images/face.png";

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
      <div className="mx-auto flex justify-between items-center px-4 py-4 mt-4  rounded-full shadow-xl mx-8">
        <div className="flex items-center">
          <img src={image} alt="Speak" className="w-[110px] h-[26.87px]" />
        </div>
        <div className=" flex items-center space-x-4">
          <button className="text-black border rounded-full font-bold text-sm hover:text-[#1C49FF] transition-colors duration-1000 px-8 py-3 h=[100px] w=[46px] flex items-center">
            <img src={face} alt="face" className="w-[25px] h-[20px]" /> 천하제일
            변명대회
          </button>
          <button className="text-black hover:bg-[#cdcdcd3f] transition-colors duration-1000 hover:text-[#1C49FF] text-sm rounded-full px-4 py-3">
            스픽: 더 알아보기
          </button>
          <button className="text-black hover:bg-[#cdcdcd3f] transition-colors duration-1000 hover:text-[#1C49FF] text-sm rounded-full px-4 py-3">
            비즈니스/제휴
          </button>
          <button className="text-black border rounded-full bg-[#F5F5F5]  hover:bg-[#3f5edc2f] transition-colors duration-1000 px-9 py-3 pg-[#F5F5F5] text-sm ">
            🇰🇷 한국어
          </button>
          <button className="text-white px-4 py-3 rounded-full bg-[#1C49FF] hover:bg-[#1c49ffaf] transition-colors duration-700 text-sm">
            무료 체험 시작하기 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
