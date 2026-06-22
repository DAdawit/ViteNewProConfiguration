import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import trophyIcon from "@/assets/trophy.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { languageTranslate } from "@/utils/data";
import useAppStore from "@/Store/useAppStore";

const SuccessDialgo = ({ open }) => {
  const navigate = useNavigate();
  const language = useAppStore((state) => state.language);

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#1B4075]/50 backdrop-blur-[4px]" />
        <Dialog.Content
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] outline-none"
        >
          <div className="w-[479px] flex flex-col rounded-xl px-8 py-10 gap-2.5 bg-base-white bg-white">
            <div className="w-full flex flex-col gap-7 items-center">
              <div className="w-full flex flex-col gap-5">
                <img
                  src={trophyIcon}
                  alt="trophy"
                  className="w-20 h-20 object-contain mx-auto"
                />
                <div className="w-full flex flex-col gap-1">
                  <h1 className="font-medium text-3xl leading-[1.25] tracking-tight text-center capitalize text-primary-900">
                    {languageTranslate(language, "passwordChangeSuccessTitle")}
                  </h1>
                  <h2 className="font-normal text-base leading-[1.5] tracking-tight text-center text-neutral-500">
                    {languageTranslate(
                      language,
                      "passwordChangeSuccessMessage",
                    )}
                  </h2>
                </div>
              </div>
              <Button
                onClick={() => navigate("/login")}
                className="w-80 gap-2 rounded-full pt-2.5 pr-6 pb-2.5 pl-6 bg-primary-700 shadow-[0px_8px_24px_-3px_#1018281A] font-normal text-base leading-none tracking-normal text-center text-neutral-50"
              >
                {languageTranslate(language, "returnToLoginButton")}
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SuccessDialgo;
