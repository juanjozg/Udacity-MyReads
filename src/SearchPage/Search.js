import React, { Component } from "react";
import SearchTopBar from "./SearchTopBar";
import ListOfBooks from "../Shared/ListOfBooks";
import * as BooksAPI from "../API/BooksAPI";

class Search extends Component {
	state = {
		booksSearched: []
	};

	updateBooksSearched = (typedSearch, books) => {
		if (typedSearch) {
			BooksAPI.search(typedSearch).then(booksBBDD => {
				if (!booksBBDD) {
					booksBBDD = [];
				} else if (booksBBDD && booksBBDD.error) {
					booksBBDD = booksBBDD.items;
					books.forEach(book => {
						booksBBDD.filter(b => b.id === book.id).forEach(x => (x.shelf = book.shelf));
					});
				} else {
					books.forEach(book => {
						booksBBDD.filter(b => b.id === book.id).forEach(x => (x.shelf = book.shelf));
					});
				}
				this.setState(prevState => {
					return { booksSearched: booksBBDD };
				});
			});
		} else {
			this.setState({ booksSearched: [] });
		}
	};

	render() {
		const { booksSearched } = this.state;
		const { shelves, changeBookShelf, books } = this.props;
		return (
			<div className="search-books">
				<SearchTopBar
					onBooksSearchedUpdate={typedSearch => this.updateBooksSearched(typedSearch, books)}
				/>
				<ListOfBooks
					books={booksSearched}
					shelves={shelves}
					onBookShelfChange={(book, shelf) => {
						changeBookShelf(book, shelf);
					}}
				/>
			</div>
		);
	}
}

export default Search;
