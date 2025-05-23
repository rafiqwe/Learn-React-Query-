import { Outlet } from "react-router-dom"
import { Header } from "../../Pages/Header"
import { Footer } from "../../Pages/Footer"

export const MainLayOut = () => {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}