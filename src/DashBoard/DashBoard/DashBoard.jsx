import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaBars, FaBorderAll, FaCalendarAlt, FaHome, FaShoppingCart, FaWallet, } from 'react-icons/fa'
import './DashBoard.css'


const DashBoard = () => {
  return (
      <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
             <Outlet></Outlet>

              <label htmlFor="my-drawer-2" className="drawer-button lg:hidden , drawerButton">Menu </label>

          </div>
          <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                
                    <li><Link><FaHome></FaHome> User Home</Link></li>
                  <li><Link to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart</Link></li>
                  <li><Link><FaWallet></FaWallet> Payment History</Link></li>
                  <li><Link><FaCalendarAlt></FaCalendarAlt> Reservation</Link></li>
                  <div className="divider"></div>
                  <li><Link to="/"><FaHome></FaHome>Home</Link></li>
                  <li><Link to='/products'><FaBars></FaBars> Featured Products</Link></li>
                  <li><Link to='/order'> <FaBorderAll></FaBorderAll>Order</Link></li>
              </ul>

          </div>
      </div>
  )
}

export default DashBoard