import React, { useState } from "react";

let ProductItem = () => {

    let [state, setState] = useState({
        product : {
            sno : 'AA001',
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDoxN16m9q-QfsNWcGDMGi4cq_sTAvLezfw&s',
            name : 'Mi Watch',
            price : 1500,
            qty : 2
        }
    })

    let {product} = state;  //Destructuring

    let incrQty = () => {
        setState((state) => ({
            product : {
                ...state.product,   //spread operator
                qty : state.product.qty + 1
            }
        }));
    };

    let decrQty = () => {
        setState((state) => ({
            product : {
                ...state.product,   //spread operator
                qty : state.product.qty - 1 > 0 ? state.product.qty - 1 : 1
            }
        }));
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Product Item</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quia illum odit quidem voluptatum perspiciatis! Atque neque soluta dolorum id nulla. Doloribus porro iste laboriosam fugiat incidunt nesciunt, libero itaque?</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped text-center table-hover">
                            <thead className="table-dark text-white">
                                <tr>
                                    <th>SNo</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.sno}</td>
                                    <td>
                                        <img src={product.image} alt="" width={50} height={50}/>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <i onClick={decrQty} className="fa fa-minus-square mx-1"/>
                                        {product.qty}
                                        <i onClick={incrQty} className="fa fa-plus-square mx-1"/>
                                    </td>
                                    <td>{product.qty * product.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductItem;