import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';


const ShowProduct = ({ item }) => {

    const navigate = useNavigate();
    const location = useLocation();


    const { name, image, description, price, category, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart()


    const handleAddedCart = item => {
        if (user) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }

            console.log(cartItem)

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    "content-type": 'application/json'
                },

                body: JSON.stringify(cartItem)
            })

                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added to the cart successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }


                })


        }

        else {
            console.log('user not found');
            Swal.fire({
                title: 'Please Login for Added this item to cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }


    }




    return (
       <div>
          
       {/* main data */}
            < div className="card w-96 bg-base-100 shadow-xl" >
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">${price}</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div style={{ marginTop: '-30px' }} className="badge text-black badge-outline">{category}</div>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}  >
                        <button style={{ borderRadius: '80px' }} onClick={() => handleAddedCart(item)} className="btn btn-warning">Add to cart</button>
                    </div>

                </div>
            </div >
       </div>
    )
}

export default ShowProduct