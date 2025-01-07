import React from 'react'
import Link from 'next/link'

export default function Terms() {
    return (
        <>
            <div className={"relative mb-12"}>
                <div className={"bg-gradient-to-r from-[#A1DDFF] to-[#0C6599] relative rounded-3xl w-[90vw] mx-auto flex"}>
                    <div className={"bg-cover mix-blend-multiply rounded-3xl h-[26rem] w-full bg-center bg-[url('/terms.jpg')]"}></div>
                </div>

                <h1 className={"absolute top-24 w-full text-white text-[5rem] text-center md:top-40"}>Terms of Use</h1>
            </div>

            <h3 className={"w-[90vw] mx-auto mb-4 text-3xl font-bold"}>Acceptance of Terms</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl"}>
                <li>
                    By accessing or using the Dinero-BillPay website and app, you agree to comply with these Terms and any applicable laws and regulations.
                </li>
                <li>
                    If you do not agree with these Terms, you must not use our services.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-3xl font-bold"}>Use Of Services</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl"}>
                <li>
                    <span className={"font-bold"}>Eligibility: </span>
                    You must be at least 18 years old to use our services. By using Dinero-BillPay, you represent that you meet this age requirement.
                </li>
                <li>
                    <span className={"font-bold"}>Account Registration: </span>
                    You must create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for any activities under your account.
                </li>
                <li>
                    <span className={"font-bold"}>Prohibited Activities: </span>
                    You agree not to use our services for any unlawful purposes, including but not limited to money laundering, fraud, or unauthorised access to other accounts.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-3xl font-bold"}>Payments and Transactions</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl"}>
                <li>
                    <span className={"font-bold"}>Service Fees: </span>
                    Dinero-BillPay may charge fees for certain transactions. These fees will be clearly outlined before you complete any transaction.
                </li>
                <li>
                    <span className={"font-bold"}>Payment Methods: </span>
                    You are responsible for providing accurate payment information. We are not liable for any issues arising from incorrect payment details.
                </li>
                <li>
                    <span className={"font-bold"}>Refund: </span>
                    Refunds for transactions made through Dinero-BillPay are subject to our  <span className={"font-bold"}>Refund Policy</span>, which is available on our website. Please review the policy before making a payment.
                </li>
                <li>
                    <span className={"font-bold"}>Transaction Limits: </span>
                    We may impose limits on the amount you can pay or transfer through our services based on regulatory requirements or at our discretion.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-3xl font-bold"}>Scheduling Bill Payments</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl"}>
                <li>
                    <span className={"font-bold"}>Automated Payments: </span>
                    Dinero-BillPay offers a feature that allows users to schedule bill payments. You are responsible for ensuring sufficient funds are available in your account at the time of the scheduled payment.
                </li>
                <li>
                    <span className={"font-bold"}>Failed Payments: </span>
                    Dinero-BillPay is not liable for any consequences arising from failed scheduled payments due to insufficient funds or incorrect payment details.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-3xl font-bold"}>Intellectual Property</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl"}>
                <li>
                    <span className={"font-bold"}>Ownership: </span>
                    All content, logos, and trademarks used on the Dinero-BillPay platform are owned by Dinero or licensed to us. You may not use, copy, or reproduce any part of our services without our permission.
                </li>
                <li>
                    <span className={"font-bold"}>User Content: </span>
                    By submitting any content through our services, you grant us a non-exclusive, royalty-free, worldwide license to use, modify, and display such content to provide our services.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-3xl font-bold"}>Data Privacy</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl"}>
                <li>
                    <span className={"font-bold"}>Data Collection: </span>
                    Your use of Dinero-BillPay is subject to our <span className={"font-bold"}>Privacy Policy</span>, which outlines how we collect, use, and protect your data.
                </li>
                <li>
                    <span className={"font-bold"}>Third-Party Services: </span>
                    We may use third-party service providers for payment processing or other services. We are not responsible for the privacy practices of these third parties.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-3xl font-bold"}>Limitation of Liability</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl"}>
                <li>
                    Dinero-BillPay will not be liable for any direct, indirect, incidental, or consequential damages arising out of or related to the use or inability to use our services, even if we have been advised of the possibility of such damages.
                </li>
                <li>
                    We do not guarantee the continuous availability of our services, and we reserve the right to suspend or terminate the services at any time for maintenance or other reasons.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-3xl font-bold"}>Indemification</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl"}>
                <li>
                    You agree to indemnify, defend, and hold Dinero-BillPay and its affiliates harmless from any claims, damages, losses, or liabilities arising out of your use of our services, violation of these Terms, or infringement of any third-party rights.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-3xl font-bold"}>Termination</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl"}>
                <li>
                    <span className={"font-bold"}>Account Suspension: </span>
                    We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent or illegal activities.
                </li>
                <li>
                    <span className={"font-bold"}>Termination by User: </span>
                    You may terminate your account at any time by contacting our support team. Upon termination, your right to use our services will cease immediately.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-3xl font-bold"}>Changes to These Terms</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl"}>
                <li>
                    We may update these Terms from time to time. The updated version will be posted on our website, and the changes will become effective immediately upon posting.
                </li>
                <li>
                    Your continued use of our services after any changes constitute your acceptance of the new Terms.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-3xl font-bold"}>Governing Law</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl"}>
                <li>
                    These Terms and any disputes arising from your use of the Dinero-BillPay services are governed by the laws of [Your Country/Nigeria], without regard to its conflict of laws principles.
                </li>
            </ul>

            <h3 className={"w-[90vw] mx-auto mb-4 text-3xl font-bold"}>Contact Us</h3>
            <ul className={"w-[80vw] mx-auto mb-8 text-xl"}>
                <li>
                    If you have any questions or concerns about these Terms or our services, please contact us at: <Link href="mailto:info@dinero-billpay.com" className={"underline"}>info@dinero-billpay.com</Link>
                </li>
            </ul>
            {/* <Footer /> */}
        </>
    )
}


{
    /* 
        1.Thank God for his goodness, mercy, faithfulness, support. 
        2. Father, please glorify your name by making me completely whole. 
        3. Father, I will be your treasurer.Please give me more than I can ever need. 
        4. Father, give me the kind of joy that will make me roll on the ground. 
        5. Father, please give me remarkable, pleasant surprises throughout this year. 
        6. Father, please perfect that which concerns me this year. 
        7. Father, please pour fresh oil on the G.O and all the pastors 
        8. Father, please all that I need to serve you more than ever before give unto me 
        9. Personal request
    */
}