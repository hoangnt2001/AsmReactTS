import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/product';
import { ProductType } from '../types/product';

type Props = {}

const ProductDetail = (props: Props) => {
    const { id } = useParams();
    const [product,setProduct] = useState<ProductType>();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            setProduct(data);
        }
        getProduct();
    }, [id])
  return (
    <div>{product?.name}</div>
  )
}

export default ProductDetail