"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex h-screen w-full flex-col justify-between p-9">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              02
            </span>
            <p className="pb-6 font-medium">
             I like programming discord bots, graphics designing and creating websites.
             Experience in Python, tailwind-css and Javascript. I created an advance Ai discord bot {" "}              
     <a href="https://top.gg/bot/1238461418999648277"
                target="_blank"
                rel="noreferrer"
                className="pb-1 text-zinc-800 dark:text-zinc-100 underline bold font-medium"
              >
                Vexel
              </a>{" "}
           which is now verified, add it to your server!
            </p>

            <div className="">
              <Button size="xl" className="w-full font-bold" variant="brand">
                <a
                  href="https://github.com/Priyansxu"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 dark:text-zinc-800 text-zinc-100"
                >
                  Github
                </a>{" "}
              </Button>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
