import SPEAK from "../assets/images/SPEAK.svg";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#1C49FF] min-w-full rounded-3xl flex justify-between  p-8 ">
        <div>
          <div className="flex flex-col items-start     ">
            <img src={SPEAK} alt="SPEAK" className="max-w-[210px] w-full " />
            <h3 className="text-[#FFFFFF80] mt-8 text-sm">
              스픽이지랩스코리아 주식회사 | 대표이사: 코너니콜라이즈윅 <br />
              전화번호/이메일: (국번없이)1668-1051/SUPPORT@USESPEAK.COM <br />
              주소: 서울특별시 성동구 성수이로 127 ADLV, 3층 <br />
              사업자등록번호: 553-86-02127 | 법인등록번호: 110111-7650834 <br />
              통신판매업 신고번호: 제 2020-서울강남-02835호
            </h3>
          </div>
        </div>

        <div className="flex justify-between space-x-10 text-sm">
          <div>
            <div className="flex flex-col space-y-2">
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                브랜드 스토리
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                커리큘럼
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                기술/학습법
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                사용자 후기
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                채용
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                B2B 문의
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                스픽 파트너
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                언론 보도
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                자주 묻는 질문
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                스픽 인스타그램
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                스픽 블로그
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                IOS
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                Android
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                한국어
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                日本語
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                Español
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                中文 – 繁體
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                Português
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                Français
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                Deutsch
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                English
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                서비스 이용약관
              </button>
              <button className="text-[#FFFFFF80] hover:text-white transition duration-500">
                개인정보 처리방침
              </button>
            </div>
            <div className="text-[#FFFFFF80] hover:text-white transition duration-500">
              © 2020 SPEAKEASY LABS, INC. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
