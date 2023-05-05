import React from 'react'
import { useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {FaRegEnvelope}  from "react-icons/fa";
const schema = yup.object().shape({
    name:yup.string().min(4).required(),
    phone:yup.string().required().min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits'),
    email: yup.string().email().required(),
  }).required();
  type FormData = yup.InferType<typeof schema>;

const HomeForm = () => {
    let [success, setSuccess] = React.useState(false);
    let [loading, setLoading] = React.useState(false);
    let [message, setMessage] = React.useState('');
    const navigate = useNavigate();
  
    const { register,  resetField, handleSubmit, formState: { errors, isSubmitted, isSubmitting } } = useForm<FormData>({
      resolver: yupResolver(schema)
    });
    const onSubmit = (data: FormData) => {
        console.log(data);
  
        let handleSubmit = async ()=>{
           
            try {
              const url = "https://api.escuelajs.co/api/v1/auth/login";
              const options = {
                  method: "POST",
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(data)
              }
  
              const response = await fetch(url, options);
              const result = await response.json()
  
              console.log("res",result);
              if(result.statusCode === 401) {
                  setMessage(result.message);
                  resetField("email");
                  resetField("name");
                  resetField("phone");
              }else{
                  setMessage('Dang nhap thanh cong');
                  resetField("email");
                  resetField("name");
                  resetField("phone");
                  navigate("/"); 
              }
      
          } catch (error) {
             console.log(error);
          }
        }
        handleSubmit();
       
    }
        
  
    return (
      <form className="subscribe_form " action=""  onSubmit={handleSubmit(onSubmit)}>
        <div className='subscribe_formflex  flex'>
         <div>
        <input  required placeholder='Your name' {...register("name")} type='text' />
        <p>{errors.name?.message}</p>
        </div>
        <div>
        <input  required  placeholder='Your Mobile phone' {...register("phone")} type='text'/>
        <p>{errors.phone?.message}</p>
        </div>
        <div>
 
        <input   required placeholder='Your email address' {...register("email")} type='email'/>
        <p>{errors.email?.message}</p>
        </div>
        <div>
  
        <button type="submit" className="button" >
              <FaRegEnvelope/>Subscribe email list
         </button>
         </div>
         </div>
        {loading && <div>Loading....</div>}
        {success && <div>Da Post thanh cong !....</div>}
      </form>
    )
}

export default HomeForm
