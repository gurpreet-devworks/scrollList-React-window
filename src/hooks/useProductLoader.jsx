import { useState, useEffect, useCallback } from "react";
import { fetchProducts } from "../helpers/ProductAPI";

export const useProductLoader = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const [error, setError] = useState(null);

	const [initialLoadComplete, setInitialLoadComplete] = useState(false);

	// Function to load products
	const loadProducts = useCallback(async () => {
		if (isLoading || initialLoadComplete) {
			return; // Prevent unnecessary calls
		}

		console.log("Loading products:", { isLoading, hasMore });
		setIsLoading(true);
		setError(null);
		try {
			const newProducts = await fetchProducts();

			if (newProducts.length > 0) {
				setProducts(newProducts);
				setHasMore(false); // All products are loaded initially
			} else {
				setHasMore(false); // No products found
			}
		} catch (error) {
			console.error("Failed to load products:", error);
			setError(error.message);
		} finally {
			setIsLoading(false);
			setInitialLoadComplete(true);
		}
	}, [isLoading]);

	// Load initial products on mount
	useEffect(() => {
		loadProducts(); // Load initial products
		console.log(products);
	}, [loadProducts]);

	const loadMoreItems = useCallback(() => {
		if (!isLoading && hasMore) {
			console.log("Loading more items...");
			loadProducts();
		}
	}, [loadProducts, isLoading, hasMore]);

	return {
		products,
		isLoading,
		loadMoreItems,
		hasMore,
		error,
	};
};
