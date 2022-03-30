import React from 'react'
import { SubmitHandler, useForm} from 'react-hook-form';
import { ProductType } from '../../types/product';
import { signin, signup } from '../api/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
    email: string,
    password: string | number
}

const Signin = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSumbit: SubmitHandler<FormInputs> = async (user) => {
        const { data } = await signin(user);
        if(data){
            toast.success("Bạn đã đăng nhập thành công, chờ 3s");
            setTimeout(() => {
                navigate('/')
                localStorage.setItem("user",JSON.stringify(data))
            }, 3000)
        }
    }
  return (
    <div>
        
        <form onSubmit={handleSubmit(onSumbit)}>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"  {...register('email')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"  {...register('password')} />
            </div>
            <button className="btn btn-primary">Đăng nhập</button>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Signin