import { Link } from "react-router-dom";

const Terms = () => {
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
                        Terms and Conditions
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-8 text-gray-700">
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="leading-relaxed">
                            By accessing and using RC Drones, you accept and agree to be bound by the terms and provision of this agreement.
                            If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                        <p className="leading-relaxed">
                            Permission is granted to temporarily download one copy of the materials on RC Drones for personal,
                            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
                            and under this license you may not:
                        </p>
                        <ul className="mt-4 ml-6 list-disc space-y-2">
                            <li>modify or copy the materials</li>
                            <li>use the materials for any commercial purpose or for any public display</li>
                            <li>attempt to reverse engineer any software contained on RC Drones</li>
                            <li>remove any copyright or other proprietary notations from the materials</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">3. Product Information and Pricing</h2>
                        <p className="leading-relaxed">
                            All drone products and accessories displayed on RC Drones are subject to availability.
                            Prices are listed in Indian Rupees (₹) and are inclusive of applicable taxes.
                            We reserve the right to modify prices or discontinue products without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">4. Warranty and Returns</h2>
                        <p className="leading-relaxed">
                            All drones come with a standard manufacturer warranty. Warranty claims must be made within
                            the warranty period with proof of purchase. Returns are accepted within 7 days of delivery
                            for unused products in original packaging.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">5. Shipping and Delivery</h2>
                        <p className="leading-relaxed">
                            We offer shipping across India. Standard delivery takes 5-7 business days.
                            Express shipping options are available at additional cost. Delivery times may vary
                            based on location and product availability.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">6. User Accounts</h2>
                        <p className="leading-relaxed">
                            You are responsible for maintaining the confidentiality of your account and password.
                            You agree to accept responsibility for all activities that occur under your account or password.
                            RC Drones reserves the right to refuse service, terminate accounts, or remove or edit content
                            at our sole discretion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                        <p className="leading-relaxed">
                            In no event shall RC Drones, its directors, employees, partners, agents, suppliers, or affiliates
                            be liable for any indirect, incidental, special, consequential, or punitive damages, including
                            without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
                        <p className="leading-relaxed">
                            These terms and conditions are governed by and construed in accordance with the laws of India
                            and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
                        <p className="leading-relaxed">
                            RC Drones reserves the right to revise these terms and conditions at any time without notice.
                            By using this website, you are agreeing to be bound by the then current version of these
                            terms and conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
                        <p className="leading-relaxed">
                            Questions about the Terms and Conditions should be sent to us at
                            <a href="mailto:rcdrones875@gmail.com" className="text-black hover:underline cursor-pointer">
                                rcdrones875@gmail.com
                            </a>
                        </p>
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

export default Terms;
