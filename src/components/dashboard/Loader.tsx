import React from 'react';

export default function Loader() {
    return (
        <div className="relative w-12 h-12 text-white animate-spin rounded-full">
            <div className="absolute inset-0 box-border border-[5px] border-solid border-transparent border-t-white rounded-full animate-[mltShdSpin_1.7s_infinite_ease]"></div>
        </div>
    );
}
