import React from "react";
import Controller from "./Controller";
import AnimatedLayout from "../../../animations/AnimatedLayout";

type Props = {};

export default function CasePage({}: Props) {
  return (
    <AnimatedLayout>
      <Controller>
        {({ header, hero, meta, tabs }) => (
          <main>
            <section id="header" className="relative w-screen h-screen">
              {/* Header video */}
              <div className="h-full">
                {header.video ? (
                  <video autoPlay loop className="w-full h-full object-cover">
                    <source src={header.video} />
                    {header.photo && <img alt="" src={header.photo} />}
                  </video>
                ) : (
                  header.photo && <img alt="" src={header.photo} />
                )}
              </div>
              {/* Header title */}
              <div className="text-4xl sm:text-6xl lg:text-8xl text-white bg-black bg-opacity-40 absolute top-0 left-0 w-screen h-screen grid place-items-center">
                {header.title}
              </div>
              {/* Scroll down button */}
              <button className="absolute bottom-8 transition-all left-1/2 -translate-x-50 text-6xl text-white hover:bottom-4 focus:bottom-4">
                <div className="sr-only">Scroll down</div>
                &#8595;
              </button>
            </section>
            <section
              id="hero"
              className="relative p-8"
              style={{
                backgroundColor: meta.color,
              }}
            ></section>
            <section id="meta" className="relative"></section>
            <section id="tabs" className="relative"></section>
            <section id="footer" className="relative"></section>
          </main>
        )}
      </Controller>
    </AnimatedLayout>
  );
}
