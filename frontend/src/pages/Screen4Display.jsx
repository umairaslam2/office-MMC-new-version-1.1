
import S4Clock from "../components/Screen4/S4Clock";
import TodayDoctorsList from "../components/Screen4/TodayDoctorsList";
import S4LeftSideImages from "../components/Screen4/S4LeftSideImages";


const Screen4Display = () => {



  return (
    <div className="h-screen w-screen bg-[#12154b] flex text-white overflow-hidden font-sans select-none relative">

      {/* LEFT IMAGE */}
      <S4LeftSideImages />
      {/* RIGHT SIDE */}

      <div className="w-[30%] min-w-[360px] flex flex-col justify-between bg-gradient-to-b from-[#5a6ad3] to-[#b0b7f5] p-4">
        {/* Doctor List */}
        <TodayDoctorsList />
        {/* Weather Box */}
        <div className="flex flex-col items-center justify-center bg-[#e8e8ff]/60 border border-white rounded-xl p-4">
          <div className="text-center">
            <p className="text-xl md:text-3xl xl:text-4xl font-bold text-black">Today</p>
            <p className="text-2xl md:text-4xl xl:text-5xl font-semibold text-[#2a3185] mt-2">
              Your Health, Our Priority
            </p>
          </div>
          <S4Clock />
        </div>
      </div>

      {/* FONT SIZE BREAKPOINTS - FINAL PERFECT VERSION */}
      <style>{`
  .doctor-item {
    height: 4rem;
  }

  /* 1366px to 1999px → Font aur chota kar diya (bohot clean lagega ab) */
  @media (max-width: 1999px) {
    .doctor-item {
      height: 2.7rem !important;   /* pehle 3rem tha */
    }
    
    /* Doctor List Text */
    .text-sm   { font-size: 0.80rem !important; }
    .text-base { font-size: 0.90rem !important; }
    .text-lg   { font-size: 1.00rem !important; }
    .text-xl   { font-size: 1.25rem !important; }
    .text-2xl  { font-size: 1.50rem !important; }
    .text-3xl  { font-size: 1.80rem !important; }
    .text-4xl  { font-size: 2.10rem !important; }
    .text-5xl  { font-size: 2.40rem !important; }

    /* Clock */
    .text-xs   { font-size: 0.75rem !important; }
    .text-lg   { font-size: 1.8rem !important; }
    .text-3xl  { font-size: 2.4rem !important; }
    .text-4xl  { font-size: 3.0rem !important; }

    /* Powered by Nubit */
    .powered-by-text {
      font-size: 0.9rem !important;
    }
  }

  /* 2000px – 3400px → Perfect size (no change - jo abhi bilkul theek hai) */
  @media (min-width: 2000px) and (max-width: 3400px) {
    .doctor-item {
      height: 4rem;
    }
    /* Yahan default Tailwind sizes perfect hain – kuch change nahi */
  }

  /* 3440px and above (4K, 5K, Ultra-wide) → Bada font (jaise pehle set kiya tha) */
  @media (min-width: 3441px) {
    .doctor-item {
      height: 6.5rem !important;
    }
    .text-sm   { font-size: 1.8rem !important; }
    .text-base { font-size: 2rem !important; }
    .text-lg   { font-size: 2.4rem !important; }
    .text-xl   { font-size: 3.2rem !important; }
    .text-2xl  { font-size: 4rem !important; }
    .text-3xl  { font-size: 5rem !important; }
    .text-4xl  { font-size: 6rem !important; }
    .text-5xl  { font-size: 7rem !important; }

    /* Clock on big screens */
    .text-xs, .text-sm { font-size: 2rem !important; }
    .text-4xl { font-size: 7.5rem !important; }

    .powered-by-text {
      font-size: 3rem !important;
    }
  }
`}</style>

    </div >
  );
};
export default Screen4Display;