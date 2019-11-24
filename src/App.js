import React, { Component } from "react";
import * as BooksAPI from "./API/BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import Main from "./MainPage/Main";
import Search from "./SearchPage/Search";

const shelves = [
	{ id: "1", name: "Currently Reading", formattedName: "currentlyReading" },
	{ id: "2", name: "Want to Read", formattedName: "wantToRead" },
	{ id: "3", name: "Read", formattedName: "read" },
	{ id: "4", name: "None", formattedName: "none" }
];

class BooksApp extends Component {
	componentDidMount() {
		this.getAllBooks();
	}

	state = {
		books: []
	};

	changeBookShelf = (book, shelf) => {
		BooksAPI.update(book, shelf);
		this.setState(prevState => {
			return {
				books: [...prevState.books.filter(({ id }) => id !== book.id), { ...book, shelf: shelf }]
			};
		});
	};

	getAllBooks = () => {
		BooksAPI.getAll().then(booksDB => {
			this.setState(() => {
				return { books: booksDB };
			});
		});
	};

	render() {
		return (
			<div className="app">
				<Route
					exact
					path="/"
					render={() => (
						<Main
							shelves={shelves}
							books={this.state.books}
							onShowBooks={this.getAllBooks}
							changeBookShelf={this.changeBookShelf}
						></Main>
					)}
				/>
				<Route
					path="/search"
					render={() => (
						<Search
							shelves={shelves}
							changeBookShelf={this.changeBookShelf}
							books={this.state.books}
						></Search>
					)}
				/>
			</div>
		);
	}
}

export default BooksApp;
