import React from 'react'

const SingleShop = ({shop, takeToShop}) => {
    return (

        <div className="relative group flex justify-center items-center h-full w-full mb-6 " style={{cursor:'pointer'}} onClick={()=>takeToShop(shop.id)}>
            <img className="object-center object-cover h-full w-full" src=" https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="girl-image" />
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">{shop.name}</button>
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
        </div>
    )
}

export default SingleShop