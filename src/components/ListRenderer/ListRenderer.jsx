import React, { Suspense } from "react";
import { FixedSizeList as List } from "react-window";
import { ProductRow } from "../ProductRow/ProductRow";
import { Spinner } from "../Spinner/Spinner";

export const ListRenderer = ({
	products,
	isLoading,
	hasMore,
	loadMoreItems, // Added prop
}) => {
	return (
		<div>
			<Suspense fallback={<Spinner />}>
				<List
					height={300}
					itemCount={products.length}
					itemSize={90}
					width={"100%"}>
					{({ index, style }) => (
						<ProductRow
							key={index}
							index={index}
							product={products[index]}
							style={style}
						/>
					)}
				</List>
			</Suspense>
			{isLoading && <Spinner />}
		</div>
	);
};
