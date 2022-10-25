import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PageLayout(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
