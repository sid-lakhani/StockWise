import Loader from '@/components/dashboard/Loader'
import React from 'react'

export default function LoadingPage() {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Loader />
        </div>
    )
}
