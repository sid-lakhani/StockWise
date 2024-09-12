import React from 'react';

export default function Loader() {
    return (
        <div className="relative w-20 h-20 text-black dark:text-white animate-spin rounded-full">
            <div className="absolute inset-0 box-border border-[5px] border-solid border-transparent border-t-black dark:border-t-white rounded-full animate-[mltShdSpin_1.7s_infinite_ease]"></div>
        </div>
    );
}
