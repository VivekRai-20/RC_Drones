import TopBar from '../Layout/Topbar'
import Navbar from './Navbar'

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#fdf6ee]/90 backdrop-blur">
      {/* Topbar */}
      <TopBar />
      {/* Navbar */}
      <Navbar />
      {/* Cart Drawer */}
    </div>
  )
}
