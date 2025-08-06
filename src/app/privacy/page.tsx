'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FaShieldAlt, FaUserLock, FaEnvelope } from 'react-icons/fa'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      
      <main className="bg-gray-dark min-h-screen py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black p-8 rounded-lg border border-gray-800 mb-8">
              <div className="flex items-center mb-6">
                <FaUserLock className="text-accent h-7 w-7 mr-3" />
                <h1 className="text-3xl font-bold">
                  Privacy <span className="neon-text">Policy</span>
                </h1>
              </div>
              
              <p className="text-gray-400 mb-6">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <div className="prose prose-invert prose-sm max-w-none">
                <p>
                  At Zephryx Academy, we take your privacy seriously. This Privacy Policy describes how we collect, use, and disclose your personal information when you use our website, services, and applications (collectively, the "Services"). By using our Services, you consent to the data practices described in this policy.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">1.1 Personal Information</h3>
                <p>
                  We may collect the following types of personal information:
                </p>
                <ul className="list-disc pl-6 mt-3 mb-3 space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address.</li>
                  <li><strong>Account Information:</strong> Username, password, and profile information.</li>
                  <li><strong>Payment Information:</strong> Credit card details, billing address, and transaction history (note that payment processing is handled by our secure third-party payment processors).</li>
                  <li><strong>Educational Information:</strong> Course progress, completion status, quiz results, and certificates earned.</li>
                  <li><strong>Communication Information:</strong> Messages sent to us via contact forms, email, or other communication channels.</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">1.2 Automatically Collected Information</h3>
                <p>
                  When you use our Services, we automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 mt-3 mb-3 space-y-2">
                  <li><strong>Usage Data:</strong> Information about how you use our Services, including pages visited, time spent on pages, links clicked, and course engagement metrics.</li>
                  <li><strong>Device Information:</strong> Information about your device, including IP address, browser type, operating system, and device identifiers.</li>
                  <li><strong>Location Information:</strong> General location information based on your IP address.</li>
                  <li><strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons, and similar technologies. For more information, please see our Cookie Policy.</li>
                </ul>
                
                <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
                <p>
                  We use your personal information for the following purposes:
                </p>
                <ul className="list-disc pl-6 mt-3 mb-3 space-y-2">
                  <li><strong>Provide and Improve Services:</strong> To provide you with access to our Services, process transactions, maintain and improve our Services, and develop new features and functionality.</li>
                  <li><strong>Personalization:</strong> To personalize your experience, recommend courses, and provide tailored content.</li>
                  <li><strong>Communication:</strong> To communicate with you about your account, respond to inquiries, provide customer support, and send important notices and updates.</li>
                  <li><strong>Marketing:</strong> To send promotional communications, special offers, and information about new courses or features (you can opt out of marketing communications at any time).</li>
                  <li><strong>Analytics:</strong> To analyze usage patterns, track course engagement, and gather demographic information about our user base.</li>
                  <li><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, or other illegal activities.</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
                </ul>
                
                <h2 className="text-xl font-bold mt-8 mb-4">3. How We Share Your Information</h2>
                <p>
                  We may share your personal information with the following categories of recipients:
                </p>
                <ul className="list-disc pl-6 mt-3 mb-3 space-y-2">
                  <li><strong>Service Providers:</strong> Third-party vendors and service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting, and customer service.</li>
                  <li><strong>Business Partners:</strong> Partners who offer services jointly with us or who help us provide services to you.</li>
                  <li><strong>Legal Authorities:</strong> Law enforcement agencies, courts, or other government authorities when required by applicable laws or regulations.</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, sale of assets, or other business transaction, your information may be transferred as a business asset.</li>
                </ul>
                <p>
                  We do not sell your personal information to third parties for their marketing purposes.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure socket layer (SSL) technology, access controls, and regular security assessments.
                </p>
                <p>
                  While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">5. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                </p>
                <p>
                  To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process the information, and applicable legal requirements.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">6. Your Rights and Choices</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 mt-3 mb-3 space-y-2">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information in certain circumstances.</li>
                  <li><strong>Restriction:</strong> Request restriction of processing of your personal information.</li>
                  <li><strong>Data Portability:</strong> Request the transfer of your personal information to you or a third party.</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information.</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent where we rely on consent to process your information.</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below. We may need to verify your identity before fulfilling your request.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">7. International Data Transfers</h2>
                <p>
                  We may transfer your personal information to countries other than the country in which you reside. When we transfer personal information internationally, we implement appropriate safeguards to ensure your information receives an adequate level of protection.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
                <p>
                  Our Services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete that information.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">9. Third-Party Links and Services</h2>
                <p>
                  Our Services may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">10. Cookie Policy</h2>
                <p>
                  We use cookies and similar tracking technologies to collect and use information about you. For more information about the types of cookies we use and how to control them, please see our Cookie Policy.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated Privacy Policy on our website and updating the "Last Updated" date. Your continued use of our Services after such modifications will constitute your acknowledgment of the modified Privacy Policy.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">12. Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <p className="mt-3">
                  <strong>Email:</strong> privacy@zephryx-academy.com<br />
                  <strong>Address:</strong> Zephryx Academy Privacy Office, 123 Cyber Street, Tech City, TC 12345
                </p>
                <p className="mt-3">
                  We will respond to your request within a reasonable timeframe.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  <FaShieldAlt className="text-accent h-5 w-5" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-2">Data Protection Commitment</h3>
                  <p className="text-gray-400">
                    At Zephryx Academy, we are committed to protecting your personal information and respecting your privacy. We implement industry-standard security measures and regularly review our privacy practices to ensure the highest level of data protection.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-400 mb-4">
                Have questions about our Privacy Policy?
              </p>
              <div className="flex justify-center space-x-4">
                <Link 
                  href="/contact" 
                  className="text-accent hover:text-white transition-colors flex items-center"
                >
                  <FaEnvelope className="mr-2" /> Contact Our Privacy Team
                </Link>
                <Link 
                  href="/terms" 
                  className="text-accent hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
} 