"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Help() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    // Disable scrolling on body when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Toggle FAQ answer visibility
  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Dinero-Bill Pay?",
      answer: "Dinero-Bill Pay is a payment platform that allows users to easily pay their utility bills, schedule future payments, and manage their financial transactions from one place."
    },
    {
      question: "What types of bills can I pay using Dinero-Bill Pay?",
      answer: "You can pay a variety of bills, including electricity, internet, water, and other utility services directly through the app."
    },
    {
      question: "How does the bill scheduling feature work?",
      answer: "With the bill scheduling feature, you can set up automatic payments for a future date. Simply select the biller, enter the amount, choose the payment date, and Dinero-Bill Pay will handle the rest."
    },
    {
      question: "Is my data secure with Dinero-Bill Pay?",
      answer: "Yes, your data is secure. We use industry-standard encryption to protect your personal information and ensure that all transactions are processed securely."
    },
    {
      question: "How do I create an account on Dinero-Bill Pay?",
      answer: "Download the Dinero-Bill Pay app from the App Store or Google Play, follow the on-screen instructions to create an account, and start managing your payments."
    },
    {
      question: "Are there any fees for using Dinero-Bill Pay?",
      answer: "Dinero-Bill Pay charges minimal transaction fees for certain payments. The exact fee will be displayed before you confirm each transaction."
    },
    {
      question: "Can I use Dinero-Bill Pay outside of Nigeria?",
      answer: "Currently, Dinero-Bill Pay is designed for Nigerian users. However, you can still access the app and make payments if you have a Nigerian bank account and are making payments to Nigerian billers."
    },
    {
      question: "What should I do if my payment fails?",
      answer: "If your payment fails, please check your internet connection or try again later. If the issue persists, contact our customer support team through the app for assistance."
    },
    {
      question: "Can I cancel a scheduled payment?",
      answer: "Yes, you can cancel or modify a scheduled payment up to 24 hours before the set payment date. After that, the payment will be processed automatically."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our customer support team directly through the app’s support section or by emailing us at support@dinero-billpay.com."
    },
    {
      question: "What payment methods are supported?",
      answer: "Dinero-Bill Pay supports a variety of payment methods, including bank transfers and debit/credit cards."
    },
    {
      question: "How do I view my payment history?",
      answer: "To view your payment history, log in to your account, go to the 'Transaction History' section, and see all your past payments and scheduled transactions."
    },
    {
      question: "Is there a minimum or maximum amount I can pay?",
      answer: "The minimum and maximum payment amounts may vary depending on the biller or service provider. These limits will be displayed during the payment process."
    },
    {
      question: "Can I get a refund if I make a mistake with my payment?",
      answer: "Refund policies depend on the service provider or biller. If you encounter an issue, please contact our support team, and we will assist you in resolving it with the relevant party."
    },
    {
      question: "How do I update my billing information or bank details?",
      answer: "To update your billing information or bank details, log in to the app, go to the 'Account Settings' section, and make the necessary changes."
    },
  ];

  return (
    <div id="faq">
      <div className={"flex flex-col gap-8 md:gap-0 justify-between w-[90vw] mx-auto lg:flex-row md:mb-12"}>
        <div>
          <div className={"py-4 md:py-8 px-3 w-full md:w-[35rem] border-[#00000033] border-t border-b"}>
            <div className={"flex items-center justify-between"}>
              <p>What is Dinero billpay?</p>
              <Image
                src={"/add.png"}
                alt='icon'
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className={"py-4 md:py-8 px-3 w-full md:w-[35rem] border-[#00000033] border-t border-b"}>
            <div className={"flex items-center justify-between"}>
              <p>Can I reverse a payment made on dinero-billpay?</p>
              <Image
                src={"/add.png"}
                alt='icon'
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className={"py-4 md:py-8 px-3 w-full md:w-[35rem] border-[#00000033] border-t border-b"}>
            <div className={"flex items-center justify-between"}>
              <p>What steps are there to reduce the issue of fraud?</p>
              <Image
                src={"/add.png"}
                alt='icon'
                width={24}
                height={24}
              />
            </div>
          </div>
          <p className={"inline-flex items-center mt-3 text-dineroBlue underline gap-[0.1rem] cursor-pointer"} onClick={() => setIsOpen(true)}>
            MORE FAQs
            <Image
              src={"/arrow-right.png"}
              alt=""
              width={14}
              height={24}
            />
          </p>
        </div>

        <div className={"w-[90vw] md:w-[26rem] md:mt-8 lg:mt-0"}>
          <h2 className={"text-4xl font-semibold mb-8"}>
            Join Our Newsletter
          </h2>
          <p className={"text-xl/6 text-[#00000033] mb-8"}>
            Follow our newsletter. We will regularly update you on our latest project and features.
          </p>
          <form action="" method="post" className={"flex gap-4 md:gap-2 flex-col md:flex-row"}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Enter Your Email'
              className={"w-full md:w-[19.3rem] px-4 py-5 rounded-lg border border-solid"}
            />
            <button type="submit" className={"w-36 rounded-lg px-6 py-5 bg-dineroBlue border-0 text-white"}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {
        isOpen &&
        <div className={"fixed inset-0 bg-[#00000033] w-screen z-50"}>
          <div className={isOpen ? "bg-[#A1DDFF] w-[90vw] mx-auto my-4 py-8 px-4 md:px-8 rounded-2xl cursor-default flex justify-between items-center" : ''}>
            <div className={"lg:w-[38rem]"}>
              <h1 className={"text-4xl/[3rem] text-[#1C1f35] mb-4 font-bold"}>Frequently Asked Questions</h1>
              <div className={"max-h-[20rem] overflow-y-scroll max-w-[40rem] custom-scrollbar"}>
                {faqData.map((faq, index) => (
                  <div key={index} className={"border-[#00000033] border-b py-1 px-3 lg:w-[35rem]"}>
                    <div className={"flex items-center justify-between"}>
                      <h3 onClick={() => toggleAnswer(index)} className={"cursor-pointer text-[#1C1F35] text-xl font-normal mb-2"}>
                        {faq.question}
                      </h3>
                      <Image
                        src={"/add.png"}
                        alt='icon'
                        width={16}
                        height={16}
                        className={"cursor-pointer"}
                        onClick={() => toggleAnswer(index)}
                      />
                    </div>
                    {
                      activeIndex === index &&
                      <p className={`text-[#666C89] `}>
                        {faq.answer}
                      </p>}
                  </div>
                ))}
              </div>
              <div className={"flex justify"}>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Close
                </button>
                <button className={"border border-white px-4 py-2 text-white rounded mt-4 ml-auto xl:hidden"} onClick={() => setIsContactOpen(true)}>
                  Contact Us
                </button>
              </div>
            </div>
            <div className={"hidden xl:block bg-dineroBlue py-[3.25rem] px-[3.75rem]"}>
              <div className={"flex items-center gap-2 bg-[#043958] w-24 h-8 pr-2 mb-6"}>
                <div className={"bg-white w-1 h-8"}></div>
                <p className={"text-white"}>Let&apos;s Talk</p>
              </div>
              <h3 className={"text-white font-medium text-xl w-[20rem] mb-6"}>Can&apos;t find answers to your question? Send us a message.</h3>
              <div className={"flex gap-3 items-center mb-6"}>
                <Image
                  src={"/phone.png"}
                  alt=''
                  width={63}
                  height={63}
                />
                <div className={"flex flex-col text-white"}>
                  <p> Have any questions</p>
                  <Link href={"tel: "}>(00) 112 365 489</Link>
                </div>
              </div>
              <nav className={"flex gap-5 items-center mb-7"}>
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
              <button className={"border border-white p-4 text-white"} onClick={() => setIsContactOpen(true)}>Contact Us</button>
            </div>
          </div>
        </div>
      }
      {
        isContactOpen &&
        <div className={"fixed inset-0 bg-[#00000033] w-screen z-50"}>
          <div className={isOpen ? "bg-[#A1DDFF] w-[90vw] mx-auto my-4 py-8 px-4 rounded-2xl items-center relative" : ''}>
            <h2 className={"text-center font-bold text-4xl text-[#1C1F35] mb-9"}>
              Send Us A Message
            </h2>
            <form action="" method="post" className={"flex flex-col items-center xl:w-[34.5rem] mx-auto mb-3 max-h-[20rem] overflow-y-scroll custom-scrollbar"}>
              <div className={"flex gap-6 mb-3 flex-col"}>
                <div className={'flex flex-col'}>
                  <label htmlFor="fullName" className={"font-bold text-sm text-[#333]"}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder='Enter full name'
                    className={"p-3 border border-[#333] rounded-lg w-[16.5rem]"}
                  />
                </div>
                <div className={'flex flex-col'}>
                  <label htmlFor="fullName" className={"font-bold text-sm text-[#333]"}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    placeholder='Enter email address'
                    className={"p-3 border border-[#333] rounded-lg w-[16.5rem]"}
                  />
                </div>
              </div>
              <div className={"flex gap-6 mb-3 flex-col"}>
                <div className={'flex flex-col'}>
                  <label htmlFor="phoneNumber" className={"font-bold text-sm text-[#333]"}>
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder='Enter phone number'
                    className={"p-3 border border-[#333] rounded-lg w-[16.5rem]"}
                  />
                </div>
                <div className={'flex flex-col'}>
                  <label htmlFor="title" className={"font-bold text-sm text-[#333]"}>
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder='Enter title'
                    className={"p-3 border border-[#333] rounded-lg w-[16.5rem]"}
                  />
                </div>
              </div>
              <div className={'flex flex-col w-[16.5rem] mb-3'}>
                <label htmlFor="message" className={"font-bold text-sm text-[#333]"}>
                  Message
                </label>
                <textarea name="message" id="message" placeholder="Type your message" className={"h-40 p-4"}></textarea>
              </div>
              <input
                type="submit"
                value="Send Message"
                className={"text-white text-xl rounded-lg bg-dineroBlue w-[16.5rem] p-2 cursor-pointer"}
              />
            </form>
            <div className={"px-10 flex justify-between w-[38rem] mx-auto"}>
              <div className={"flex gap-3 items-center"}>
                <Image
                  src={"/phone.png"}
                  alt=''
                  width={48}
                  height={48}
                />
                <div className={"flex flex-col text-[#333]"}>
                  <p> Have any other questions</p>
                  <Link href={"tel: "}>(00) 112 365 489</Link>
                </div>
              </div>
              <nav className={"flex gap-2 items-center"}>
                <Link href="/">
                  <Image
                    src={"/FB-shape.png"}
                    alt="facebook icon" width={12}
                    height={24}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src={"/Insta-shape.png"} alt="instagram icon"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src={"/Shape.png"}
                    alt="twitter icon"
                    width={28.8}
                    height={24}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src={"/Linkedin-shape.png"}
                    alt="linkedin icon"
                    width={25.2}
                    height={24}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src={"/youtube-shape.png"}
                    alt="youtube icon"
                    width={31.68}
                    height={24}
                  />
                </Link>
              </nav>
            </div>
            <button className={"mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"} onClick={() => setIsContactOpen(false)}>Close</button>
          </div>
        </div>
      }
    </div>
  )
}
