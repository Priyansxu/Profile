"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import manWIthRobot from "@/public/images/man-with-robot.png";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              02
            </span>
            <p className="pb-6 font-medium">
             I like programming discord bots  creating websites.
             Experience in Python, HTML, CSS and Javascript. i also design graphics whenever needed! 
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
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#e0f5ff] p-9">
        <Image src={manWIthRobot} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}