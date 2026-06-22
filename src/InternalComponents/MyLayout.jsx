import { useState, useEffect } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import { languageTranslate } from "@/utils/data";
import useAppStore from "@/Store/useAppStore";
import LanguageChange from "./common/LanguageChange";

// Slides data with translation keys
const slides = [
  {
    titleKey: "slide1Title",
    descriptionKey: "slide1Description",
  },
  {
    titleKey: "slide2Title",
    descriptionKey: "slide2Description",
  },
];

export default function MyLayout({ children }) {
  // Get language from Zustand store
  const language = useAppStore((state) => state.language);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex gap-5 p-5 relative">
      {/* Full-viewport background */}
      <img
        src="/3D_Isometric_Auth_Bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Blue overlay over the entire background */}
      <div className="absolute inset-0 bg-brand-primary/80 z-0" />

      {/* Left Cont */}
      <div className="hidden md:flex flex-col w-full min-h-full justify-between pt-12 px-6 pb-6 relative z-10">
        {/* Logos Cont */}
        <div className="w-full flex gap-3">
          <img
            src="/logos/AACA_Logo.png"
            alt=""
            className="h-16 w-16 lg:h-20 lg:w-20 object-contain"
          />
          <div className="w-full flex flex-col gap-[2px] py-2.5">
            <h1 className="font-brand-serif font-medium custom-text-xl leading-[125%] tracking-tight text-center text-gray-50">
              {languageTranslate(language, "underAddisAbabaCityAdministration")}
            </h1>
            <h2 className="font-brand-serif font-medium custom-text-xl leading-[125%] tracking-tight text-center text-gray-50">
              {languageTranslate(language, "fullAAHDAB")}
            </h2>
          </div>
          <img
            src="/logos/AAHDAB_Logo.png"
            alt=""
            className="h-16 w-16 lg:h-20 lg:w-20 object-contain"
          />
        </div>

        {/* Auth CTA */}
        <div className="w-full flex flex-col py-5 gap-2">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`w-full flex flex-col transition-all duration-500 gap-1 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 absolute translate-y-2 pointer-events-none"
                  }`}
                >
                  <h1 className="font-medium custom-text-4xl leading-[125%] tracking-tight text-center capitalize text-gray-50">
                    {languageTranslate(language, slide.titleKey)}
                  </h1>
                  <h4 className="font-normal custom-text-sm leading-[25px] tracking-normal text-center text-gray-100">
                    {languageTranslate(language, slide.descriptionKey)}
                  </h4>
                </div>
              ))}
            </div>

            {/* Scroll Buttons */}
            <div className="flex gap-3 justify-center">
              {slides.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-[48px] h-[8px] rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentSlide
                      ? "w-[48px] h-[8px] bg-primary-700"
                      : "w-[48px] h-[8px] bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Auth Cont */}
      <div className="flex flex-col justify-between w-full h-full gap-2.5 px-6 pt-16 pb-5 rounded-2xl bg-main-bg-white opacity-90 relative z-10 overflow-hidden">
        <div className="flex flex-col justify-between w-full gap-2 h-full overflow-hidden">
          <div className="w-full flex justify-between">
            <div className="h-8 sm:h-7.5 md:h-8 relative shrink-0 w-15 sm:w-16.25 md:w-[69.684px]">
              <ThemeToggleButton />
            </div>

            <div className="content-stretch flex flex-col gap-2.5 items-start relative shrink-0">
              <LanguageChange />
            </div>
          </div>
          <div className="md:hidden w-full flex justify-center items-center gap-5 pt-3.5">
            <img
              src="/logos/AACA_Logo.png"
              alt=""
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
            />
            <img
              src="/logos/AAHDAB_Logo.png"
              alt=""
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
            />
          </div>

          <div className="flex-1 overflow-y-auto min-h-0">{children}</div>
        </div>

        <p className="font-normal text-base leading-none tracking-normal text-center capitalize text-neutral-900">
          {languageTranslate(language, "poweredBy")}{" "}
          <span className="font-bold text-base leading-[1.25] tracking-tight text-center uppercase text-aastu-gold">
            <a
              href="https://www.aastu.edu.et/"
              target="_blank"
              className="hover:underline"
              rel="noopener noreferrer"
            >
              {languageTranslate(language, "aastu")}
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
