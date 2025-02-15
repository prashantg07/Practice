import React from "react";
import image1 from '../assets/card_1.jpg';
import image2 from '../assets/card_2.jpg';
import image3 from '../assets/card_3.jpg';
import image4 from '../assets/card_4.jpg';

let CountryCard = () => {
    return(
        <React.Fragment>
            <div className="container  mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image1} alt="" />
                            <div className="card-body">
                                <h3>India</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa deserunt inventore dolor! Pariatur enim labore, nesciunt laboriosam id eum?</p>
                                <button className="btn btn-dark btn-sm">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image2} alt="" />
                            <div className="card-body">
                                <h3>Russia</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa deserunt inventore dolor! Pariatur enim labore, nesciunt laboriosam id eum?</p>
                                <button className="btn btn-dark btn-sm">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image3} alt="" />
                            <div className="card-body">
                                <h3>London</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa deserunt inventore dolor! Pariatur enim labore, nesciunt laboriosam id eum?</p>
                                <button className="btn btn-dark btn-sm">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image4} alt="" />
                            <div className="card-body">
                                <h3>Australia</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa deserunt inventore dolor! Pariatur enim labore, nesciunt laboriosam id eum?</p>
                                <button className="btn btn-dark btn-sm">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CountryCard;