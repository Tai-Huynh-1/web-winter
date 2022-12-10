import { Component } from "react";

function MovieCard({ movie: { title, yearReleased } }) {
	return (
		<div style={{ border: "1px solid black" }}>
			<h1>{title}</h1>
			<h2>{yearReleased}</h2>
		</div>
	);
}

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [
				{
					id: 1,
					title: "Movie 1",
					yearReleased: "2000",
				},
				{
					id: 2,
					title: "Movie 2",
					yearReleased: "1980",
				},
				{
					id: 3,
					title: "Movie 3",
					yearReleased: "2022",
				},
			],
		};
	}

	render() {
		return this.state.movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
	}
}

export default MovieList;
