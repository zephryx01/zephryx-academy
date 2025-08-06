'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      
      <main className="bg-gray-dark min-h-screen py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black p-8 rounded-lg border border-gray-800 mb-8">
              <h1 className="text-3xl font-bold mb-6">
                Terms of <span className="neon-text">Service</span>
              </h1>
              
              <p className="text-gray-400 mb-6">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <div className="prose prose-invert prose-sm max-w-none">
                <p>
                  Welcome to Zephryx Academy. These Terms of Service ("Terms") govern your access to and use of the Zephryx Academy website, services, and applications (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services. We may modify these Terms at any time, and such modifications shall be effective immediately upon posting on our website. Your continued use of the Services following any modification constitutes your acceptance of the modified Terms.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">2. Registration and Account Security</h2>
                <p>
                  To access certain features of the Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account or any other breach of security.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">3. Subscription and Payment</h2>
                <p>
                  Zephryx Academy offers various subscription plans. By subscribing to a paid plan, you agree to pay the applicable fees according to the pricing and terms presented to you at the time of purchase. All subscription fees are non-refundable except as expressly stated in these Terms or as required by applicable law.
                </p>
                <p>
                  Subscriptions automatically renew at the end of each billing period unless canceled before the renewal date. You can cancel your subscription at any time through your account settings. Upon cancellation, your subscription will remain active until the end of the current billing period, after which it will not renew.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">4. Content and Intellectual Property</h2>
                <p>
                  All content included on the Services, such as text, graphics, logos, images, videos, and software, is the property of Zephryx Academy or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the content on our Services without our prior written consent.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">5. User Conduct</h2>
                <p>
                  You agree not to use the Services in any way that:
                </p>
                <ul className="list-disc pl-6 mt-3 mb-3 space-y-2">
                  <li>Violates any applicable law or regulation</li>
                  <li>Infringes the rights of any third party, including intellectual property rights</li>
                  <li>Harasses, threatens, or intimidates any other user</li>
                  <li>Attempts to gain unauthorized access to any part of the Services</li>
                  <li>Interferes with the proper functioning of the Services</li>
                  <li>Engages in any fraudulent or deceptive activity</li>
                  <li>Uploads or transmits any viruses or malicious code</li>
                </ul>
                
                <h2 className="text-xl font-bold mt-8 mb-4">6. User Content</h2>
                <p>
                  You may be permitted to post, upload, or submit content through the Services, such as forum posts, comments, or project submissions ("User Content"). You retain ownership of your User Content, but you grant Zephryx Academy a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in connection with providing the Services.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">7. Disclaimer of Warranties</h2>
                <p>
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
                <p>
                  IN NO EVENT SHALL ZEPHRYX ACADEMY, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY: (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT; (II) PERSONAL INJURY OR PROPERTY DAMAGE RELATED TO YOUR USE OF THE SERVICES; (III) UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN; (IV) INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES; (V) BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES; AND/OR (VI) ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">9. Indemnification</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless Zephryx Academy, its affiliates, officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Services; (ii) your violation of any term of these Terms; (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that your User Content caused damage to a third party.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">10. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">11. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Zephryx Academy is established, without regard to its conflict of law provisions. Any legal action or proceeding relating to your access to or use of the Services shall be instituted exclusively in the courts located in that jurisdiction.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">12. Changes to Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">13. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="mt-3">
                  <strong>Email:</strong> legal@zephryx-academy.com<br />
                  <strong>Address:</strong> Zephryx Academy Legal Department, 123 Cyber Street, Tech City, TC 12345
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-400 mb-4">
                Have questions about our Terms of Service?
              </p>
              <div className="flex justify-center space-x-4">
                <Link 
                  href="/contact" 
                  className="text-accent hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-accent hover:text-white transition-colors"
                >
                  Privacy Policy
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