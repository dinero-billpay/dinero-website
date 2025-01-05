import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Features() {
    return (
        <div className={"w-[90vw] mx-auto mb-20 "}>
            <h2 className={"text-center text-[2.5rem] md:text-5xl mb-3 font-bold"}>
                Our <span className={"text-dineroBlue"}>Features</span> To You
            </h2>
            <p className={"text-center text-[rgba(0, 0, 0, 0.6)] mb-12 text-base/6"}>
                These are the features available to you on DineroPay.
            </p>

            <div className={"flex gap-8 flex-col md:flex-row"}>
                <div className={"w-full lg:w-[30rem] bg-[#eee] rounded-3xl flex items-center justify-center h-[26rem] md:h-[42rem] px-4"}>
                    <div className={"md:w-[16rem]"}>
                        <h3 className={"text-[2.5rem]/8 tracking-[0.3px] text-[rgba(51, 51, 51, 1)] mb-6 font-bold"}>Bill Payment</h3>
                        <p className={"text-2xl/7 tracking-[0.3px] text-[rgba(51, 51, 51, 1)] mb-6"}>
                            DineroPay allows you pay all bills - utility, entertainment, airtime purchase etc - with ease.
                        </p>
                        <div className={"flex items-center gap-3"}>
                            <Link href="/">Learn More</Link>
                            <Image
                                width={16}
                                height={24}
                                alt='icon'
                                src={'/arrow-right.png'}
                            />
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 w-full"}>
                    <div className={"bg-[#eee] rounded-3xl h-[26rem] md:h-[23rem] p-8"}>
                        <div className={"w-full lg:w-[33rem]"}>
                            <h3 className={"text-[2.5rem]/8 tracking-[0.3px] text-[rgba(51, 51, 51, 1)] mb-8 font-bold"}>Payment Schedule</h3>
                            <p className={"text-2xl/7 tracking-[0.3px] text-[rgba(51, 51, 51, 1)] mb-6"}>
                                Choose your bills and payment dates, and our app will automatically processing payments when they&apos;re due.
                            </p>
                            <div className={"flex items-center gap-3"}>
                                <Link href="/">Learn More</Link>
                                <Image
                                    width={16}
                                    height={24}
                                    alt='icon'
                                    src={'/arrow-right.png'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"bg-[#eee] rounded-3xl h-[20rem] md:h-[18rem] p-8"}>
                        <div className={"w-full lg:w-[33rem]"}>
                            <h3 className={"text-[2.5rem]/8 tracking-[0.3px] text-[rgba(51, 51, 51, 1)] mb-8 font-bold"}>USSD</h3>
                            <p className={"text-2xl/7 tracking-[0.3px] text-[rgba(51, 51, 51, 1)] mb-6"}>
                                No mobile data? You can still pay your bills on DineroPay with our USSD features.
                            </p>
                            <div className={"flex items-center gap-3"}>
                                <Link href="/">Learn More</Link>
                                <Image
                                    width={16}
                                    height={24}
                                    alt='icon'
                                    src={'/arrow-right.png'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
