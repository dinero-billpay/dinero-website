import React from 'react'
import Image from 'next/image'

export default function Steps() {
    return (
        <div className={"w-[90vw] mx-auto mb-24"}>
            <h2 className={"text-center font-bold text-[2.75rem] mb-7"}>
                <span className={"text-dineroBlue"}>Steps</span> To Using DineroPay
            </h2>

            <div className={"relative flex flex-col items-center md:flex-row flex-wrap justify-center gap-0 md:gap-28"}>
                <div className={'hover:scale-110 cursor-pointer'}>
                    <h2 className={"font-['--font-inter'] font-semibold text-dineroBlue text-[2.75rem] relative top-6"}>01</h2>
                    <div className={"w-[13.375rem] rounded-3xl bg-dineroBlue flex flex-col items-center p-8 gap-6"}>
                        <Image 
                            width={95}
                            height={95}
                            src={"/icon-one.png"}
                            alt=''
                        />
                        <p className={"text-white font-medium text-2xl font-['--font-inter'] text-center"}>Download the app</p>
                    </div>
                </div>

                <div className={'hover:scale-110 cursor-pointer'}>
                    <h2 className={"font-['--font-inter'] font-semibold text-dineroBlue text-[2.75rem] relative top-6"}>02</h2>
                    <div className={"w-[13.375rem] rounded-3xl bg-dineroBlue flex flex-col items-center p-8 gap-6"}>
                        <Image 
                            width={95}
                            height={95}
                            src={"/icon-two.png"}
                            alt=''
                        />
                        <p className={"text-white font-medium text-2xl font-['--font-inter'] text-center"}>Set up your profile</p>
                    </div>
                </div>

                <div  className={'hover:scale-110 cursor-pointer'}>
                    <h2 className={"font-['--font-inter'] font-semibold text-dineroBlue text-[2.75rem] relative top-6"}>03</h2>
                    <div className={"w-[13.375rem] rounded-3xl bg-dineroBlue flex flex-col items-center p-8 gap-6"}>
                        <Image 
                            width={95}
                            height={95}
                            src={"/icon-three.png"}
                            alt=''
                        />
                        <p className={"text-white font-medium text-2xl font-['--font-inter'] text-center"}>Fund your wallet</p>
                    </div>
                </div>

                <div  className={'hover:scale-110 cursor-pointer'}>
                    <h2 className={"font-['--font-inter'] font-semibold text-dineroBlue text-[2.75rem] relative top-6"}>04</h2>
                    <div className={"w-[13.375rem] rounded-3xl bg-dineroBlue flex flex-col items-center p-8 gap-6"}>
                        <Image 
                            width={95}
                            height={95}
                            src={"/icon-four.png"}
                            alt=''
                        />
                        <p className={"text-white font-medium text-2xl font-['--font-inter'] text-center"}>
                            Make all your bill payments
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
