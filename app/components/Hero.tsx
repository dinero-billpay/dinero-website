import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="bg-dineroBlue rounded-2xl flex items-center gap-0 mt-8 md:mt-0 mb-16 mx-auto p-2 w-[90vw] md:py-4 md:pl-6">
            <div className="w-full md:w-4/5">
                <h1 className="text-[2.5rem] text-center md:text-5xl md:text-left text-[#f4f4f4] mb-7 font-extrabold w-full ">
                    Instant Payments, Endless Possibilities
                </h1>
                <p className="mb-6 text-base/6 text-[#f4f4f4] text-center md:text-left w-full">
                    You can now join other user to experience seamless transactions and manage your finances effortlessly with our app. Download our app from the app stores to get started.
                </p>
                <div className="flex flex-col gap-4 items-center md:items-center md:flex-row">
                    <Link href="/" className="bg-black rounded-2xl flex items-center p-2 gap-2 text-white text-xs hover:scale-110 w-44 h-16">
                        <Image 
                            src={'/apple.png'}
                            width={32}
                            height={38}
                            alt='apple icon'
                        />
                        <div>
                            <p>Download on the</p>
                            <p className="">App Store</p>
                        </div>
                    </Link>
                    <Link href="/" className="bg-black rounded-2xl flex items-center p-2 gap-2 text-white text-xs hover:scale-110 w-44 h-16">
                        <Image 
                            src={'/googlePlay.png'}
                            width={32}
                            height={38}
                            alt='google play icon'
                        />
                        <div>
                            <p>Get it on</p>
                            <p className="">Google Play</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="hidden md:flex">
                <Image
                    src={'/Midnight.png'}
                    alt='phone'
                    width={960}
                    height={1152}
                    className={'lg:w-1/2 ml-auto'}
                />
            </div>
        </div>
    )
}
