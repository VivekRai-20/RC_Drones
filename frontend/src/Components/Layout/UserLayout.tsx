import { Header } from '../Common/Header'
import Footer from '../Common/Footer'
import ScrollToTop from '../Common/ScrollToTop'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
      {/* header */}
      <Header />
      {/* Main */}
      <main className="pt-28">
        <Outlet />

      </main>
      {/* Footer */}
      <Footer />
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  )
}

export default UserLayout