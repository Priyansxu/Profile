"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              03
            </span>
            <p className="pb-6 font-medium">
             Curiosity about the human mind drives my interest in psychology. I enjoys exploring topics like personality traits and cognitive biases.
             Captivated by the mysteries of space , spending my free time learning about astronomy and following the latest development in space exploration.
            </p>

            <div className="">
              <Button size="xl" className="w-full font-bold" variant="brand">
                <a
                  href="https://priyanshu.js.cool"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 dark:text-zinc-800 text-zinc-100"
                >
                  Portfolio
                </a>{" "}
              </Button>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
