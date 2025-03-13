import PolygonSlideshow from './SponserTrack';

export default function MainTracks() {
    return (
        <div className="min-h-screen bg-black text-white p-6 font-sans relative">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12 mt-20 text-center font-custom">
                    <h1 className="text-5xl font-bold mb-2">
                        <span className="text-[#0cf]">Main</span> Tracks
                    </h1>
                    <hr className="border-t-0 w-1/2 mx-auto my-4" style={{ height: '2px', background: 'linear-gradient(to right, transparent, #0cf, transparent)' }} />
                    <p className="text-[#0cf] uppercase tracking-wider text-sm">
                        YOUR GUIDE TO HACKMOL 6.0
                    </p>
                </header>

                {/* Main Track - Yellow */}
                <div className="max-w-xl mx-auto mb-16 relative">
                    <div className="bg-[#F5E8BD] rounded-md overflow-hidden">
                        {/* Header with gradient background */}
                        <div className="relative py-2 px-4 text-black font-bold text-center text-xl" style={{ backgroundImage: 'url(/channels4_banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'repeat-x' }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 opacity-50 to-yellow-500 via-transparent"></div>
                            <span className="relative">MAIN TRACK</span>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 text-black flex">
                            {/* Left Side - Prize Details */}
                            <div className="w-1/2 flex flex-col justify-center">
                                <div className="mb-4">
                                    <div className="font-bold text-xl">WINNER</div>
                                    <div className="flex items-center">
                                        <img src="/currenct.png" alt="currency" className="inline-block mr-2 h-5 w-5" />
                                        <span className="text-lg">50,000</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="font-bold text-xl">1ST RUNNER UP</div>
                                    <div className="flex items-center">
                                        <img src="/currenct.png" alt="currency" className="inline-block mr-2 h-5 w-5" />
                                        <span className="text-lg">30,000</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-xl">2ND RUNNER UP</div>
                                    <div className="flex items-center">
                                        <img src="/currenct.png" alt="currency" className="inline-block mr-2 h-5 w-5" />
                                        <span className="text-lg">30,000</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Odin's Blessings */}
                            <div className="w-1/2">
                                <div className="font-bold text-lg mb-2">ODIN'S BLESSINGS</div>
                                <ul className="list-none">
                                    <li className="flex items-start mb-1">
                                        <span className="mr-2">✦</span> Partner Tshirts
                                    </li>
                                    <li className="flex items-start mb-1">
                                        <span className="mr-2">✦</span> This And That And This
                                    </li>
                                    <li className="flex items-start mb-1">
                                        <span className="mr-2">✦</span> What Else Would U
                                    </li>
                                    <li className="flex items-start mb-1">
                                        <span className="mr-2">✦</span> Have Is Yours
                                    </li>
                                    <li className="flex items-start mb-1">
                                        <span className="mr-2">✦</span> Halu Halu Halu Halu
                                    </li>
                                    <li className="flex items-start mb-1">
                                        <span className="mr-2">✦</span> Bhalu Bhalu Bhalu
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">✦</span> Gdsc Nhi GDG Hai Bhaiya
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Norse symbol on right */}
                    <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 hidden md:block animate-vibrate">
                        <img src="/yellow side.png" alt="yellow side" className="w-8 h-8" style={{ filter: 'drop-shadow(0 0 15px yellow)' }} />
                    </div>
                </div>

                {/* Lower tracks container with blue shape in middle */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Blue shape in middle */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 z-0">
                        <img src="/bird.png" alt="bird" className="w-full h-full object-fit rounded-full" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-20 justify-between relative z-10">
                        {/* Fresher's Track - Gray */}
                        <div className="bg-[#C3C3C3] rounded-md overflow-hidden flex-1">
                            {/* Header with gradient background */}
                            <div className="relative py-2 px-4 text-black font-bold text-center text-xl" style={{ backgroundImage: 'url(/gray_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'repeat-x' }}>
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 opacity-50 to-gray-500 via-transparent"></div>
                                <span className="relative">FRESHER'S TRACK</span>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 text-black flex flex-col md:flex-row">
                                {/* Left Side - Prize Details */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <div className="mb-4">
                                        <div className="font-bold text-xl">WINNER</div>
                                        <div className="flex items-center">
                                            <img src="/currenct.png" alt="currency" className="inline-block mr-2 h-5 w-5" />
                                            <span className="text-lg">10,000</span>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="font-bold text-xl">1ST RUNNER UP</div>
                                        <div className="flex items-center">
                                            <img src="/currenct.png" alt="currency" className="inline-block mr-2 h-5 w-5" />
                                            <span className="text-lg">5,000</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">2ND RUNNER UP</div>
                                        <div className="flex items-center">
                                            <img src="/currenct.png" alt="currency" className="inline-block mr-2 h-5 w-5" />
                                            <span className="text-lg">3,000</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Odin's Blessings */}
                                <div className="w-full md:w-1/2">
                                    <div className="font-bold text-lg mb-2">ODIN'S BLESSINGS</div>
                                    <ul className="list-none">
                                        <li className="flex items-start mb-1">
                                            <span className="mr-2">✦</span> Partner Tshirts
                                        </li>
                                        <li className="flex items-start mb-1">
                                            <span className="mr-2">✦</span> This And That And This
                                        </li>
                                        <li className="flex items-start mb-1">
                                            <span className="mr-2">✦</span> What Else Would U
                                        </li>
                                        <li className="flex items-start mb-1">
                                            <span className="mr-2">✦</span> Have Is Yours
                                        </li>
                                        <li className="flex items-start mb-1">
                                            <span className="mr-2">✦</span> Halu Halu Halu Halu
                                        </li>
                                        <li className="flex items-start mb-1">
                                            <span className="mr-2">✦</span> Bhalu Bhalu Bhalu
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">✦</span> Gdsc Nhi GDG Hai Bhaiya
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Women's Track - Purple */}
                        <div className="bg-[#d772d7] rounded-md overflow-hidden flex-1">
                            {/* Header with gradient background */}
                            <div className="relative py-2 px-4 text-black font-bold text-center text-xl" style={{ backgroundImage: 'url(/purple_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'repeat-x' }}>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 opacity-50 to-purple-500 via-transparent"></div>
                                <span className="relative">WOMEN'S TRACK</span>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 text-black flex flex-col md:flex-row">
                                {/* Left Side - Prize Details */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <div className="mb-4">
                                        <div className="font-bold text-xl">WINNER</div>
                                        <div className="flex items-center">
                                            <img src="/currenct.png" alt="currency" className="inline-block mr-2 h-5 w-5" />
                                            <span className="text-lg">10,000</span>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="font-bold text-xl">1ST RUNNER UP</div>
                                        <div className="flex items-center">
                                            <img src="/currenct.png" alt="currency" className="inline-block mr-2 h-5 w-5" />
                                            <span className="text-lg">5,000</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">2ND RUNNER UP</div>
                                        <div className="flex items-center">
                                            <img src="/currenct.png" alt="currency" className="inline-block mr-2 h-5 w-5" />
                                            <span className="text-lg">3,000</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Freya's Remnants */}
                                <div className="w-full md:w-1/2">
                                    <div className="font-bold text-lg mb-2">FREYA'S REMNANTS</div>
                                    <ul className="list-none">
                                        <li className="flex items-start mb-1">
                                            <span className="mr-2">✦</span> Partner Tshirts
                                        </li>
                                        <li className="flex items-start mb-1">
                                            <span className="mr-2">✦</span> This And That And This
                                        </li>
                                        <li className="flex items-start mb-1">
                                            <span className="mr-2">✦</span> What Else Would U
                                        </li>
                                        <li className="flex items-start mb-1">
                                            <span className="mr-2">✦</span> Have Is Yours
                                        </li>
                                        <li className="flex items-start mb-1">
                                            <span className="mr-2">✦</span> Halu Halu Halu Halu
                                        </li>
                                        <li className="flex items-start mb-1">
                                            <span className="mr-2">✦</span> Bhalu Bhalu Bhalu
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">✦</span> Gdsc Nhi GDG Hai Bhaiya
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Star at bottom */}
                <div className="flex justify-center mt-16 relative">
                    <img src="/dog.png" alt="dog" className="absolute left-[-50px] top-[-500px] w-54 h-54" />
                    <img src="/star.png" alt="star" className="w-14 h-14" />
                </div>
            </div>

            <header className="mb-12 mt-10 text-center font-custom">
                <h1 className="text-5xl font-bold mb-2">
                    <span className="text-[#0cf]">Sponsor</span> Tracks
                </h1>
                <hr className="border-t-0 w-1/2 mx-auto my-4" style={{ height: '2px', background: 'linear-gradient(to right, transparent, #0cf, transparent)' }} />
                <p className="text-[#0cf] uppercase tracking-wider text-sm">
                    YOUR GUIDE TO HACKMOL 6.0
                </p>
            </header>

            <PolygonSlideshow />
        </div>
    );
}