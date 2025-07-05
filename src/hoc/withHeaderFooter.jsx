import React from 'react'
import { Header } from '../components/Layout/Header'

const withHeaderFooter = (Component) => {
    function InnerComponent () {
        return (
            <>
                <Header />
                <Component />
                
            </>
        )
    }

    return InnerComponent;
}

export default withHeaderFooter;