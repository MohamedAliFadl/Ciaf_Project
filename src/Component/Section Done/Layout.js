import { Fragment } from "react"
import Header from "../Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"


const Layout = ()=> {
    return(
        <Fragment>
            <Header />
            <Outlet />
            <Footer />

        </Fragment>
    )
}


export default Layout