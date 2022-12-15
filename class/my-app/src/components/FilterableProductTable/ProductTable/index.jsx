import { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ProductCategoryRow />
				<ProductRow />
			</div>
		);
	}
}

export default ProductTable;
