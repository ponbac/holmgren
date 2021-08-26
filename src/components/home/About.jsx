import React from "react";
import image from "../../../public/images/snickare.jpg";

export default function About() {
  return (
    // <div className="flex justify-center">
    //   <div className="grid grid-rows-2 xl:grid-rows-none xl:grid-cols-2 mx-2 lg:mx-96 border-4">
    //     <div className="">
    //       <img src={image} alt="snickare" className="object-cover"/>
    //     </div>
    //     <div className="bg-gray-500">
    //       <p>
    //         Vestibulum sem velit, vestibulum a dictum nec, bibendum a ligula.
    //         Nullam rutrum porta interdum. Aliquam quis feugiat ipsum, sed
    //         sagittis leo. Etiam et purus a urna ullamcorper hendrerit non eu
    //         odio. Maecenas maximus sem libero, quis mollis erat varius et. Duis
    //         sit amet risus in quam laoreet fermentum nec at augue. Proin eget
    //         ligula viverra, semper dui ac, convallis tortor. Sed ac mauris ac
    //         risus maximus tincidunt. Vivamus id risus lacus. Morbi placerat
    //         sagittis magna eu rhoncus. Pellentesque hendrerit, nisi at
    //         scelerisque feugiat, nulla libero molestie odio, vel faucibus urna
    //         nisi id erat. Nulla id rutrum odio, in auctor turpis. Fusce ac
    //         vulputate odio. Integer volutpat lorem eget vulputate tincidunt.
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <section id="omoss">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-96"
              src={image}
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-8">
            <p className="block mt-1 text-2xl leading-tight font-medium text-black">
              Holmgrens Bygg & Service, din lokala snickare
            </p>
            <p className="mt-2 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus tempora cum possimus animi dignissimos accusantium
              unde maiores, nisi natus ducimus atque ipsam placeat dolor
              necessitatibus eius totam, doloremque quod, nostrum maxime
              molestias! Repellat tenetur laborum cumque tempore veniam nostrum
              fugiat eveniet, enim voluptate dicta illo vero vel ducimus hic
              quaerat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
