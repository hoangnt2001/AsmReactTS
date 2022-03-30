import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/product';

type ProductManagerProps = {
    products: ProductType[],
    onRemove: (id: number | string) => void
}

const ProductManager = (props: ProductManagerProps) => {
    
  return (
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                
            </thead>
            <tbody>
                {props.products?.map((product,index) => {
                    return  <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                            <Link to={`/admin/products/${product._id}/edit`} className="btn btn-primary">Update</Link>
                            <button onClick={() => props.onRemove(product._id)}>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
        
    </div>
  )
}

export default ProductManager