import React from 'react';
import Link from "next/link";
import Image from "next/image";

function AboutUs() {
  return (
    <div id="projects" className="container relative">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div className="md:col-span-5">
          <div className="relative">
            <Image
              src="/images/services.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-md"
              alt=""
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="lg:ms-4">
            <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">
            We are a diversified company 
              <br /> offering comprehensive solutions across 4 core areas:
            </h4>
            <p className="text-slate-400 max-w-xl">
            Sale of Equipment and Spare Parts for Dairy and Soft Drink Production, <br/> Agricultural Industrial Equipment <br/> Fabrics and Yarns, <br/> Logistic services. <br/> Through partnerships with European manufacturers, we supply a wide range of industrial equipment—covering everything from fruit and vegetable processing to dairy and soft drink production—along with the necessary spare parts at competitive prices. <br/>

At the same time, we are the foremost experts in the fabric and yarn business, serving as the official distributor of the Cherkasy Silk Plant. Our extensive selection of textiles spans cloak and decorative fabrics to shirt and technical weaves. We provide expert guidance to help you find the perfect material for your specific needs. In addition, we offer competitive pricing and fast, reliable shipping, knowing that timely delivery is essential for your business.
<br/>
Finally, our avia cargo service ensures efficient air transportation from the European Union to CIS countries, providing a reliable and convenient logistics solution. 
<br/>
By uniting these three areas under one roof, we aim to be your one-stop partner for all equipment, textile, and delivery needs.
            </p>
            <Link
              href="#products"
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3"
            >
              Buy Now <i className="mdi mdi-chevron-right align-middle"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs