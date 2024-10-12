import React from "react";
import { useProductLoader } from "./../../hooks/useProductLoader";
import { ListRenderer } from "../ListRenderer/ListRenderer";

const ScrollableList = () => {
	const { products, isLoading, loadMoreItems, hasMore, error } =
		useProductLoader();
	if (error) {
		return (
			<div
				style={{
					textAlign: "center",
					color: "red",
					padding: "10px",
					backgroundColor: "#fff",
				}}>
				Error: {error}
			</div>
		);
	}

	if (isLoading) {
		return <div>Loading products...</div>;
	}

	return (
		<div data-testid='scrollable-list'>
			<ListRenderer
				products={products}
				isLoading={isLoading}
				hasMore={hasMore}
				loadMoreItems={loadMoreItems}
			/>
		</div>
	);
};

export default ScrollableList;
