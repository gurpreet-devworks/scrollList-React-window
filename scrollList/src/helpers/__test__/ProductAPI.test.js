// Import the function to be tested
import { fetchProducts } from "../ProductAPI";

// Mock the global `fetch` function
global.fetch = jest.fn();

describe("fetchProducts", () => {
	// Test case: Successful API response
	it("should fetch products successfully", async () => {
		const mockProducts = [
			{ id: 1, title: "Product 1", price: 100 },
			{ id: 2, title: "Product 2", price: 150 },
		];

		// Mock the fetch response for a successful API call
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockProducts,
		});

		// Call the fetchProducts function
		const products = await fetchProducts();

		// Expectations
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");
		expect(products).toEqual(mockProducts);
	});

	// Test case: API returns an error
	it("should throw an error if the fetch fails", async () => {
		// Mock the fetch response for a failed API call
		fetch.mockResolvedValueOnce({
			ok: false,
		});

		// Expect the fetchProducts function to throw an error
		await expect(fetchProducts()).rejects.toThrow(
			"Failed to fetch products: Not Found"
		);

		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");
	});
});
