import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ExampleTwo() {

    useEffect(() => {
        console.log("RUN");
    }, [])

    return(
        <>
        <Header />
        <main>
            <h1>Example two</h1>
        </main>
        <Footer />
        </>
    )
}