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
              We are the foremost experts
              <br /> in the fabric and yarn business
            </h4>
            <p className="text-slate-400 max-w-xl">
              We offering top-notch customer service. We
              understand that choosing the right fabric for your project can be
              overwhelming. We can help you find the perfect fabric for your
              specific needs. In addition to our extensive selection
              of fabrics, we also offer competitive pricing and fast, reliable
              shipping. We know that time is of the essence when it comes to
              completing your projects, which is why we work hard to get your
              fabrics to you as quickly as possible.
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