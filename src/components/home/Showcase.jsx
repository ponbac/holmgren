import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function Showcase() {
  return (
    <>
      <section
        id="home"
        className="pb-20 lg:flex lg:max-w-7xl lg:mx-auto lg:py-32"
      >
        <div className="bg-gray-400 bg-opacity-60 bg-clip-border border-4 border-gray-300 rounded-2xl p-2 px-5 text-center lg:w-2/3 lg:mx-auto">
          <h1 className="text-4xl text-gray-900 mb-2 lg:text-6xl lg:text-left">
            Holmgrens Bygg fixar&nbsp; <br/>
            <ReactTypingEffect
              text={["din nya altan.", "din kommande utbyggnad.", "din efterlängtade renovering.", "ditt takbyte.", "vinterns snöskottning."]}
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
          <p className="font-bold mt-5 mb-4 lg:text-left">
            Author: Pontus Backman
          </p>
          <p className="lg:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus tempora cum possimus animi dignissimos accusantium unde
            maiores, nisi natus ducimus atque ipsam placeat dolor necessitatibus
            eius totam, doloremque quod, nostrum maxime molestias! Repellat
            tenetur laborum cumque tempore veniam nostrum fugiat eveniet, enim
            voluptate dicta illo vero vel ducimus hic quaerat.
          </p>
        </div>
      </section>
    </>
  );
}
