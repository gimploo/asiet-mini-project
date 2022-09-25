import React, { useContext, useEffect, useState } from "react";
import { Carousel } from "react-carousel-minimal";
import UserContext from "../context/UserContext";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import searchicon from "../assets/images/searchicon.jpg";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Rowbooks from "../components/Rowbooks";
import Recombooks from "../components/RecomBook";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Storebooks from "../components/StoreBooks";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from "../Axios";
import "../css/Rowbooks.css";
import "../css/home.css";

const MyCarousel = () => {

  const data = [
    {
      image:
        "https://manybooks.net/sites/default/files/2018-07/bookdisplaysmall.jpg",
      caption:
        "“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” - George R.R. Martin",
    },
    {
      image:
        "https://manybooks.net/sites/default/files/2018-07/bookcoverssmall2.jpg",
      caption:
        "“Until I feared I would lose it, I never loved to read. One does not love breathing.” - Harper Lee",
    },
    {
      image:
        "https://manybooks.net/sites/default/files/2018-07/bookstackssmall.jpg",
      caption:
        "“Never trust anyone who has not brought a book with them.” - Lemony Snicket",
    },
  ];

  const captionStyle = {
    fontSize: "1.5em",
    fontWeight: "bold",
  };

    return (
      <div class="m-0 text-center w-full rounded-none">
        <Carousel
          data={data}
          time={10000}
          width="100%"
          captionStyle={captionStyle}
          radius="10px"
          captionPosition="center"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
        
        />
      </div>
    )
}

const RenderSearchResults = () => {

  const {setShowSearchResult, sres } = useContext(UserContext)


    return (
      <div class='md:mx-auto md:w-2/3' >
      <h1 class='m-5 font-semibold md:text-2xl text-gray-400'> Search Results </h1>
      <hr class='m-5 bg-gray-800 w-full'/>
      <div class='md:ml-20 my-3 flex flex-wrap'>
        {sres.map((item, index) => (
          <Link onClick={() => {
              setShowSearchResult(false)
          }} to={`/book/${item.ISBN}`} class="m-2 w-2/5 flex items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class="object-cover w-full h-full rounded-t-lg md:h-auto md:w-32 md:rounded-none md:rounded-l-lg" src={item.img} alt=""/>
              <div class="hidden md:flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item.Book_title}</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.Book_Author}</p>
              </div>
          </Link>
        ))}
      </div>
      </div>
    )
}


const HomePage = () => {
	const addcartapi="api/addcart/";
	let { userstate, sres, initial, showSearchResult, user, recom_book,itemadd,fetchtrending,trending,Store,storebooks } = useContext(UserContext);
	const [open, setOpen] 			= useState(false);
	const [openerr, setOpenErr]  	= useState(false);
	const [loaditem,setLoadItem] 	= useState(false);

	useEffect(() => {
	}, [showSearchResult])

	useEffect(() => {
		itemadd();
		userstate();
		recom_book();
	}, []);

	if(storebooks && storebooks[0]){

	}else{
	Store();
	}
	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') return;
		setOpen(false);
	};
	const handleClose1 = (event, reason) => {
		if (reason === 'clickaway') return;
		setOpenErr(false);
	};
	const addcart=(bookid)=>{
	setLoadItem(true)
	let user=localStorage.getItem('user_id')
	const config = {
		headers: {
		"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({ userid:user,Bookid:bookid});
		axios.post(addcartapi,body,config).then((res)=>{
			setLoadItem(false)
			setOpen(true);
			itemadd();
		}).catch((err)=>{
			setLoadItem(false)
			setOpenErr(true)
		})
	}

	if (showSearchResult) return <RenderSearchResults />

	return (
	<>
		<MyCarousel />
		{/* <Recommendations /> */}
		{/* <Merchandise /> */}

	<div class=' p-10' style={{backgroundColor:"black",minHeight:"100vh"}}>

		<>
		<div className="trending_box">
			<h2 className="trending_tit">Your Recommendations ...</h2>
			{user && user.id ? (
			<>
				<Recombooks />
			</>
			) : (
			<div className="login-recom">
				<Link to="/login">
				<Button variant="contained" color="success">
					Login for Recommendation
				</Button>
				</Link>
			</div>
			)}
			<div className="trending_box">
			<h2 className="trending_tit">Store Books</h2>
			<Storebooks />
			</div>
		</div>
		</>
	</div>
	<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
		<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
		Book Added to Cart
		</Alert>
	</Snackbar>
	{openerr?<>
	<Snackbar open={openerr} autoHideDuration={6000} onClose={handleClose1}>
		<Alert onClose={handleClose1} severity="error" sx={{ width: '100%' }}>
		Oops Something Went Wrong try later!
		</Alert>
	</Snackbar>
	</>:null}
	<Snackbar open={loaditem}  >
		<Alert  severity="warning" sx={{ width: '100%' }}>
		Adding to cart...
		</Alert>
	</Snackbar>
	</>
	);
};
export default HomePage;
