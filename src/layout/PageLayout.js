import React from 'react'
import Header from '../components/Header'

export default function PageLayout(props) {
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}
