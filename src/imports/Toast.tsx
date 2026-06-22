function Line() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Line">
          <path d="M5 13L9 17L19 7" id="Shape" stroke="var(--stroke-0, #14532D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Manrope:Medium',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[12px] text-green-900 w-full">Minimum 8 letters</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <Line />
      <Frame />
    </div>
  );
}

function Line1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Line">
          <path d="M5 13L9 17L19 7" id="Shape" stroke="var(--stroke-0, #14532D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Manrope:Medium',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[12px] text-green-900 w-full">At least one number</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <Line1 />
      <Frame1 />
    </div>
  );
}

function Line2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Line">
          <path d="M5 13L9 17L19 7" id="Shape" stroke="var(--stroke-0, #14532D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Manrope:Medium',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[12px] text-green-900 w-full">At least one special character (e.g., !, @, #, $).</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <Line2 />
      <Frame2 />
    </div>
  );
}

export default function Toast() {
  return (
    <div className="bg-green-50 relative rounded-[6px] size-full" data-name="Toast">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip pl-[10px] pr-[8px] py-[8px] relative size-full">
          <Content1 />
          <Content3 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}