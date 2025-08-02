import React from 'react'
import { Header } from '../components/Layout/Header'
import { Footer } from 'antd/es/layout/layout';

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