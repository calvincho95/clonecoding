import graph from "../assets/images/graph.png";
import sentence from "../assets/images/sentence.png";

const SecondPage = () => {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="text-center text-5xl text-[#12205A] pt-40">
        <div className="pb-8">
          <h1>언어를 배우려면</h1>
          <h1>소리 내어 말해야 합니다.</h1>
        </div>

        <div className="text-center text-sm ext-[#8990AD]">
          <p></p>
          <p className="text-[#8990AD] pb-20">
            스피킹 핵심 철학은 당신이 소리내어 말하게 하는 데 있어요. <br />
            그것도, 최대한 많이요!
          </p>
        </div>
      </div>

      <section className="flex justify-center items-center gap-4">
        <div className="border-red bg-white w-[520px] text-xl text-center ml-4 shadow-md rounded-xl">
          <div className="pt-8 flex justify-center items-center gap-2">
            <h2 className="text-[#12205A] font-bold">첫 일주일에 </h2>
            <h2 className="text-[#1C49FF] font-bold">스픽 유저들은</h2>
          </div>

          <h2 className="pb-8 text-[#1C49FF] font-bold">
            1,110단어 이상을 말해요
          </h2>

          <img
            src={graph}
            alt="graph"
            className="w-[440px] h-[460px] mx-auto"
          />
        </div>

        <div className="border bg-white w-[520px] text-center shadow-md mr-4 rounded-xl">
          <div>
            <h2 className="pt-8 text-xl font-bold text-[#12205A]">
              내면화를 통해 유창해지세요
            </h2>
            <p className="pb-8 text-[#8990AD]">
              실용적이고 일상적인 표현을 몸으로 익히세요
            </p>
            <img
              src={sentence}
              alt="graph"
              className="w-[440px] h-[460px] mx-auto"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default SecondPage;
