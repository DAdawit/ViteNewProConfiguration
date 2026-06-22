import svgPaths from "./svg-sk9npdizpq";

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

function Frame() {
  return (
    <div className="bg-[#644020] content-stretch flex gap-[10px] items-center justify-center relative rounded-[40px] shrink-0 size-[25px]">
      <Solid />
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-start justify-center pl-[4px] pr-[6px] py-0 relative shrink-0" data-name="Container1">
      <Frame />
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

export default function Selection() {
  return (
    <div className="bg-[#27190c] content-stretch flex items-center justify-center overflow-clip relative rounded-[25px] size-full" data-name="Selection">
      <Container />
      <Container1 />
    </div>
  );
}