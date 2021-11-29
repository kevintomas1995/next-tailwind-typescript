import React from "react";
import Image from "next/image";
import ImageOne from "../public/p1.jpg";
import ImageTwo from "../public/p2.jpg";

function Content() {
  return (
    <>
      <div className="menu-card">
        <div className="mb-20">
          <Image
            src={ImageOne}
            alt="product one"
            width={450}
            height={450}
            className="rounded"
          />
        </div>

        <div className="center-content">
          <h2 className="text-2xl mb-2">Fake Ice</h2>
          <p className="mb-2">This is a delicious fake ice made out of wood</p>
          <span>16,99 €</span>
        </div>
      </div>

      <div className="menu-card">
        <div className="mb-20">
          <Image
            src={ImageTwo}
            alt="product one"
            width={450}
            height={450}
            className="rounded"
          />
        </div>

        <div className="center-content">
          <h2 className="text-2xl mb-2">Handmade Bag</h2>
          <p className="mb-2">Check out this beautiful handmade bag</p>
          <span>59,99 €</span>
        </div>
      </div>
    </>
  );
}

export default Content;
