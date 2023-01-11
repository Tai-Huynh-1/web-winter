import Comments from "./Comments";
import { render } from "@testing-library/react";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("Comments Component", () => {
	describe("Successful API Call", () => {
		it("should render a list of comments", async () => {
			// ARRANGE (setup: render the component to the vDOM)
			const screen = render(<Comments />);

			// ACT (perform some action on the UI to imitate user response)
			const commentsList = await screen.findAllByRole("listitem");

			// ASSERT (compare results vs. our expectation)
			expect(commentsList).toHaveLength(3);
		});
	});

	describe("Failed API Call", () => {
		it("should display an error message", async () => {
			// ARRANGE (reset & override the "get" behavior for this route to return an error instead)
			server.resetHandlers(
				rest.get("https://jsonplaceholder.typicode.com/comments", (req, res, ctx) => {
					return res(ctx.status(500));
				})
			);

			const screen = render(<Comments />);

			// ACT (user waits for component to mount and fetch data)
			const errMsg = await screen.findByText("An unexpected error occured!");

			// ASSERT
			expect(errMsg).toBeInTheDocument();
		});
	});
});
