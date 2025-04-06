import React, {useState} from "react";
import { portfolioData } from "../../mocks/Data/data";
import Link from "next/link";
import Image from "next/image";
import { FiCamera } from "react-icons/fi";
import Lightbox from "react-18-image-lightbox";

function Products() {
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [isImage, setIsImage] = useState(false);

   const images = [
     "/images/cotton.jpg",
     "/images/halfpanama.jpg",
     "/images/pique.jpg",
     "/images/flannel.jpg",
     "/images/kreton.jpg",
     "/images/ranforce.jpg",
   ];

   const handleMovePrev = () => {
     setCurrentImageIndex(
       (prevIndex) => (prevIndex + images.length - 1) % images.length
     );
   };

   const handleMoveNext = () => {
     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
   };
   const handleImageClick = (index) => {
     setCurrentImageIndex(index);
     setIsImage(true);
   };
   const currentImage = images[currentImageIndex];
  return (
    <div id="products" className="container relative md:mt-20 mt-10">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
          Products
        </h6>
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Fabrics & Yarns
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          Discover a world of possibilities for your business in
          textiles with our wholesale offerings. Our extensive collection of
          fabrics and yarns includes:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
        {portfolioData.map((item, index) => {
          return (
            <div
              key={index}
              className="group relative block overflow-hidden rounded-md transition-all duration-500"
            >
              <Image
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "suto" }}
                className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                alt=""
              />
              <div className="absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0"></div>

              <div className="content" onClick={() => handleImageClick(index)}>
                <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-2 end-4 transition-all duration-500">
                  <Link
                    href="#"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"
                  >
                    <FiCamera className="w-4 h-4" />
                  </Link>
                </div>
                <div className="title absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                  <Link
                    href="/products"
                    className="h6 text-md font-medium text-white hover:text-indigo-600 duration-500 ease-in-out"
                  >
                    {item.name}
                  </Link>
                  <p className="text-slate-100 text-sm tag mb-0">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {isImage && (
          <Lightbox
            mainSrc={currentImage}
            prevSrc={
              images[(currentImageIndex + images.length - 1) % images.length]
            }
            nextSrc={images[(currentImageIndex + 1) % images.length]}
            onCloseRequest={() => setIsImage(false)}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>
    </div>
  );
}

export default Products;
