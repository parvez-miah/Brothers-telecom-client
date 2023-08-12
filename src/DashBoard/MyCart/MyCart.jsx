import React, { useContext } from 'react'
import useCart from '../../Hooks/useCart'
import { FaTrashAlt } from 'react-icons/fa'
import './MyCart.css'
import { AuthContext } from '../../Provider/AuthProvider'
import Swal from 'sweetalert2'
import HandleMyCart from '../HandleMyCart/HandleMyCart'



const MyCart = () => {

  const [cart] = useCart();
  const { user } = useContext(AuthContext);
  const { menuItemId } = cart;
  console.log(menuItemId)

  return (
    <div>

      <div>


      </div>


      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>


            {
              cart.map((singleCart, index) => <HandleMyCart
                key={singleCart._id}
                singleCart={singleCart}
                index={index}


              >

              </HandleMyCart>)
            }


          </tbody>
        </table>
      </div>
    </div>

  )
}

export default MyCart