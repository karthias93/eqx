import React from 'react';

function Home(props) {
    return (
        <div className='main-sec'>
            <div className='container mx-auto px-4 py-20'>
                <div className=' mb-12'>
                    <h1 className='text-6xl text-white font-bold mb-4'>
                        Welcome to the <span className='text-yellow-400'>TREASURY</span>
                    </h1>
                    <p className='text-base text-gray-300'>
                        The most trusted decentralized custody protocol and collective asset management platform.
                    </p>
                </div>
                <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-6 max-lg:text-center">
                    <div className='p-6 welcome-card border border-gray-600 rounded-lg text-white'>
                        <div className='mb-3 text-yellow-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 5l0 14"></path>
                                <path d="M5 12l14 0"></path>
                            </svg>
                        </div>
                        <h3 className='text-3xl font-bold mb-3'>
                            Create TREASURY
                        </h3>
                        <p className='text-base mb-6'>
                            A new TREASURY that is controlled by one or multiple owners.
                        </p>
                        <button className='rounded-lg font-bold px-6 py-3 grad-btn'>Create new TREASURY</button>
                    </div>
                    <div className='p-6 welcome-card border border-gray-600 rounded-lg text-white'>
                        <div className='mb-3 text-yellow-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-curve-right" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 7l4 -4l4 4"></path>
                                <path d="M14 3v4.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v2.394"></path>
                            </svg>
                        </div>
                        <h3 className='text-3xl font-bold mb-3'>
                            Add existing TREASURY
                        </h3>
                        <p className='text-base mb-6'>
                            Already have a TREASURY? Add your Safe using your Safe address.
                        </p>
                        <button className=' border border-gray-200 rounded-lg font-bold px-6 py-3 '>Add existing TREASURY</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;