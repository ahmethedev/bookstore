import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import React from 'react'

function BackButton({destination = '/'}) {
  return (
    <div className="flex">,
    <Link 
    to={destination} className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit">
    <BsArrowLeft  className="text-2xl"></BsArrowLeft>

    </Link>
    </div>
  )
}

export default BackButton