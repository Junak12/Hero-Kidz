export const getSingleProduct = async (id) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    return null; 
  }

  return data;
};
