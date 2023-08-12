import React, { useContext } from 'react'
import useProducts from '../../Hooks/useProducts'
import { AuthContext } from '../../Provider/AuthProvider'
import ShowProduct from '../ShowProduct/ShowProduct'
import ProductLoader from '../../Loader/ProductLoader/ProductLoader'
import { Container } from 'react-bootstrap'

const ProductTab = () => {
    const [product, loading] = useProducts()

    const silceProduct = product.slice(2)
    
    const { user } = useContext(AuthContext);



    return (
        <div style={{ marginTop: '50px' }}>
            <div>
                <h3 className="text-3xl"><b>In <span style={{ color: '#0088ff' }}>Our Store</span> </b></h3>
                <p>Explore or Store for new technologies and gadgets </p>
            </div>
           
           {
            loading? 

                   <div>
                  <ProductLoader></ProductLoader>
                   </div>

                    :
                    <>
                        <Container>
                            <div className="grid md:grid-cols-3 gap-10">

                                {
                                    silceProduct.map(item => <ShowProduct
                                        key={item._id}
                                        item={item}

                                    >


                                    </ShowProduct>


                                    )
                                }

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px' , borderRadius:'250px' }}  >
                                <button className="btn btn-primary">Load More</button>
                            </div>
                        </Container>
                    </>
           }
           


        </div>
    )
}

export default ProductTab