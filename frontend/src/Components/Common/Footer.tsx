import { Link } from "react-router-dom";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#0b0f1a] text-gray-300">
            <div className="mx-auto max-w-7xl px-6 py-12">

                {/* Top Section */}
                <div className="grid gap-10 md:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="mb-4 h-8 w-auto brightness-110"
                        />
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Precision drones for next-gen aerial vision.
                            <br />
                            Toy drones in an affordable range.
                        </p>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-200">
                            Shop
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/shop" className="hover:text-white">All Products</Link></li>
                            <li><Link to="/popular" className="hover:text-white">Popular</Link></li>
                            <li><Link to="/smart-gadgets" className="hover:text-white">Smart Gadgets</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-200">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-200">
                            Connect
                        </h4>

                        <a
                            href="mailto:rcdrones875@gmail.com"
                            className="mb-4 block text-sm text-gray-400 hover:text-white"
                        >
                            rcdrones875@gmail.com
                        </a>

                        <div className="flex gap-4 text-gray-400">
                            <a href="#" aria-label="Instagram" className="hover:text-white transition">
                                <FiInstagram size={18} />
                            </a>
                            <a href="#" aria-label="YouTube" className="hover:text-white transition">
                                <FiYoutube size={18} />
                            </a>
                            <a href="#" aria-label="X" className="hover:text-white transition">
                                <FaXTwitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-white/10" />

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} RC Drones. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link to="/terms" className="hover:text-white">Terms</Link>
                        <Link to="/privacy" className="hover:text-white">Privacy</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
