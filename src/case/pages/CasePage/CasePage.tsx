import gsap from "gsap";
import React from "react";
import Controller from "./Controller";
import AnimatedLayout from "../../../animations/AnimatedLayout";
import { slideIn, slideOut } from "../../../animations/animations";

type Props = {};

const tl = gsap.timeline();

export default function CasePage({}: Props) {
  // Effect: The animation timeline.
  React.useEffect(() => {
    // Find the element to apply methods on and keep finding unless found.
    const elementFindInterval = setInterval(() => {
      const mainElement = document.querySelector("main");

      if (!mainElement) return;

      // When found
      slideIn(mainElement, tl, () => {
        // Slide the tabs in.
        slideIn("#tabs article");
      });

      // Cancel the interval and move on with your life.
      clearInterval(elementFindInterval);
    }, 1000);

    return () => clearInterval(elementFindInterval);
  }, []);

  function onSetTabListener<T>(setter: (value: T) => unknown, value: T) {
    const tabsElement = document.querySelector("#tabs article")!;

    document.querySelector("#tabs")!.scrollIntoView();

    // When found
    slideOut(tabsElement, tl, () => {
      setter(value);
      slideIn(tabsElement);
    });
  }

  return (
    <AnimatedLayout>
      <Controller>
        {({ header, hero, meta, tabs, activeTabIndex, setActiveTabIndex }) => (
          <main className="opacity-0 translate-y-40 max-h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
            {/* Header */}
            <header id="header" className="relative w-screen h-screen">
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
              <a
                href="#hero"
                className="absolute transition-all duration-300 left-1/2 -translate-x-1/2 text-white bottom-8 hover:bottom-6 focus:bottom-4"
              >
                <span className="sr-only">Scroll down</span>
                <span aria-hidden="true" className="text-6xl">
                  &#8595;
                </span>
              </a>
            </header>
            {/* Hero & Meta */}
            <div className="flex flex-col md:flex-row">
              <section
                id="hero"
                className="relative self-stretch md:w-3/5 p-8 sm:py-32 sm:px-24 grid place-items-center"
                style={{
                  backgroundColor: meta.color,
                }}
              >
                <p className="text-white text-xl xl:text-3xl font-normal leading-relaxed max-w-xl">
                  {hero.tagLine}
                </p>
              </section>
              <section
                id="meta"
                className="relative self-stretch md:w-2/5 p-8 sm:py-32 sm:px-24 flex flex-col justify-center gap-8 text-neutral-600 font-normal text-xs xl:text-lg"
              >
                <div className="flex flex-col gap-4">
                  <span className="uppercase font-medium tracking-wider">
                    Client
                  </span>
                  <span>{meta.client}</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="uppercase font-medium tracking-wider">
                    Deliverables
                  </span>
                  <span>{meta.deliverable}</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="uppercase font-medium tracking-wider">
                    Live Website
                  </span>
                  <div className="flex gap-4">
                    {meta.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="pb-2 border-b-[1px] border-black"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            </div>
            <section id="tabs" className="relative bg-neutral-200">
              {/* Section Header */}
              {tabs.length > 1 && (
                <header className="pt-8 sm:pt-24 flex gap-8 justify-center">
                  {tabs.map((tab, i) => (
                    <button
                      key={i}
                      onClick={() => onSetTabListener(setActiveTabIndex, i)}
                      className={`pb-2 border-b-[1px] font-normal text-lg ${
                        tabs[activeTabIndex].name === tab.name
                          ? " border-black text-black"
                          : "border-transparent text-neutral-600"
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </header>
              )}
              <article className="opacity-0 translate-y-40">
                {/* Tab Video */}
                <section className="p-8 sm:px-32 sm:py-24 bg-neutral-200">
                  <div className="max-w-4xl mx-auto">
                    <video
                      loop
                      autoPlay
                      src={tabs[activeTabIndex].video}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </section>
                {/* Tab Description */}
                <section className="p-8 sm:px-32 sm:py-24 grid place-items-center">
                  <p className="text-xl font-normal leading-relaxed max-w-xl">
                    {tabs[activeTabIndex].description}
                  </p>
                </section>
                {/* Tab Screenshot */}
                <section
                  className="p-8 sm:px-32 sm:py-24 grid place-items-center"
                  style={{
                    backgroundColor: meta.color,
                  }}
                >
                  <div className="max-w-3xl mx-auto">
                    <img
                      src={tabs[activeTabIndex].screenshot}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </section>
                {/* Tab Content */}
                <section className="p-8 sm:px-32 sm:py-24">
                  {(tabs[activeTabIndex].content.title ||
                    tabs[activeTabIndex].content.paragraphs) && (
                    <div className="max-w-xl mx-auto flex flex-col items-start gap-8">
                      {/* Tab Title */}
                      {tabs[activeTabIndex].content.title && (
                        <span className="pb-4 border-b-2 border-neutral-600 text-neutral-600 uppercase tracking-wider text-sm">
                          {tabs[activeTabIndex].content.title}
                        </span>
                      )}
                      {/* Tab Tagline */}
                      {tabs[activeTabIndex].content.tagLine && (
                        <span className="text-2xl sm:text-3xl">
                          {tabs[activeTabIndex].content.tagLine}
                        </span>
                      )}
                      {/* Tab Paragraphs */}
                      {tabs[activeTabIndex].content.paragraphs?.map(
                        (paragraph, i) => (
                          <p key={i} className="text-lg font-normal">
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                  )}
                </section>
                {/* Tab Sections */}
                <section className="p-4 sm:p-8 lg:p-20">
                  <div className="max-w-6xl mx-auto flex flex-col gap-32">
                    {tabs[activeTabIndex].content.sections.map((section, i) => (
                      <div
                        key={i}
                        className={`flex flex-col gap-8 md:gap-16 sm:items-center ${
                          i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                        }`}
                      >
                        {/* Section Video */}
                        {section.video ? (
                          <div className="w-full">
                            <video
                              loop
                              autoPlay
                              className="w-full h-full object-cover"
                            >
                              <source src={section.video} />
                              {section.photo && (
                                <img alt="" src={section.photo} />
                              )}
                            </video>
                          </div>
                        ) : (
                          section.photo && (
                            <div className="w-full">
                              <img
                                alt=""
                                src={section.photo}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )
                        )}
                        {/* Section text */}
                        <div className="w-full flex flex-col gap-8 px-8 py-4 sm:p-0">
                          <span className="text-2xl sm:text-3xl lg:text-4xl">
                            {section.title}
                          </span>
                          <p className="text-lg sm:text-xl lg:text-2xl font-normal lg:pr-16 lg:!leading-loose">
                            {section.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                {/* Tab Mask */}
                <section>
                  <img
                    alt=""
                    src={tabs[activeTabIndex].mask.photo}
                    className="w-full h-full object-contain"
                  />
                </section>
                {/* Tab Footer */}
                <section className="p-16 sm:px-32 sm:py-20">
                  <div className="flex flex-col items-center gap-8">
                    {/* Footer Title */}
                    <span className="uppercase tracking-wider text-neutral-600">
                      {tabs[activeTabIndex].footer.title}
                    </span>
                    {/* Footer Links */}
                    <div className="flex gap-8">
                      {tabs[activeTabIndex].footer.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="pb-2 border-b-[1px] border-black font-normal sm:text-2xl"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </section>
              </article>
            </section>
            <footer id="footer" className="relative">
              {/* Quote Section */}
              <a
                target="blank"
                rel="noreferrer"
                href="https://www.tentwenty.me/enquiry"
                className="block p-16 sm:px-32 sm:py-20 bg-black text-white"
              >
                <div className="flex flex-col gap-8 items-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl">
                    Get a quote?
                  </span>
                  <span className="uppercase tracking-wider flex items-center gap-4 sm:gap-8">
                    Get in touch
                    <span className="text-3xl">&#8594;</span>
                  </span>
                </div>
              </a>
              {/* Next Section */}
              <div className="p-16 sm:px-32 sm:py-20 bg-neutral-900 text-white">
                <div className="flex flex-col gap-8 items-center">
                  <span className="uppercase tracking-wider">Next section</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl">
                    Coming soon
                  </span>
                </div>
              </div>
            </footer>
          </main>
        )}
      </Controller>
    </AnimatedLayout>
  );
}
