export const getProducts = async () => {
  const result = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!result.ok) {
    throw new Error("Failed to fetch products");
  }

  return result.json();
};
