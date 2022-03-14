import { useState, useEffect } from "react"

import axios from "axios";

const useAllState = () => {
    const [user, setUser] = useState({});
    const [userType, setUserType] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [userAllInfo, setUserAllInfo] = useState({});
    const [shopList, setShopList] = useState({});
    const [shopLoading, setShopLoading] = useState(true);
    const [productCatagoryList, setProductCatagoryList] = useState({});
    const [productCatagoryLoading, setProductCatagoryLoading] = useState(true);

    const logOut = () => {
        localStorage.removeItem('accessToken')
        setUser({})
        setIsLoading(false)
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/verify`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((response) => {
            if (response.data.error) {
                setUser({});
                setUserType('')
            } else {
                setUser(response.data);
                setUserType(response.data.type)
            }
        });
        setIsLoading(false)

    }, []);

    return {
        user,
        userType,
        setUser,
        logOut,
        isLoading,
        setIsLoading,
        userAllInfo, 
        setUserAllInfo,
        shopList , 
        setShopList,
        shopLoading, 
        setShopLoading,
        productCatagoryList, 
        setProductCatagoryList,
        productCatagoryLoading, 
        setProductCatagoryLoading
    }
}

export default useAllState