import { useState, useEffect } from "react"

import axios from "axios";

const useAllState = () => {
    const [user, setUser] = useState({});
    const [userType, setUserType] = useState('admin');
    const [isLoading, setIsLoading] = useState(true)


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
            } else {
                setUser(response.data);
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
        setIsLoading
    }
}

export default useAllState