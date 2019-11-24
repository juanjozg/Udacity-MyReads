import React, { Component } from "react";

class Book extends Component {
	state = {};

	render() {
		const { book, shelves, onBookShelfChange } = this.props;
		const styleBook = {
			width: 128,
			height: 192,
			backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ""})`
		};
		return (
			<div>
				<div className="book-top">
					<div className="book-cover" style={styleBook}></div>
					<div className="book-shelf-changer">
						<select
							defaultValue={book.shelf || "none"}
							onChange={event => onBookShelfChange(book, event.target.value)}
						>
							<option value="move" disabled>
								Move to...
							</option>
							{shelves.map(shelf => (
								<option key={shelf.id + book.id} value={shelf.formattedName}>
									{shelf.name}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">
					{book.authors &&
						book.authors.map((author, index) => <p key={index + author.trim()}>{author}</p>)}
				</div>
			</div>
		);
	}
}

export default Book;
