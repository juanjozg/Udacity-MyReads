import React, { Component } from "react";
import ListOfBooks from "../Shared/ListOfBooks";

class Shelf extends Component {
	state = {};
	render() {
		const { books, shelf, shelves, onBookShelfChange } = this.props;
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{shelf.name}</h2>
				<div className="bookshelf-books">
					<ListOfBooks
						books={books.filter(book => book.shelf === shelf.formattedName)}
						shelves={shelves}
						onBookShelfChange={(book, shelf) => {
							onBookShelfChange(book, shelf);
						}}
					/>
				</div>
			</div>
		);
	}
}

export default Shelf;
