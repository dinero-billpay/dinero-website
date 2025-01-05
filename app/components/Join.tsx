import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Join() {
    return (
        <div className={"w-[90vw] mx-auto relative mb-24"}>
            <div className={"bg-dineroBlue rounded-[3.5rem]"}>
                <div className={"rounded-[3.5rem] h-[28rem] bg-cover mix-blend-multiply bg-joinImage"}>
                </div>
            </div>
            <div className={"absolute w-full top-16 flex flex-col items-center gap-20 md:gap-48"}>
                <div>
                    <h2 className={"text-center text-white font-bold text-4xl md:text-5xl"}>
                        Join DineroPay now!
                    </h2>
                    <p className={"font-semibold text-center text-white"}>
                        Download the DineroPay app now and enjoy premium bill payment services and more.
                    </p>
                </div>

                <div className={"flex flex-col gap-2 md:flex-row md:gap-12"}>
                    <Link href="/" className={"bg-black rounded-2xl flex items-center p-2 gap-2 text-white text-xs hover:scale-110"}>
                        <Image 
                            src={"/apple.png"} 
                            alt="apple icon"
                            width={32}
                            height={32} 
                        />
                        <div>
                            <p>Download on the</p>
                            <p className={"text-2xl"}>App Store</p>
                        </div>
                    </Link>
                    <Link href="/" className={"bg-black rounded-2xl flex items-center p-2 gap-2 text-white text-xs hover:scale-110"}>
                        <Image 
                            src={"/googlePlay.png"}
                            alt="google play icon" 
                            width={32}
                            height={32}
                        />
                        <div>
                            <p>Get it on</p>
                            <p className={"text-2xl"}>
                                Google Play
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}