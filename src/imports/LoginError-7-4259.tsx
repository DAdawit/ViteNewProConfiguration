import svgPaths from "./svg-0ve8kzisd0";
import imgGieGeologicalInstituteOfEthiopianTransparentBg1 from "figma:asset/ec92bed2034c082ae2e97ef8755644aa4372420e.png";
import imgAuthenticationBackgroundVisual from "figma:asset/14c0eda4b7292d46147d256e32e8e5c6fed506b9.png";

function Line() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Line">
          <path d={svgPaths.p7b68400} id="Shape" stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" />
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
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-center text-neutral-200 text-nowrap tracking-[-0.4577px] whitespace-pre">English</p>
          <Line />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Button />
    </div>
  );
}

function Solid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Solid">
          <path d={svgPaths.p3951e400} fill="var(--fill-0, #F3E5D8)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#644020] content-stretch flex gap-[10px] items-center justify-center relative rounded-[40px] shrink-0 size-[25px]">
      <Solid />
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-start justify-center pl-[4px] pr-[6px] py-0 relative shrink-0" data-name="Container1">
      <Frame9 />
    </div>
  );
}

function LineLine() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Line/Line232">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Line/Line232">
          <path d={svgPaths.p437d400} id="Shape" opacity="0.5" stroke="var(--stroke-0, #C17C3E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center pl-[6px] pr-[4px] py-0 relative shrink-0" data-name="Container2">
      <LineLine />
    </div>
  );
}

function Selection() {
  return (
    <div className="bg-[#27190c] content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[25px] shrink-0" data-name="Selection">
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
          <Frame14 />
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
      <div className="capitalize font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#f9f2ec] text-[0px] text-center w-[min-content]">
        <p className="mb-0 text-[16px]">Welcome Back To</p>
        <p className="text-[14px] text-neutral-500">ADTM system</p>
      </div>
    </div>
  );
}

function Line1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Line">
          <path d={svgPaths.p37c90000} id="Shape" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Manrope:Medium',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Your username or password is incorrect.</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Line1 />
      <Content />
    </div>
  );
}

function Toast() {
  return (
    <div className="bg-red-900 box-border content-stretch flex gap-[8px] items-center overflow-clip pl-[10px] pr-[8px] py-[8px] relative rounded-[6px] shrink-0 w-[356px]" data-name="Toast">
      <Content1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-nowrap w-full whitespace-pre">
      <p className="font-['Poppins:Medium',sans-serif] leading-[26px] relative shrink-0 text-[#f9f2ec] text-[20px] tracking-[-0.6538px]">welcome back</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[21px] relative shrink-0 text-[14px] text-center text-neutral-500 tracking-[-0.4577px]">Login to your account</p>
    </div>
  );
}

function Line2() {
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
      <Line2 />
      <TextCursor />
    </div>
  );
}

function Line3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Line">
          <path d={svgPaths.p37c90000} id="Shape" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function InputFrame() {
  return (
    <div className="bg-red-900 relative rounded-[6px] shrink-0 w-full" data-name="Input Frame">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <Frame />
          <Line3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-red-500 border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f9f2ec] text-[14px] tracking-[1.75px] uppercase w-full">
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

function Line4() {
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
      <Line4 />
      <TextCursor1 />
    </div>
  );
}

function Line5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Line">
          <path d={svgPaths.p37c90000} id="Shape" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function InputFrame1() {
  return (
    <div className="bg-red-900 relative rounded-[6px] shrink-0 w-full" data-name="Input Frame">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <Frame3 />
          <Line5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-red-500 border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f9f2ec] text-[14px] tracking-[1.75px] uppercase w-full">
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

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Component />
      <Component1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-neutral-700 relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-center text-neutral-400 text-nowrap tracking-[-0.4577px] whitespace-pre">Login</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[356px]">
      <Frame7 />
      <Button1 />
    </div>
  );
}

function WelcomePage() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col gap-[10px] items-start p-[32px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] shrink-0" data-name="Welcome Page">
      <Toast />
      <Frame8 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center min-w-[280px] relative shrink-0 w-[420px]">
      <AuthenticationTitle />
      <WelcomePage />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <TopContainer />
      <Frame15 />
    </div>
  );
}

function InputSideParentCont() {
  return (
    <div className="basis-0 grow h-full max-w-[640px] min-h-px min-w-px relative shrink-0" data-name="Input Side parent cont">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between max-w-inherit px-[20px] py-[40px] relative size-full">
          <Frame10 />
          <p className="font-['Acens:Regular',sans-serif] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] leading-[14px] not-italic relative shrink-0 text-[#ad892e] text-[14px] text-center tracking-[-0.28px] w-full">
            <span className="text-white">Powered by</span>
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
      <p className="capitalize font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#f3e5d8] text-[20px] tracking-[1px] w-full">{`Archival & document tracking system`}</p>
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

function Frame13() {
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
      <Frame13 />
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

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-between min-h-px min-w-px relative shrink-0 w-full">
      <Frame4 />
      <Slider />
    </div>
  );
}

function Frame11() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter basis-0 bg-[rgba(100,64,32,0.4)] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[207px] items-center px-[48px] py-[64px] relative size-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function AuthenticationBackgroundVisual() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-[860px] items-center min-h-px min-w-px overflow-clip relative rounded-[20px] shrink-0" data-name="Authentication Background Visual">
      <img alt="" className="absolute backdrop-blur-[10px] backdrop-filter inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgAuthenticationBackgroundVisual} />
      <Frame11 />
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

export default function LoginError() {
  return (
    <div className="bg-black content-stretch flex items-start relative size-full" data-name="Login-error">
      <InputSideParentCont />
      <LineVisualSideParentCont />
    </div>
  );
}