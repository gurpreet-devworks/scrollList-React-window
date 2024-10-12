import React from "react";

export const ProductRow = React.memo(({ index, product, style }) => (
	<div style={style} className='list-item'>
		{product ? (
			<>
				<img
					src={product.image}
					alt={product.title}
					style={{
						height: "70px",
						width: "70px",
						marginRight: "10px",
					}}
				/>
				<span role='list-item' data-testid={`product-row-${index}`}>
					{product.title}
				</span>
			</>
		) : (
			"Loading..."
		)}
	</div>
));
