export const fetchProducts = async () => {
	const response = await fetch(`https://fakestoreapi.com/products`);
	if (!response.ok) {
		throw new Error("Failed to fetch products: Not Found");
	}
	return await response.json();
};
