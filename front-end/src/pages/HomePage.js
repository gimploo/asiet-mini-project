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
import MyStoreBooks from "../components/MyStoreBooks";

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

const StartingSection = () => {
return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
			Place for indies to go mainstream
            </h1>
            <p className="mt-4 text-xl text-gray-500">
				Using state of the art AI technology to recommend the best kind of books that you like
				and also giving a platform for upcomming authors by allowing them a to be heard through their work.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://www.refinery29.com/images/10226353.jpg?format=webp&width=720&height=864&quality=85&crop=5%3A6"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.refinery29.com/images/10226385.jpg?format=webp&width=720&height=864&quality=85"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.refinery29.com/images/10226387.jpg?format=webp&width=720&height=864&quality=85"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.refinery29.com/images/10226392.jpg?format=webp&width=720&height=864&quality=85"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.refinery29.com/images/10226395.jpg?format=webp&width=720&height=864&quality=85"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.refinery29.com/images/10226405.jpg?format=webp&width=720&height=864&quality=85"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.refinery29.com/images/10226422.jpg?format=webp&width=720&height=864&quality=85"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/login"
                className="inline-block rounded-md border border-transparent bg-blue-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
              >
                Login now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const UploadYourBookSection = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to be the next big author?</span>
          <span className="block text-indigo-600">Upload your first book today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
			Login
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
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
		{!user && <StartingSection />}
		{/* {user && <Recommended /> } */}
		<MyStoreBooks />
		{!user && <UploadYourBookSection />}

	{/* <div class='p-10' style={{backgroundColor:"#5e92d6",minHeight:"100vh"}}>

		<>
		<div className="trending_box">
			<h2 className="trending_tit ">Your Recommendations ...</h2>
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
		</div>
		</>
	</div> */}
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
