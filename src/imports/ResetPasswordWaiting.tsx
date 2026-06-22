import svgPaths from "./svg-qxjm5tq37b";
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

function Frame13() {
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

function Frame8() {
  return (
    <div className="bg-[#644020] content-stretch flex gap-[10px] items-center justify-center relative rounded-[40px] shrink-0 size-[25px]">
      <Solid />
    </div>
  );
}

function Container1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-end pl-[6px] pr-[4px] py-0 relative shrink-0" data-name="Container2">
      <Frame8 />
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
          <Frame13 />
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[26px] relative shrink-0 text-[#27190c] text-[20px] text-nowrap tracking-[-0.6538px] whitespace-pre">Reset Password</p>
      <p className="font-['Century_Gothic:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[14px] text-center text-neutral-500 w-[min-content]">
        {`Thanks! If haileyonas@gmail.com matches an email address we have on file, then we've sent you an email containing further instructions for resetting your password.`}
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        {`If you haven't received an email in 5 minutes, check your spam, resend, or try a different email address.`}
      </p>
    </div>
  );
}

function Line1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Line">
          <path d={svgPaths.p353cbe00} id="Shape" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TextCursor() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Text + Cursor">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-900 text-nowrap tracking-[-0.4577px]">
        <p className="leading-[21px] whitespace-pre">haileyonas@gmail.com</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <Line1 />
      <TextCursor />
    </div>
  );
}

function InputFrame() {
  return (
    <div className="bg-neutral-50 relative rounded-[6px] shrink-0 w-full" data-name="Input Frame">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <Frame2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[6px]" />
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
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Component 4">
      <Title />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Component />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#c17c3e] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-center text-neutral-50 text-nowrap tracking-[-0.4577px] whitespace-pre">Resend</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c17c3e] text-[14px] text-center text-nowrap tracking-[-0.4577px] whitespace-pre">Return to login</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[356px]">
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function WelcomePage() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start p-[32px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] shrink-0" data-name="Welcome Page">
      <Frame6 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center min-w-[280px] relative shrink-0 w-[420px]">
      <AuthenticationTitle />
      <WelcomePage />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <TopContainer />
      <Frame14 />
    </div>
  );
}

function InputSideParentCont() {
  return (
    <div className="basis-0 grow h-full max-w-[640px] min-h-px min-w-px relative shrink-0" data-name="Input Side parent cont">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between max-w-inherit px-[20px] py-[40px] relative size-full">
          <Frame9 />
          <p className="font-['Acens:Regular',sans-serif] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] leading-[14px] not-italic relative shrink-0 text-[#ad892e] text-[14px] text-center tracking-[-0.28px] w-full">
            <span className="text-black">Powered by</span>
            <span>{` AASTU`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-center">
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[32px] text-white uppercase w-full">Geological Institute of ethiopia</p>
      <p className="capitalize font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#f3e5d8] text-[20px] tracking-[1px] w-full">{`Archival & document tracking system`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[62px] not-italic relative shrink-0 text-[52px] text-center text-white w-full">Welcome To Geological Institute of Ethiopia</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Frame12 />
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

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-between min-h-px min-w-px relative shrink-0 w-full">
      <Frame3 />
      <Slider />
    </div>
  );
}

function Frame10() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter basis-0 bg-[rgba(100,64,32,0.4)] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[207px] items-center px-[48px] py-[64px] relative size-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function AuthenticationBackgroundVisual() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-[860px] items-center min-h-px min-w-px overflow-clip relative rounded-[20px] shrink-0" data-name="Authentication Background Visual">
      <img alt="" className="absolute backdrop-blur-[10px] backdrop-filter inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgAuthenticationBackgroundVisual} />
      <Frame10 />
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

export default function ResetPasswordWaiting() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="Reset password-waiting">
      <InputSideParentCont />
      <LineVisualSideParentCont />
    </div>
  );
}