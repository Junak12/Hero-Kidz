import Image from "next/image";
import React from "react";
import bannerImage from "../../../../public/assets/hero.png";

const Banner = () => {
  return (
    <section className="w-full min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
          {/* Left Content */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 border border-base-300 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              নতুন কালেকশন এসেছে
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              ছোট্ট স্বপ্ন,
              <br />
              <span className="text-primary">বড় যত্ন</span>
            </h1>

            <p className="text-base md:text-lg text-base-content/70 leading-relaxed max-w-xl">
              Hero Kidzz-এ পাবেন শিশুদের জন্য নিরাপদ, আরামদায়ক এবং মানসম্মত
              পণ্যের বিশাল সংগ্রহ। আপনার সন্তানের প্রতিটি মুহূর্তকে আরও সুন্দর
              করে তুলতে আমরা আছি আপনার পাশে।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="btn btn-primary rounded-full px-8 text-white">
                Explore Products
              </button>

              <button className="btn btn-outline rounded-full px-8">
                View Collection
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 pt-6">
              <div>
                <h3 className="text-2xl font-bold">10K+</h3>
                <p className="text-sm text-base-content/60">Happy Parents</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-sm text-base-content/60">Premium Products</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">20%</h3>
                <p className="text-sm text-base-content/60">Discount Offer</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                alt="Banner Image"
                src={bannerImage}
                width={650}
                height={550}
                priority
                className="object-contain drop-shadow-2xl"
              />

              {/* Floating Card 1 */}
              <div className="absolute top-8 -left-6 bg-base-100 shadow-xl rounded-2xl px-5 py-4 border border-base-200 hidden md:block">
                <p className="text-sm text-base-content/60">Premium Quality</p>
                <h4 className="font-bold text-lg">Kids Collection</h4>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-10 -right-6 bg-base-100 shadow-xl rounded-2xl px-5 py-4 border border-base-200 hidden md:block">
                <p className="text-sm text-base-content/60">Special Offer</p>
                <h4 className="font-bold text-lg text-primary">
                  Up To 20% OFF
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
