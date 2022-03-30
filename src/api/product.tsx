import { ProductType } from '../types/product';
import { isAuthenticate } from '../utils/localStorage';
import instance from './config';


const user = isAuthenticate();
console.log(user);

export const list = () => {
    const url = `/products`;
    return instance.get(url);
};
export const read = (id: string) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const add = (product: ProductType) => {
    const url = `/products/${user?.user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const remove = (id: string) => {
    const url = `/products/${user?.user._id}/${id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const update = (product: ProductType) => {
    const url = `/products/${user?.user._id}/${product._id}`;
    return instance.put(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};