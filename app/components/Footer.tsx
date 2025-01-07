import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
    return (
        <footer className={"bg-[#262626]"}>
            <div className={"w-[90vw] mx-auto md:pt-16"}>
                <div className={"flex justify-between items-center flex-col md:flex-row"}>
                    <div className={"w-[4.9rem]"}>
                        <Image 
                            src={"/footerLogo.png"} 
                            alt="dinero logo"
                            width={77}
                            height={77}
                            className={"w-full"} 
                        />
                    </div>
                    <div className={"flex gap-6 items-center flex-col mb-8 md:flex-row"}>
                        <nav className={"flex flex-col gap-6 text-[#f4f4f4]"}>
                            <Link href="#" className={"no-underline text-[#f4f4f4] w-fit"}>About Us</Link>
                            <Link href="#faq" className={"no-underline text-[#f4f4f4] w-fit"}>FAQs</Link>
                            <Link href="#" className={"no-underline text-[#f4f4f4] w-fit"}>Blog</Link>
                        </nav>
                        <nav className={"flex flex-col gap-6 text-[#f4f4f4]"}>
                            <Link href="mailto:info@dinero-billpay.com" className={"no-underline text-[#f4f4f4] w-fit"}>
                                info@dinero-billpay.com
                            </Link>
                            <Link href="tel:+2349066032718" className={"no-underline text-[#f4f4f4] w-fit"}>
                                +234 916 603 2718
                            </Link>
                        </nav>
                        <div className={"flex flex-col gap-6 text-[#f4f4f4]"}>
                            <p>Follow us on social media</p>
                            <nav className={"flex justify-between"}>
                                <Link href="/">
                                    <Image 
                                        src={"/facebook.png"} 
                                        alt="facebook icon" width={12}
                                        height={24}
                                    />
                                </Link>
                                <Link href="/">
                                    <Image 
                                        src={"/instagram.png"} alt="instagram icon"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                                <Link href="/">
                                    <Image 
                                        src={"/twitter.png"} 
                                        alt="twitter icon" 
                                        width={28.8}
                                        height={24}
                                    />
                                </Link>
                                <Link href="/">
                                    <Image 
                                        src={"/linkedin.png"} 
                                        alt="linkedin icon"
                                        width={25.2}
                                        height={24}
                                    />
                                </Link>
                                <Link href="/">
                                    <Image 
                                        src={"/youtube.png"} 
                                        alt="youtube icon"
                                        width={31.68}
                                        height={24}    
                                    />
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"border-solid border-2 border-white py-4 px-[5vw] flex items-center justify-between"}>
                <p className={"text-[14px]/5 text-white"}>
                    ©2024. Dinero Technologies Ltd.
                </p>
                <nav className={"flex gap-4 items-center"}>
                    <Link className={"text-white"} href="/terms">
                        Terms of use
                    </Link>
                    <Link className={"text-white"} href="/privacy-policy">
                        Privacy policy
                    </Link>
                </nav>
            </div>
        </footer>
    )
}
