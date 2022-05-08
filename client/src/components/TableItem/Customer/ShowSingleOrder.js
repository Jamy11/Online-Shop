import React from 'react'

const ShowSingleOrder = ({ item }) => {
    return (
        <>
            <tr className="h-16 border border-gray-100 rounded">

                <td className>
                    <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-700 mr-2">{item.name}</p>
                    </div>
                </td>

            

                {/* <td className>
                    <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-700 mr-2">{item.Shop.name}</p>
                    </div>
                </td>

                <td className>
                    <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-700 mr-2">{item.User.email }</p>
                    </div>
                </td>

                <td className>
                    <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-700 mr-2">{item.User.id}</p>
                    </div>
                </td> */}
            </tr>
            <tr className="h-3" />
        </>
    )
}

export default ShowSingleOrder