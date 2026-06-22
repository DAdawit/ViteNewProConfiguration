import svgPaths from "./svg-mx9xqf9uje";

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

function Frame() {
  return (
    <div className="relative shrink-0 size-[25px]">
      <div className="absolute inset-[-42.64%_-64%_-85.03%_-64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 57">
          <g id="Frame 1000005910">
            <g filter="url(#filter0_d_5_533)" id="Ellipse 1">
              <ellipse cx="28.5" cy="23.459" fill="var(--fill-0, #644020)" rx="12.5" ry="12.459" />
            </g>
            <g id="Solid">
              <g id="Shape">
                <path d={svgPaths.p53f0d00} fill="var(--fill-0, #F3E5D8)" />
                <path d={svgPaths.p5b42900} fill="var(--fill-0, #F3E5D8)" />
                <path d={svgPaths.p64bf300} fill="var(--fill-0, #F3E5D8)" />
                <path d={svgPaths.p17515300} fill="var(--fill-0, #F3E5D8)" />
                <path d={svgPaths.p118eea80} fill="var(--fill-0, #F3E5D8)" />
                <path d={svgPaths.p3d836100} fill="var(--fill-0, #F3E5D8)" />
                <path d={svgPaths.p20299800} fill="var(--fill-0, #F3E5D8)" />
                <path d={svgPaths.p1fee6280} fill="var(--fill-0, #F3E5D8)" />
                <path d={svgPaths.p2cf39500} fill="var(--fill-0, #F3E5D8)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56.918" id="filter0_d_5_533" width="57" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="5" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_533" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_533" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
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

function Selection() {
  return (
    <div className="absolute bg-[#f9f2ec] content-stretch flex h-[32px] items-center justify-between left-0 overflow-clip rounded-[25px] top-0 w-[69.684px]" data-name="Selection">
      <Container />
      <Container1 />
    </div>
  );
}

export default function ThemeTogglerContainer() {
  return (
    <div className="relative size-full" data-name="theme toggler container">
      <Selection />
    </div>
  );
}