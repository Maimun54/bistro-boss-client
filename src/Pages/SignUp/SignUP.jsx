import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/Sociallogin";


const SignUP = () => {
  const axiosPublic =useAxiosPublic()
    const {createUser,updateUserProfile,googleSignIn}=useContext(AuthContext)
    const {
register,handleSubmit, reset,formState: { errors },} = useForm()
const navigate =useNavigate()
const onSubmit= data => {
    console.log(data)
    createUser(data.email,data.password)
    .then(res=>{
        console.log(res.user)
        updateUserProfile(data.name,data.photoURL)
        .then(()=>{
           //create user entry in the database
           const userInfo ={
            name:data.name,
            email:data.email
           }
           axiosPublic.post('/users',userInfo)
           .then(res=>{
            if(res.data.insertedId){
              console.log('user added a database')
              reset();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/')
            }
           })
            // console.log('user profile updated')
            
              
        })
        .catch(error=>console.log(error))
    })
}
     
    return (
        <div>
            <Helmet>
        <title>Bistro Boss | signUP</title>
        
      </Helmet>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name",{required:true})} name="name" placeholder="name" className="input input-bordered"  />
          {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" {...register("photo",{required:true})}  placeholder="Photo  url" className="input input-bordered"  />
          {errors.photo && <span className="text-red-600">Tomar Picture dow mama</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email",{required:true})} name="email" placeholder="email" className="input input-bordered"/>
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{required:true,
          maxLength:20,minLength:6,
          pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/})} name="password" placeholder="password" className="input input-bordered"  />
          {errors.password && <span className="text-red-600">This field is required</span>}
          {errors.password?.type==='minLength' && <span className="text-red-600">password must be 6 character</span>}
          {errors.password?.type==='maxLength' && <span className="text-red-600">Password less than 20 character</span>}
          {errors.password?.type==='pattern' && <span className="text-red-600">Password have one uppercase one lower case one number and one special  character</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control  mt-6">
       
          <input type="submit" value="SignUP" className="btn btn-primary" />
        </div>
      </form>
      <div className="p-5">
        <h2>Already have a Account <span className="font-bold"><Link to='/login'>Login</Link></span></h2>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>  
        </div>
    );
};

export default SignUP;