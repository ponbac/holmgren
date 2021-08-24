import React from "react";
import ReactTypingEffect from "react-typing-effect";
import profile from "../../../public/images/grid-1.jpeg";

export default function Showcase() {
  return (
    <>
      <section
        id="home"
        className="pb-20 lg:flex lg:max-w-7xl lg:mx-auto lg:py-32"
      >
        <div className="flex items-center justify-center py-10 lg:items-start lg:justify-start">
          <div className="mr-1">
            <h4 className="font-bold">Thomas Sankara</h4>
            <p className="text-gray-500 text-sm">Lorem, ipsum dolor.</p>
          </div>
          <img src={profile} alt="" className="w-10 rounded-full ml-1" />
        </div>

        <div className="px-5 text-center lg:w-2/3 lg:mx-auto">
          <h1 className="text-4xl text-gray-900 mb-2 lg:text-6xl lg:text-left">
            Vi fixar din nästa&nbsp;
            <ReactTypingEffect
              text={["altan.", "utbyggnad.", "renovering.", "takbyte."]}
              typingDelay={1500}
              eraseSpeed={100}
              eraseDelay={2500}
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
            Author: Thomas Sankara
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
