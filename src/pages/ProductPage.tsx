import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../types/product";

type ProductPageProps = {
    products: ProductType[];
};

const ProductPage = (props: ProductPageProps) => {
    return (
        <div className="row">
            {props.products?.map((product, index) => {
                return  <div key={index} className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.price}
                                    </p>
                                    <Link to={`/products/${product._id}`} className="btn btn-primary">
                                        Chi tiết
                                    </Link>
                                </div>
                            </div>
                        </div>
            })}
           
        </div>
    );
};

export default ProductPage;
