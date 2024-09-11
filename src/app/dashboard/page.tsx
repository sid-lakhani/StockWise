import Bento from '@/components/dashboard/Bento'
import Header from '@/components/dashboard/Header'
import React from 'react'

export default async function page() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <main className='h-screen flex items-center justify-center'>
            <Header />
            <Bento />
        </main>
    )
}
