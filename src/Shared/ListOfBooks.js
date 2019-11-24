import React, { Component } from "react";
import Book from "./Book";

class ListOfBooks extends Component {
	state = {};
	render() {
		const { books, shelves, onBookShelfChange } = this.props;
		return (
			<div className="search-books-results">
				<ol className="books-grid">
					{books.map(book => (
						<div className="book" key={book.id}>
							<Book
								book={book}
								shelves={shelves}
								onBookShelfChange={(book, shelf) => {
									onBookShelfChange(book, shelf);
								}}
							/>
						</div>
					))}
				</ol>
			</div>
		);
	}
}

export default ListOfBooks;
