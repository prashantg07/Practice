import React, { useState } from "react";

let ShoppingCart = () => {

    let [state, setState] = useState({
        products: [
            {
                sno: 'AA001',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDoxN16m9q-QfsNWcGDMGi4cq_sTAvLezfw&s',
                name: 'Mi Watch',
                price: 1500,
                qty: 2
            },
            {
                sno: 'AA002',
                image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg',
                name: 'Samsung Watch',
                price: 1200,
                qty: 2
            },
            {
                sno: 'AA003',
                image: 'https://tse2.mm.bing.net/th?id=OIP.MA0K5qaYbpJ0EJzrPFn2MQHaJj&pid=Api',
                name: 'Apple Watch',
                price: 1800,
                qty: 2
            },
            {
                sno: 'AA004',
                image: 'https://tse2.mm.bing.net/th?id=OIP.cN-CNdniz8nNDidi5-tX9QHaIW&pid=Api',
                name: 'Boat Watch',
                price: 1300,
                qty: 2
            },
            {
                sno: 'AA005',
                image: 'https://tse2.mm.bing.net/th?id=OIP.6kyf7u8bFkL99z8vLiGgbQHaIj&pid=Api',
                name: 'LG Watch',
                price: 1900,
                qty: 2
            }
        ]
    });

    let { products } = state;  //Destructuring

    let incrQty = (productId) => {
        // filter the data for updating qty
        let items = products.map(product => {
            if (product.sno === productId) {
                return {
                    ...product,
                    qty: product.qty + 1
                }
            }
            return product;
        });

        //update the state with new data

        setState((state) => ({
            products: [...items]
        }));

    };

    //2nd ways :-
    // let incrQty = (productId) => {
    //     let items = products.map(product =>
    //         product.sno === productId ? { ...product, qty: product.qty + 1 } : product
    //     );
    //     setState({ products: items }); // ✅ Correct State Update
    // }; 

    let decrQty = (productId) => {
        // filter the data for updating qty
        let items = products.map(product => {
            if (product.sno === productId) {
                return {
                    ...product,
                    qty: product.qty - 1 > 0 ? product.qty - 1 : 1
                }
            }
            return product;
        });

        //update the state with new data

        setState((state) => ({
            products: [...items]
        }));
      
    };

    //2nd ways :-
    // let decrQty = (productId) => {
    //     let items = products.map(product =>
    //         product.sno === productId ? { ...product, qty: Math.max(product.qty - 1, 1) } : product
    //     );
    //     setState({ products: items }); // ✅ Correct State Update
    // };


    let grandTotal = () => {
        let total = 0;
        for (let product of products) {
            total += product.price * product.qty;
        }
        return total;
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Shopping Cart</p>
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
                                {
                                    products.map((product) => {
                                        return (
                                            <tr key={product.sno}>
                                                <td>{product.sno}</td>
                                                <td>
                                                    <img src={product.image} alt="" width={50} height={50} />
                                                </td>
                                                <td>{product.name}</td>
                                                <td>₹{product.price.toFixed(2)}</td>
                                                <td>
                                                    <i onClick={() => decrQty(product.sno)} className="fa fa-minus-square mx-1" />
                                                    {product.qty}
                                                    <i onClick={() => incrQty(product.sno)} className="fa fa-plus-square mx-1" />
                                                </td>
                                                <td>₹{(product.qty * product.price).toFixed(2)}</td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td colSpan={4}></td>
                                    <td>Grand Total : </td>
                                    <td>₹{grandTotal().toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShoppingCart;