import { getSingleProduct } from "@/services/singleProduct";
import Image from "next/image";

const SingleProduct = async ({ params }) => {
  const { id } = await params;

  const data = await getSingleProduct(id);

  if (!data || !data.data) {
    return <h1 className="text-center text-2xl mt-10">Product not found</h1>;
  }

  const product = data.data;

  const discountedPrice = product?.price
    ? Math.round(product.price - (product.price * product.discount) / 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-12">
        {/* IMAGE */}
        <div className="sticky top-24 h-fit">
          <Image
            src={product.image}
            alt={product.title || "product"}
            width={800}
            height={800}
            priority
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* PRODUCT INFO */}
        <div>
          {/* Discount badge */}
          {product.discount ? (
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full border mb-4">
              {product.discount}% OFF
            </span>
          ) : null}

          {/* Title */}
          <h1 className="text-4xl font-bold leading-tight">{product.title}</h1>

          {/* Subtitle */}
          <p className="mt-3 text-lg text-base-content/70">{product.bangla}</p>

          {/* Price */}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-4xl font-bold text-primary">
              ৳{discountedPrice}
            </span>

            <span className="text-xl line-through text-gray-400">
              ৳{product.price}
            </span>
          </div>

          {/* Description */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-3">Description</h2>

            <p className="leading-7 text-base-content/70">
              {product.description}
            </p>
          </div>

          {/* Key Features */}
          {product.info?.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>

              <ul className="space-y-3">
                {product.info.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-current" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Q&A */}
      {product.qna?.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {product.qna.map((item, i) => (
              <div key={i} className="border-b pb-5">
                <p className="font-semibold text-lg">Q: {item.question}</p>
                <p className="mt-2 text-base-content/70">A: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
