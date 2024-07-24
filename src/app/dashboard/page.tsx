import { Bento } from '@/components/dashboard/Bento'
import Header from '@/components/dashboard/Header'
import React from 'react'

export default function page() {
    return (
        <main className='h-screen flex items-center justify-center'>
            <Header />
            <Bento />
        </main>
    )
}
