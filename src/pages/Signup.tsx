import React from 'react'
import { SubmitHandler, useForm} from 'react-hook-form';
import { ProductType } from '../../types/product';
import { signup } from '../api/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
    name: string,
    email: string,
    password: string | number
}

const Signup = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSumbit: SubmitHandler<FormInputs> = async (user) => {
        const { data } = await signup(user);
        if(data){
            toast.success("Bạn đã đăng ký thành công, chờ 3s");
            setTimeout(() => {
                navigate('/signin')
            }, 3000)
        }
    }
  return (
    <div>
        
        <form onSubmit={handleSubmit(onSumbit)}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" {...register('name')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"  {...register('email')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"  {...register('password')} />
            </div>
            <button className="btn btn-primary">Đăng ký</button>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Signup