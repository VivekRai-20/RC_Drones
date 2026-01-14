import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="w-full border-b border-white/10 bg-[#0b0f1a] px-6 py-2 text-[13px] text-slate-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Left – Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="transition hover:text-indigo-400 cursor-pointer">
            <FaInstagram size={15} />
          </a>
          <a href="#" className="transition hover:text-indigo-400 cursor-pointer">
            <FaYoutube size={15} />
          </a>
          <a href="#" className="transition hover:text-indigo-400 cursor-pointer">
            <FaXTwitter size={14} />
          </a>
        </div>

        {/* Center – Tagline */}
        <div className="hidden md:block text-center text-[12px] tracking-wide opacity-80">
          <p className="font-circular-web">Smart Toy Drones for Every Pilot</p>
          <p className="font-circular-web">Toy Drones • Powerful • Affordable</p>
        </div>

        {/* Right – Email */}
        <div className="flex items-center gap-2">
          <MdEmail size={16} />
          <span className="hover:text-indigo-400 transition">
            rcdrones875@gmail.com
          </span>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
