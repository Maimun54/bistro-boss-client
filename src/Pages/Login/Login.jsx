
import { useContext, useEffect,  useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';


const Login = () => {
  
    
    const [disabled,setDisabled]=useState(true);
    const {signIn}=useContext(AuthContext)
    const navigate =useNavigate();
    const location =useLocation();
    const from =location.state?.from?.pathname|| "/";

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin =(e)=>{
        e.preventDefault()
        const form =e.target
        const email =form.email.value  
        const password =form.password.value
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
          console.log(result.user)
          navigate(from, {replace:true} );
        })
        .catch(error=>{
          console.error(error)
        })
        
    }
    const handleValidateCaptcha =(e)=>{
        
      const user_captcha_value =e.target.value;
      
       if(validateCaptcha(user_captcha_value)){

       setDisabled(false)
    }

    else {
        setDisabled(true)
    }
       
    }
    return (
      <div>
        <Helmet>
        <title>Bistro Boss | Login</title>
        
      </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" disabled onBlur={handleValidateCaptcha} name="captcha" placeholder="Type the captcha" className="input input-bordered" required />
          {/* <button  className='btn btn-outline btn-xs'>Validate</button> */}
        </div>
        <div className="form-control mt-6">
          
          <input className='btn btn-primary' type="submit"  value="Login" />
        </div>
      </form>
      <div className='p-5'> 
      <p>New Here ?<Link to="/signUp"><span className='font-bold'>SignUP</span></Link></p>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Login;