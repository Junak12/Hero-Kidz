import Banner from "@/components/Home/Banner/Banner";
import Product from "@/components/Home/Product/Product";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10">
      <section>
        <Banner/>
      </section>
      <section>
        <Product/>
      </section>
    </div>
  );
}
