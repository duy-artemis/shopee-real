import React from 'react'
import { Header } from '../components/Layout/Header'
import Footer  from '../components/Layout/Footer';

const withHeaderFooter = (Component) => {
    function InnerComponent () {
        return (
            <>
                <Header />
                <Component />
                <Footer />
            </>
        )
    }

    return InnerComponent;
}

export default withHeaderFooter;