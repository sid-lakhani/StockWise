import Header from '@/components/dashboard/Header';
import Portfolio from '@/components/dashboard/Portfolio';
import React from 'react'

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return (
        <div>
            <Header />
            <Portfolio />
        </div>
    )
}
