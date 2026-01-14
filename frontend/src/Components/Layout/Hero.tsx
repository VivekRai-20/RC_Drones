import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/RC_drones_Hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* RC DRONES - Top Left */}
      <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
        <p className="font-zentry text-white/80
          text-2xl sm:text-4xl lg:text-6xl">
          RC DRONES
        </p>
      </div>

      {/* Content - Bottom Right */}
      <div className="relative z-10 flex h-full items-end justify-end">
        <div className="mb-10 mr-4 max-w-full text-right text-white
          sm:mb-20 sm:mr-16 sm:max-w-3xl">

          <h1 className="mb-4 font-zentry leading-[1.1]
            text-xl sm:text-3xl lg:text-5xl">
            Precision Drones <br />
            for Next-Gen Vision
          </h1>

          <p className="mb-6 ml-auto max-w-xs text-xs
            sm:mb-8 sm:max-w-xl sm:text-base
            font-general text-gray-200">
            High-performance drones and affordable toy drones built for
            exploration, innovation, and fun.
          </p>

          <div className="flex justify-end gap-2 sm:gap-4">
            <Link
              to="/shop"
              className="rounded-md bg-white px-3 py-2 text-xs font-medium text-black
              sm:px-6 sm:py-2.5 sm:text-sm
              hover:bg-gray-100 transition cursor-pointer"
            >
              Shop Now
            </Link>

            <Link
              to="/popular"
              className="rounded-md border border-white/40 px-3 py-2 text-xs
              sm:px-6 sm:py-2.5 sm:text-sm
              text-white hover:bg-white hover:text-black transition cursor-pointer"
            >
              Popular
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
