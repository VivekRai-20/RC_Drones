import { Link } from "react-router-dom";

const Privacy = () => {
    return (
        <section className="min-h-screen bg-[#fdf6ee] px-4 py-12 sm:py-16 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-8 sm:mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center text-sm text-gray-600 hover:text-black transition cursor-pointer mb-8"
                    >
                        ← Back to Home
                    </Link>
                    <h1 className="font-zentry text-2xl sm:text-4xl lg:text-5xl text-gray-900">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-8 text-gray-700">
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                        <p className="leading-relaxed">
                            We collect information from you when you visit our website, register on our site, or make a purchase.
                            The information we collect may include:
                        </p>
                        <ul className="mt-4 ml-6 list-disc space-y-2">
                            <li>Name, email address, and contact information</li>
                            <li>Billing and shipping address</li>
                            <li>Payment information (processed securely through payment gateways)</li>
                            <li>Device information and browsing behavior</li>
                            <li>Preferences and communication preferences</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                        <p className="leading-relaxed">
                            We use the information we collect to provide, maintain, and improve our services:
                        </p>
                        <ul className="mt-4 ml-6 list-disc space-y-2">
                            <li>Process and fulfill your orders</li>
                            <li>Provide customer support and respond to inquiries</li>
                            <li>Send transactional emails and order updates</li>
                            <li>Personalize your shopping experience</li>
                            <li>Improve our website and product offerings</li>
                            <li>Communicate about promotions and new products (with your consent)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
                        <p className="leading-relaxed">
                            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
                            except as described in this policy:
                        </p>
                        <ul className="mt-4 ml-6 list-disc space-y-2">
                            <li>Trusted service providers who assist in operating our website</li>
                            <li>Payment processors for secure transaction handling</li>
                            <li>Shipping partners for order fulfillment</li>
                            <li>When required by law or to protect our rights</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                        <p className="leading-relaxed">
                            We implement appropriate technical and organizational measures to protect your personal information against
                            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
                            the internet or method of electronic storage is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Tracking</h2>
                        <p className="leading-relaxed">
                            Our website uses cookies to enhance your experience. Cookies are small files stored on your device
                            that help us analyze website traffic, personalize content, and remember your preferences.
                            You can control cookie settings through your browser.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Links</h2>
                        <p className="leading-relaxed">
                            Our website may contain links to third-party websites. We are not responsible for the privacy
                            practices of these external sites. We encourage you to review the privacy policies of any
                            third-party sites you visit.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">7. User Rights</h2>
                        <p className="leading-relaxed">
                            You have the right to:
                        </p>
                        <ul className="mt-4 ml-6 list-disc space-y-2">
                            <li>Access and update your personal information</li>
                            <li>Request deletion of your account and data</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Request a copy of your personal data</li>
                            <li>Object to processing of your personal information</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
                        <p className="leading-relaxed">
                            Our services are not intended for children under 13 years of age. We do not knowingly
                            collect personal information from children under 13. If you believe we have collected such
                            information, please contact us immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
                        <p className="leading-relaxed">
                            We may update this privacy policy from time to time. We will notify you of any changes
                            by posting the new policy on this page and updating the "Last updated" date.
                            Your continued use of our services constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
                        <p className="leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="mt-4 space-y-2">
                            <p>
                                Email:{" "}
                                <a href="mailto:rcdrones875@gmail.com" className="text-black hover:underline cursor-pointer">
                                    rcdrones875@gmail.com
                                </a>
                            </p>
                            <p>Phone: +91-XXXXXXXXXX</p>
                            <p>Address: RC Drones, [Your Address], India</p>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-black/10">
                    <p className="text-center text-sm text-gray-600">
                        © {new Date().getFullYear()} RC Drones. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
