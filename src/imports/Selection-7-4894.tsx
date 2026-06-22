import svgPaths from "./svg-0dbwtwkfvl";

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

function Frame() {
  return (
    <div className="bg-[#644020] content-stretch flex gap-[10px] items-center justify-center relative rounded-[40px] shrink-0 size-[25px]">
      <Solid />
    </div>
  );
}

function Container1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-end pl-[6px] pr-[4px] py-0 relative shrink-0" data-name="Container2">
      <Frame />
    </div>
  );
}

export default function Selection() {
  return (
    <div className="bg-[#f9f2ec] content-stretch flex items-center justify-center overflow-clip relative rounded-[25px] size-full" data-name="Selection">
      <Container />
      <Container1 />
    </div>
  );
}