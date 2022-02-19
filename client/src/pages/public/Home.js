import React, {useEffect} from 'react'
import Footer from '../../components/Footer/Footer'
import Footer2 from '../../components/Footer/Footer2'
import Header from '../../components/Header/Header'
import Hero from '../../components/Header/Hero'
const Home = () => {
    // useEffect(() => {
    //     fetch('http://localhost:5000/login/').then(res=> res.json()).then(hbodue=>console.log(hbodue.body))
    // }, [])
    return (
        <div>
            {/* <Header /> */}
            {/* <Footer /> */}
            <Hero />
            <Footer2 />
        </div>
    )
}

export default Home
