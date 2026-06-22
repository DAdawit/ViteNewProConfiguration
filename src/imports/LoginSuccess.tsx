import svgPaths from "./svg-slhrwlgjd5";
import imgGieGeologicalInstituteOfEthiopianTransparentBg1 from "figma:asset/ec92bed2034c082ae2e97ef8755644aa4372420e.png";
import imgAuthenticationBackgroundVisual from "figma:asset/14c0eda4b7292d46147d256e32e8e5c6fed506b9.png";

function Line() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Line">
          <path d={svgPaths.p7b68400} id="Shape" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[4px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-center text-neutral-800 text-nowrap tracking-[-0.4577px] whitespace-pre">English</p>
          <Line />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Button />
    </div>
  );
}

function LineLine() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Line/Line231">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Line/Line231">
          <path d={svgPaths.p1f7287f0} id="Shape" opacity="0.5" stroke="var(--stroke-0, #C17C3E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center pl-[4px] pr-[6px] py-0 relative shrink-0" data-name="Container1">
      <LineLine />
    </div>
  );
}

function Solid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Solid">
          <g id="Shape">
            <path d={svgPaths.p181a5300} fill="var(--fill-0, #F3E5D8)" />
            <path d={svgPaths.p25d7f800} fill="var(--fill-0, #F3E5D8)" />
            <path d={svgPaths.p10e97c00} fill="var(--fill-0, #F3E5D8)" />
            <path d={svgPaths.p3f7e7d00} fill="var(--fill-0, #F3E5D8)" />
            <path d={svgPaths.p31263600} fill="var(--fill-0, #F3E5D8)" />
            <path d={svgPaths.p38ad3880} fill="var(--fill-0, #F3E5D8)" />
            <path d={svgPaths.p68f2900} fill="var(--fill-0, #F3E5D8)" />
            <path d={svgPaths.p22cf5100} fill="var(--fill-0, #F3E5D8)" />
            <path d={svgPaths.p1012fd00} fill="var(--fill-0, #F3E5D8)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#644020] content-stretch flex gap-[10px] items-center justify-center relative rounded-[40px] shrink-0 size-[25px]">
      <Solid />
    </div>
  );
}

function Container1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-end pl-[6px] pr-[4px] py-0 relative shrink-0" data-name="Container2">
      <Frame11 />
    </div>
  );
}

function Selection() {
  return (
    <div className="bg-[#f9f2ec] content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[25px] shrink-0" data-name="Selection">
      <Container />
      <Container1 />
    </div>
  );
}

function TopContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[32px] py-0 relative w-full">
          <Frame16 />
          <div className="flex flex-row items-center self-stretch">
            <Selection />
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthenticationTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Authentication title">
      <div className="relative shrink-0 size-[90px]" data-name="GIE geological institute of Ethiopian transparent bg 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGieGeologicalInstituteOfEthiopianTransparentBg1} />
      </div>
      <div className="capitalize font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#27190c] text-[0px] text-center w-[min-content]">
        <p className="mb-0 text-[16px]">Welcome Back To</p>
        <p className="text-[14px] text-neutral-500">ADTM system</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-nowrap w-full whitespace-pre">
      <p className="font-['Poppins:Medium',sans-serif] leading-[26px] relative shrink-0 text-[#27190c] text-[20px] tracking-[-0.6538px]">welcome back</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[21px] relative shrink-0 text-[14px] text-center text-neutral-500 tracking-[-0.4577px]">Login to your account</p>
    </div>
  );
}

function Line1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Line">
          <path d={svgPaths.p353cbe00} id="Shape" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TextCursor() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Text + Cursor">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-400 text-nowrap tracking-[-0.4577px]">
        <p className="leading-[21px] whitespace-pre">{`Enter Your Email `}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <Line1 />
      <TextCursor />
    </div>
  );
}

function InputFrame() {
  return (
    <div className="bg-neutral-100 relative rounded-[6px] shrink-0 w-full" data-name="Input Frame">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <Frame />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f9f2ec] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27190c] text-[14px] tracking-[1.75px] uppercase w-full">
        <p className="leading-[22px]">Email *</p>
      </div>
      <InputFrame />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Component 3">
      <Title />
    </div>
  );
}

function Line2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Line">
          <path d={svgPaths.p16f4e300} id="Shape" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TextCursor1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Text + Cursor">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-400 text-nowrap tracking-[-0.4577px]">
        <p className="leading-[21px] whitespace-pre">Enter Your Password</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <Line2 />
      <TextCursor1 />
    </div>
  );
}

function Line3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Line">
          <g id="Shape">
            <path d={svgPaths.pcf44f00} stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p37cf75f0} stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function InputFrame1() {
  return (
    <div className="bg-neutral-100 relative rounded-[6px] shrink-0 w-full" data-name="Input Frame">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <Frame3 />
          <Line3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f9f2ec] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27190c] text-[14px] tracking-[1.75px] uppercase w-full">
        <p className="leading-[22px]">Password *</p>
      </div>
      <InputFrame1 />
    </div>
  );
}

function ForgotPassword() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Forgot Password?">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c17c3e] text-[14px] text-nowrap text-right tracking-[-0.4577px]">
        <p className="leading-[21px] whitespace-pre">Forgot Password?</p>
      </div>
    </div>
  );
}

function BottomText() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Bottom Text">
      <ForgotPassword />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Component 3">
      <Title1 />
      <BottomText />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Component />
      <Component1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <Frame8 />
      <Frame7 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-neutral-300 relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-center text-neutral-600 text-nowrap tracking-[-0.4577px] whitespace-pre">Login</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[356px]">
      <Frame9 />
      <Button1 />
    </div>
  );
}

function WelcomePage() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start p-[32px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] shrink-0" data-name="Welcome Page">
      <Frame10 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center min-w-[280px] relative shrink-0 w-[420px]">
      <AuthenticationTitle />
      <WelcomePage />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <TopContainer />
      <Frame17 />
    </div>
  );
}

function InputSideParentCont() {
  return (
    <div className="basis-0 grow h-full max-w-[640px] min-h-px min-w-px relative shrink-0" data-name="Input Side parent cont">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between max-w-inherit px-[20px] py-[40px] relative size-full">
          <Frame12 />
          <p className="font-['Acens:Regular',sans-serif] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] leading-[14px] not-italic relative shrink-0 text-[#ad892e] text-[14px] text-center tracking-[-0.28px] w-full">
            <span className="text-black">Powered by</span>
            <span>{` AASTU`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-center">
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[32px] text-white uppercase w-full">Geological Institute of ethiopia</p>
      <p className="capitalize font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#f3e5d8] text-[20px] tracking-[1px] w-full">{`Archival & document tracking Management system`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[62px] not-italic relative shrink-0 text-[52px] text-center text-white w-full">Welcome To Geological Institute of Ethiopia</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full">
      <Frame2 />
      <Frame15 />
    </div>
  );
}

function Slider() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="slider">
      <div className="bg-[#f0fe61] h-[7px] rounded-[46px] shrink-0 w-[84px]" />
      <div className="bg-white h-[7px] rounded-[46px] shrink-0 w-[84px]" />
      <div className="bg-white h-[7px] rounded-[46px] shrink-0 w-[84px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-between min-h-px min-w-px relative shrink-0 w-full">
      <Frame4 />
      <Slider />
    </div>
  );
}

function Frame13() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter basis-0 bg-[rgba(100,64,32,0.4)] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[207px] items-center px-[48px] py-[64px] relative size-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function AuthenticationBackgroundVisual() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-[860px] items-center min-h-px min-w-px overflow-clip relative rounded-[20px] shrink-0" data-name="Authentication Background Visual">
      <img alt="" className="absolute backdrop-blur-[10px] backdrop-filter inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgAuthenticationBackgroundVisual} />
      <Frame13 />
    </div>
  );
}

function LineVisualSideParentCont() {
  return (
    <div className="basis-0 grow h-[900px] min-h-px min-w-px relative shrink-0" data-name="Line/Visual side parent cont">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[900px] items-center justify-center p-[20px] relative w-full">
          <AuthenticationBackgroundVisual />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return <div className="absolute backdrop-blur-[10px] backdrop-filter bg-[rgba(100,64,32,0.4)] h-[900px] left-[-3px] top-0 w-[1440px]" />;
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[42px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#ffb128] h-[4px] ml-[1.5px] mt-0 rounded-[0.5px] w-px" />
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center ml-0 mt-[1.5px] relative w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.984375", "--transform-inner-height": "3.984375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#ffb128] h-[4px] rounded-[0.5px] w-px" />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[61px] mt-[72px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#ffb128] h-[4px] ml-[1.5px] mt-0 rounded-[0.5px] w-px" />
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center ml-0 mt-[1.5px] relative w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.984375", "--transform-inner-height": "3.984375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#ffb128] h-[4px] rounded-[0.5px] w-px" />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55px] mt-[3px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#21c1bb] h-[5px] ml-[1.88px] mt-0 rounded-[0.5px] w-[1.25px]" />
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center ml-0 mt-[1.87px] relative w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "1.234375", "--transform-inner-height": "4.984375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#21c1bb] h-[5px] rounded-[0.5px] w-[1.25px]" />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] h-[22.645px] ml-[17.2px] mt-[9px] relative w-[24.769px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 23">
        <g id="Group 1000004112">
          <path d={svgPaths.p2ad3a700} fill="url(#paint0_linear_7_8943)" id="Vector 80" />
          <path d={svgPaths.pb5b7700} fill="url(#paint1_linear_7_8943)" id="Vector 81" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_8943" x1="20.5802" x2="12.5295" y1="1.58508" y2="20.5068">
            <stop stopColor="#FEA608" />
            <stop offset="1" stopColor="#FFD110" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_7_8943" x1="5.43393" x2="10.7682" y1="-3.85044" y2="15.5817">
            <stop stopColor="#FEA608" />
            <stop offset="1" stopColor="#FFD110" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[33.504px] relative w-[37.733px]">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 34">
          <g id="Group 1000004116">
            <path d={svgPaths.p160046f0} fill="url(#paint0_linear_7_8963)" id="Vector 80" />
            <path d={svgPaths.p2a81400} fill="url(#paint1_linear_7_8963)" id="Vector 81" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_8963" x1="14.1308" x2="23.6308" y1="0.506836" y2="18.0068">
              <stop stopColor="#FEA608" />
              <stop offset="1" stopColor="#FFD110" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_7_8963" x1="35.4648" x2="7.01913" y1="43.4788" y2="9.63735">
              <stop stopColor="#FEA608" />
              <stop offset="1" stopColor="#FFD110" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="h-[25.476px] relative w-[28.216px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 26">
        <g id="Group 1000004115">
          <path d={svgPaths.p2db32b80} fill="url(#paint0_linear_7_8953)" id="Vector 80" />
          <path d={svgPaths.p19c1c740} fill="url(#paint1_linear_7_8953)" id="Vector 81" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_8953" x1="19.8013" x2="18.3682" y1="28.8847" y2="5.81047">
            <stop stopColor="#FEA608" />
            <stop offset="1" stopColor="#FFD110" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_7_8953" x1="6.03673" x2="17.5466" y1="6.90944" y2="26.6886">
            <stop stopColor="#FEA608" />
            <stop offset="1" stopColor="#FFD110" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="h-[23.79px] relative w-[26.443px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 24">
        <g id="Group 1000004114">
          <path d={svgPaths.p17833800} fill="url(#paint0_linear_7_8949)" id="Vector 80" />
          <path d={svgPaths.p3d9b540} fill="url(#paint1_linear_7_8949)" id="Vector 81" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_8949" x1="10.5092" x2="26.5955" y1="3.7118" y2="16.1353">
            <stop stopColor="#FEA608" />
            <stop offset="1" stopColor="#FFD110" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_7_8949" x1="18.0851" x2="13.5091" y1="34.4964" y2="2.96484">
            <stop stopColor="#FEA608" />
            <stop offset="1" stopColor="#FFD110" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[23.753px] relative w-[24.992px]">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 24">
          <g id="Group 1000004113">
            <path d={svgPaths.p20486500} fill="url(#paint0_linear_7_8939)" id="Vector 80" />
            <path d={svgPaths.p3c039480} fill="url(#paint1_linear_7_8939)" id="Vector 81" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_8939" x1="12.073" x2="21.573" y1="0.506836" y2="18.0068">
              <stop stopColor="#FEA608" />
              <stop offset="1" stopColor="#FFD110" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_7_8939" x1="18.2859" x2="-2.97436" y1="20.3356" y2="8.34469">
              <stop stopColor="#FEA608" />
              <stop offset="1" stopColor="#FFD110" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[24.98px] mt-[67.24px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#ffc800] h-[5.961px] ml-[3.13px] mt-0 rounded-[1px] w-[15.166px]" />
      <div className="[grid-area:1_/_1] bg-[#ff6f2c] h-[5.961px] ml-0 mt-[4.11px] rounded-[1px] w-[21.422px]" />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-px mt-[5.35px] relative size-[70px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
          <circle cx="35" cy="35" fill="var(--fill-0, #FAFAFA)" id="Ellipse 87" r="35" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[7px] mt-0 relative size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" id="Ellipse 88" r="2" stroke="var(--stroke-0, #F86259)" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[4px] mt-[63px] relative size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" id="Ellipse 90" r="1.5" stroke="var(--stroke-0, #F0FE61)" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[66px] mt-[50px] relative size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #F0FE61)" id="Ellipse 91" r="1.5" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[6px] mt-[24px] relative size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #26D17C)" id="Ellipse 89" r="1.5" />
        </svg>
      </div>
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.46881815791130066)+(var(--transform-inner-height)*0.8832947611808777)))] items-center justify-center ml-[11.34px] mt-[24.72px] relative w-[calc(1px*((var(--transform-inner-height)*0.46881815791130066)+(var(--transform-inner-width)*0.8832947611808777)))]" style={{ "--transform-inner-width": "37.71875", "--transform-inner-height": "33.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[207.958deg]">
          <Group7 />
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.5893891453742981)+(var(--transform-inner-height)*0.8078492879867554)))] items-center justify-center ml-[29.55px] mt-[17.52px] relative w-[calc(1px*((var(--transform-inner-height)*0.5893891453742981)+(var(--transform-inner-width)*0.8078492879867554)))]" style={{ "--transform-inner-width": "28.1875", "--transform-inner-height": "25.46875" } as React.CSSProperties}>
        <div className="flex-none rotate-[143.886deg]">
          <Group6 />
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.9659258127212524)+(var(--transform-inner-height)*0.2588190734386444)))] items-center justify-center ml-[10.11px] mt-[18.27px] relative w-[calc(1px*((var(--transform-inner-height)*0.9659258127212524)+(var(--transform-inner-width)*0.2588190734386444)))]" style={{ "--transform-inner-width": "26.421875", "--transform-inner-height": "23.78125" } as React.CSSProperties}>
        <div className="flex-none rotate-[285deg]">
          <Group5 />
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.932889997959137)+(var(--transform-inner-height)*0.36016136407852173)))] items-center justify-center ml-[29.88px] mt-[5.17px] relative w-[calc(1px*((var(--transform-inner-height)*0.932889997959137)+(var(--transform-inner-width)*0.36016136407852173)))]" style={{ "--transform-inner-width": "24.984375", "--transform-inner-height": "23.734375" } as React.CSSProperties}>
        <div className="flex-none rotate-[68.89deg]">
          <Group4 />
        </div>
      </div>
      <Group8 />
    </div>
  );
}

function Trophy() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[2px] pt-0 px-0 relative shrink-0" data-name="Trophy">
      <Group9 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center relative shrink-0 w-[400px]">
      <Trophy />
      <p className="capitalize font-['Century_Gothic:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#27190c] text-[24px] text-nowrap whitespace-pre">Password Change Success</p>
      <p className="font-['Century_Gothic:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-neutral-500 w-[min-content] whitespace-pre-wrap">{`Congratulations!  You have successfully changed your password for login`}</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#c17c3e] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-[4px] shrink-0 w-[400px]" data-name="Button">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-center text-neutral-50 text-nowrap tracking-[-0.4577px] whitespace-pre">Return to login</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-center relative shrink-0">
      <Frame5 />
      <Button2 />
    </div>
  );
}

function WelcomePage1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] items-start left-[477px] p-[40px] rounded-[10px] shadow-[0px_0px_60px_0px_rgba(100,64,32,0.2)] top-[296.84px]" data-name="Welcome Page">
      <Frame6 />
    </div>
  );
}

export default function LoginSuccess() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="Login-Success">
      <InputSideParentCont />
      <LineVisualSideParentCont />
      <Frame18 />
      <WelcomePage1 />
    </div>
  );
}