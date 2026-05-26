export const getSingleProduct = async (id) => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`,
        {
            cache: "no-store",
        }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }

    return res.json();
}