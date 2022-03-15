import React, { useState } from 'react'

const ShowSingleProduct = ({ item, deleteProduct }) => {
    const [show, setShow] = useState(null);
    return (
        <>
            <tr className="h-16 border border-gray-100 rounded">

                <td className>
                    <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-700 mr-2">{item.name}</p>
                    </div>
                </td>
                <td className="pl-24">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">{item.Shop.name}</p>
                    </div>
                </td>
                <td className="pl-24">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">{item.ProductCatagory.name}</p>
                    </div>
                </td>
                <td>
                    <div className="relative px-5 pt-2">

                        <div className="  ">
                            <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                <p>Edit</p>
                            </div>
                            <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white" onClick={() => deleteProduct(item.id)} >
                                <p >Delete</p>
                            </div>
                        </div>

                    </div>
                </td>
            </tr>
            <tr className="h-3" />
        </>
    )
}

export default ShowSingleProduct