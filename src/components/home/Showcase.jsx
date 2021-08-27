import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function Showcase() {
  const showcaseTexts = [
    "din nya altan.",
    "din kommande utbyggnad.",
    "din renovering.",
    "ditt takbyte.",
    "vinterns snöskottning.",
  ];

  return (
    <>
      <section
        id="home"
        className="pb-20 lg:max-w-7xl lg:mx-auto py-8 lg:py-32 px-4 lg:px-0"
      >
        <div className="flex flex-col justify-start items-center p-2 px-5 text-center lg:w-2/3 lg:mx-auto bg-white bg-opacity-50 rounded-xl shadow-md md:max-w-4xl">
          <h1 className="text-4xl mb-2 lg:text-6xl lg:text-center leading-tight font-bold text-black">
            Holmgrens Bygg fixar&nbsp; <br />
            <ReactTypingEffect
              text={showcaseTexts.sort(() => Math.random() - 0.5)}
              typingDelay={1500}
              eraseSpeed={80}
              eraseDelay={3000}
              cursorRenderer={(cursor) => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return <span key={key}>{char}</span>;
                    })}
                  </h1>
                );
              }}
            />
          </h1>
          <div className="flex gap-4 mt-9 mb-2 items-center">
            <ShowcaseButton text="Kontakta oss" link="/kontakt"/>
            <ShowcaseButton text="Läs mer" link="#omoss"/>
          </div>
        </div>
      </section>
    </>
  );

  function ShowcaseButton(props) {
    return <div className="w-44 h-11 rounded-xl flex items-center justify-center border-2 border-black transition-colors	hover:bg-black hover:text-white hover:border-white cursor-pointer">
      <a href={props.link} className="font-bold text-lg uppercase">{props.text}</a>
    </div>;
  }
}
