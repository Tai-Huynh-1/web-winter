import { Component } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<SearchBar />
				<ProductTable />
			</div>
		);
	}
}

export default FilterableProductTable;
