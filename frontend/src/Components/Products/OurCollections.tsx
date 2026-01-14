const collections = [
    {
        title: "Popular Drones",
        description: "Top-performing drones trusted by creators and professionals.",
        href: "/popular",
        video: "/videos/Popular_Drones.mp4",
        big: true,
        button: "Explore Popular",
    },
    {
        title: "All Products",
        description: "Explore our full range of drones and smart tech.",
        href: "/shop",
        video: "/videos/all-products.mp4",
        big: false,
        button: "View All",
    },
    {
        title: "Smart Gadgets",
        description: "Next-gen gadgets built for modern lifestyles.",
        href: "/smart-gadgets",
        video: "/videos/smart-gadgets.mp4",
        big: false,
        button: "Discover Gadgets",
    },
];

const OurCollections = () => {
    return (
        <section className="bg-[#fdf6ee] px-4 py-12 sm:py-16 sm:px-8 lg:px-16">

            {/* Section Heading */}
            <div className="mb-10 sm:mb-14 max-w-3xl">
                <h2 className="font-zentry text-2xl sm:text-4xl lg:text-5xl text-gray-900">
                    Our Collections
                </h2>
                <p className="mt-3 font-circular-web text-sm sm:text-base text-gray-600">
                    Precision-engineered drones and smart gadgets for future.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] sm:auto-rows-[240px]">

                {collections.map((item, index) => (
                    <div
                        key={index}
                        className={`group relative overflow-hidden rounded-2xl
            ${item.big ? "sm:col-span-2 lg:row-span-2" : ""}`}
                    >
                        {/* Background Video */}
                        <video
                            src={item.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 h-full w-full object-cover
              transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />

                        {/* Content */}
                        <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-6 text-white">

                            <h3
                                className={`font-zentry
                ${item.big ? "text-xl sm:text-3xl lg:text-4xl" : "text-lg sm:text-xl"}`}
                            >
                                {item.title}
                            </h3>

                            <p
                                className={`mt-2 max-w-xs font-circular-web text-gray-200
                ${item.big ? "text-xs sm:text-base" : "text-xs sm:text-sm"}`}
                            >
                                {item.description}
                            </p>

                            {/* Button */}
                            <a
                                href={item.href}
                                className="mt-3 sm:mt-5 inline-flex w-fit items-center gap-2
                rounded-md bg-white px-3 py-1.5 text-xs font-general text-black
                sm:px-5 sm:py-2 sm:text-sm
                transition hover:bg-gray-100"
                            >
                                {item.button}
                                <span className="text-base sm:text-lg">→</span>
                            </a>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default OurCollections;
