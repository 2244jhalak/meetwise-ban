import Image from 'next/image';
import React from 'react';

const AllIntegrations = () => {
    return (
        <div className='bg-fuchsia-50 py-16 px-28 text-center mx-auto'>
            <h3 className='text-4xl font-bold mb-10'>All Integrations</h3>
            <div className='md:flex justify-between gap-5 mx-auto'>
                <div className='bg-white p-7 rounded-2xl w-96'>
                    <Image></Image>
                    <p>Effortesly integrate our AI-powered recording website with google meet for an enhanced meeting experience</p>
                </div>
                <div className='bg-white p-7 rounded-2xl w-96'>
                    <Image></Image>
                    <p>Effortesly integrate our AI-powered recording website with google meet for an enhanced meeting experience</p>
                </div>
                <div className='bg-white p-7 rounded-2xl w-96'>
                    <Image></Image>
                    <p>Effortesly integrate our AI-powered recording website with google meet for an enhanced meeting experience</p>
                </div>
            </div>

        </div>
    );
};

export default AllIntegrations;