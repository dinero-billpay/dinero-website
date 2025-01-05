import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
    return (
        <>
            <div className={"relative mb-12"}>
                <div className={"bg-gradient-to-r from-[#A1DDFF] to-[#0C6599] relative rounded-3xl w-[90vw] mx-auto flex"}>
                    <div className={"bg-cover mix-blend-multiply rounded-3xl h-[26rem] w-full bg-center bg-[url('/terms.jpg')]"}></div>
                </div>

                <h1 className={"absolute top-24 w-full text-white text-[4rem] text-center md:top-40"}>Privacy Policy</h1>
            </div>

            <h3 className={"w-[90vw] mx-auto mb-4 text-2xl font-bold"}>Information We Collect</h3>
            <p className={"w-[90vw] text-xl mx-auto mb-4"}>When you use our services, we may collect the following types of information:</p>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl/6"}>
                <li>
                    <span className={"font-bold"}>Personal Information: </span>
                    This may include your name, email address, phone number, and payment information when you register an account or make a transaction.
                </li>
                <li>
                    <span className={"font-bold"}>Financial Information: </span>
                    Information related to payments, billing, and transactions made through our platform.
                </li>
                <li>
                    <span className={"font-bold"}>Usage Data: </span>
                    Information about your interactions with our website and app, including IP address, browser type, access times, and pages viewed.
                </li>
                <li>
                    <span className={"font-bold"}>Device Information: </span>
                    Details about the device you use to access our services, such as your mobile device ID, operating system, and device type.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-2xl font-bold"}>How We Use Your Information</h3>
            <p className={"w-[90vw] text-xl mx-auto mb-4"}>We use the information we collect in the following ways:</p>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl/6"}>
                <li>
                    <span className={"font-bold"}>To Provide Our Services: </span>
                    Processing your transactions, managing your account, and providing customer support
                </li>
                <li>
                    <span className={"font-bold"}>To Improve Our Services: </span>
                    Analyzing usage patterns to improve user experience and optimize the performance of our website and app.
                </li>
                <li>
                    <span className={"font-bold"}>To Communicate With You: </span>
                    Sending you updates, notifications, and promotional materials related to our services.
                </li>
                <li>
                    <span className={"font-bold"}>For Security and Fraud Prevention: </span>
                    Protecting against unauthorized transactions, security breaches, and other potentially illegal activities.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-2xl font-bold"}>Sharing Your Information</h3>
            <p className={"w-[90vw] text-xl mx-auto mb-4"}>We may share your information with:</p>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl/6"}>
                <li>
                    <span className={"font-bold"}>Service Providers: </span>
                    Third-party vendors and service providers who help us provide our services, such as payment processors, data analysis, and customer support.
                </li>
                <li>
                    <span className={"font-bold"}>Legal Compliance: </span>
                    If required by law or to respond to legal requests, we may share your information with government authorities.
                </li>
                <li>
                    <span className={"font-bold"}>Business Transfers: </span>
                    In the event of a merger, sale, or transfer of our assets, your information may be transferred to the acquiring company.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-2xl font-bold"}>Data Security</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl/6"}>
                <li>
                    We prioritize the security of your personal information. We implement industry-standard security measures to protect your data against unauthorized access, disclosure, or alteration. However, no method of transmission over the Internet is 100% secure, so we cannot guarantee its absolute security.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-2xl font-bold"}>Cookies and Tracking Technologies</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl/6"}>
                <li>
                    We use cookies and similar tracking technologies to collect information about your interactions with our website. This helps us enhance your user experience and provide personalized content. You can control cookies through your browser settings.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-2xl font-bold"}>Your Rights</h3>
            <p className={"w-[90vw] text-xl mx-auto mb-4"}>You have the right to:</p>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl/6"}>
                <li>
                    <span className={"font-bold"}>Access and Update Your Information: </span>
                    Request access to your personal information or update inaccurate details.
                </li>
                <li>
                    <span className={"font-bold"}>Request Deletion: </span>
                    Ask us to delete your data where applicable.
                </li>
                <li>
                    <span className={"font-bold"}>Opt-Out of Marketing: </span>
                    You can opt out of receiving promotional communications from us at any time.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-2xl font-bold"}>Retention of Data</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl/6"}>
                <li>
                    We retain your data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-2xl font-bold"}>Changes to This Privacy Policy</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl/6"}>
                <li>
                    We may update this Privacy Policy from time to time. Any changes will be reflected on this page, and we encourage you to review this policy periodically.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-2xl font-bold"}>Contact Us</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl/6"}>
                <li>
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at: <Link href="mailto:info@dinero-billpay.com" className={"underline"}>info@dinero-billpay.com</Link>
                </li>
            </ul>
        </>
    )
}
