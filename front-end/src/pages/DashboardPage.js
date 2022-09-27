import { React, useContext  } from "react";
import UserContext from "../context/UserContext";
import { PaperClipIcon } from '@heroicons/react/20/solid'

const DashboardPage = () => {
  
  const { user, logoutUser } = useContext(UserContext)

  console.log(user)
  return (
    <div class='mx-auto'>
    <div className="w-1/3 mx-auto my-4 overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">About {user.username}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">User information</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Username</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.username}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.Location}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Age</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.Age}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Points</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.points}</dd>
          </div>
        </dl>
      </div>
      <button class='m-4 w-1/9 p-4 bg-red-600 rounded-md text-red-300 font-semibold ' 
        onClick={logoutUser}> Logout </button>
      </div>
    </div>
  )
}

export default DashboardPage
