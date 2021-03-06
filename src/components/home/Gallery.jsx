import React from "react";

export default function Gallery() {
  return (
    <section id="galleri" className="mt-12">
      <h1 className="text-4xl font-bold text-white text-center">Tidigare projekt</h1>
      <div className="flex flex-col xl:flex-row justify-around mt-12 mx-4">
        <div>
          <iframe
            className="rounded-xl shadow-md overflow-hidden"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHolmgrens-Bygg-Service-101504525041548%2F%3Fref%3Dpage_internal&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=152191681485180"
            width="500"
            height="800"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div>
          <iframe
            className="rounded-xl shadow-md overflow-hidden"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHolmgrens-Bygg-Service-101504525041548%2F%3Fref%3Dpage_internal&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=152191681485180"
            width="500"
            height="800"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
