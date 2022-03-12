import { useState, useEffect } from "react"

import axios from "axios";

const useAllState = () => {
    const [user, setUser] = useState({});
    const [userType, setUserType] = useState('admin');



    const logOut = ()=>{
        localStorage.removeItem('accessToken')
        setUser({})
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/verify`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
            .then((response) => {
                if (response.data.error) {
                    setUser({});
                } else {
                    setUser(response.data);
                }
            });
    }, []);

    return {
        user,
        userType,
        setUser,
        logOut
    }
}

export default useAllState