import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import {Link, useHistory} from "react-router-dom"


const RecommendationPage = () => {

    const { user, recom_book, recombook, nullrecom } = useContext(UserContext)
    const history = useHistory()

//   const [recombook, setRecomBook] = useState([]);
//   const [nullrecom, setNullRecom] = useState(false);

    React.useEffect (() => {
        if (!user)  {
            history.push('/login') 
            return
        }

        recom_book()

    }, [])

    return (
        <> 
        {nullrecom && 
            <div class='bg-blue-500'>
                <div class='mx-auto w-1/2 p-8 rounded-sm '>
                    <h1 class='text-3xl font-semibold p-4 text-center text-white'>No recommendations</h1>
                </div>
            </div>
        }

        {!nullrecom && 
            <div class='bg-blue-500'>
                <div class='mx-auto w-1/2 p-8 rounded-sm '>
                    <h1 class='text-3xl font-semibold p-4 text-center text-white'>Recommendations </h1>
                </div>
                <div class='flex w-full h-full'>
                    {
                        recombook.map((book, index) => (
                            <Link class='w-full h-full' to={`/book/${book.isbn}`} >
                                <img class='w-full h-full' src={book.img}/>
                            </Link>
                        ))
                    }
                </div>
            </div>
        }
        </>
    )
}

export default RecommendationPage