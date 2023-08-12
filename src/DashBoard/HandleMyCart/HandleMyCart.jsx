import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'
import useCart from '../../Hooks/useCart';


const HandleMyCart = ({ singleCart , index}) => {

    const [cart, refetch] = useCart();


    let result = cart.reduce((sum, item) => {
        return sum + item.price;
    }, 0);





    const handleDelete = (singleCart) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })

            // Delete Operation

            .then((result) => {
                if (result.isConfirmed) {

                    fetch(`http://localhost:5000/carts/${singleCart._id}`, {
                        method: 'DELETE'
                    })

                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                // When Delete Done
                                refetch()
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })

    }


  return (
      <tr>
          <th>
              <label>
{index+1}
              </label>
          </th>
          <td>
              <div className="flex items-center space-x-3">
                  <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                          <img src={singleCart.image}/>
                      </div>
                  </div>
                  <div>
                      <div className="font-bold">{singleCart.name}</div>
                      
                  </div>
              </div>
          </td>
          <td>
              ${singleCart.price}
          </td>
         
          <th>
              <button onClick={()=> handleDelete(singleCart)} className="btn"><FaTrashAlt></FaTrashAlt></button>
          </th>
      </tr>
  )
}

export default HandleMyCart

// 