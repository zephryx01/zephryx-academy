import Link from 'next/link'
import { FaShieldAlt, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <FaShieldAlt className="text-accent text-2xl" />
              <span className="text-xl font-bold neon-text">ZEPHRYX</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Empowering cybersecurity professionals with cutting-edge training and resources.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-accent transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-accent transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/tools" className="text-gray-400 hover:text-accent transition-colors">
                  Security Tools
                </Link>
              </li>
              <li>
                <Link href="/resources/cheatsheets" className="text-gray-400 hover:text-accent transition-colors">
                  Cheat Sheets
                </Link>
              </li>
              <li>
                <Link href="/resources/labs" className="text-gray-400 hover:text-accent transition-colors">
                  Practice Labs
                </Link>
              </li>
              <li>
                <Link href="/resources/videos" className="text-gray-400 hover:text-accent transition-colors">
                  Video Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Email: contact@zephryx.com
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-accent transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {currentYear} Zephryx Academy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 