import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

class Main extends Component {
	render() {
		const { books, shelves, changeBookShelf } = this.props;
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					{shelves
						.filter(shelf => shelf.formattedName !== "none")
						.map(shelf => (
							<div key={shelf.id}>
								<Shelf
									books={books}
									shelf={shelf}
									shelves={shelves}
									onBookShelfChange={(book, shelf) => {
										changeBookShelf(book, shelf);
									}}
								/>
							</div>
						))}
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		);
	}
}

export default Main;
