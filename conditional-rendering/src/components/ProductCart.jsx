import React, { useState } from "react";
import ProductService from "../services/ProductService";

let ProductCart = () => {

    let [state, setState] = useState({              //use Service
        products: ProductService.getAllProducts()   
    });

    // let [state, setState] = useState({
    //     products: [
    //         {
    //             sno: 'AA001',
    //             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDoxN16m9q-QfsNWcGDMGi4cq_sTAvLezfw&s',
    //             name: 'Mi Watch',
    //             price: 1500,
    //             qty: 25
    //         },
    //         {
    //             sno: 'AA002',
    //             image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg',
    //             name: 'Samsung Watch',
    //             price: 1200,
    //             qty: 15
    //         },
    //         {
    //             sno: 'AA003',
    //             image: 'https://tse2.mm.bing.net/th?id=OIP.MA0K5qaYbpJ0EJzrPFn2MQHaJj&pid=Api',
    //             name: 'Apple Watch',
    //             price: 1800,
    //             qty: 3
    //         },
    //         {
    //             sno: 'AA004',
    //             image: 'https://tse2.mm.bing.net/th?id=OIP.cN-CNdniz8nNDidi5-tX9QHaIW&pid=Api',
    //             name: 'Boat Watch',
    //             price: 1300,
    //             qty: 0
    //         },
    //         {
    //             sno: 'AA005',
    //             image: 'https://tse2.mm.bing.net/th?id=OIP.6kyf7u8bFkL99z8vLiGgbQHaIj&pid=Api',
    //             name: 'LG Watch',
    //             price: 1900,
    //             qty: 12
    //         }
    //     ]
    // });

    let { products } = state;

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Product cart</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla architecto dolorem totam modi vel delectus mollitia maxime? A reiciendis vitae nostrum sint porro! At culpa maiores repellat accusamus mollitia.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {
                            products.map((product) => {
                                return(
                                    <div key={product.sno} className="card shadow-lg mt-3">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-md-4">
                                                    <img src={product.image} alt="" className="img-fluid"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <h5 className="display-4">{product.name}</h5>
                                                    <h6 className="display-6">&#8377;{product.price.toFixed(2)}</h6>
                                                    <h6 className="display-6">
                                                        {
                                                            product.qty >= 10 && <span className="text-success">Available</span>
                                                        }
                                                        {
                                                            product.qty <= 10 && product.qty >=1 && <span className="text-warning">Almost Out-of Stock</span>
                                                        }
                                                        {
                                                            product.qty === 0 && <span className="text-danger">Out Of Stock</span>
                                                        }
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductCart;


