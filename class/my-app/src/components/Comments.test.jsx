import Comments from "./Comments";
import { render } from "@testing-library/react";

describe("Comments Component", () => {
	describe("Successful API Call", () => {
		it("should render", () => {
			const screen = render(<Comments />);
		});
	});

	describe("Failed API Call");
});
