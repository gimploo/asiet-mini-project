import { Button } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import axios from "../Axios";
import "../css/Rowbooks.css";
import "../css/responsive.css";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Pagination from "@mui/material/Pagination";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Skeleton from "@mui/material/Skeleton";

function MyStoreBooks() 
{
	const [books, setBooks] = useState([])

	
	useEffect(() => {

		axios.post('http://localhost:8000/api/trending/', {count: 10})
		.then((res) => {
			if (res.status == 200) {
				setBooks(res.data) 
			}
		})

	}, [])

		console.log(books)

	return (
		<div class='flex w-full h-full'>
			{books.map((book, index) => (
				<Link class='w-full h-full' to={`/book/${book.ISBN}`} >
					<img class='w-full h-full' src={book.img}/>
				</Link>
			))}
		</div>
	)
	
}

export default MyStoreBooks;
