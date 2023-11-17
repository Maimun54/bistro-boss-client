import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {
    const {image,price,recipe,name,_id}=item;
  const  navigate = useNavigate()
  const [,refetch]=useCart()
  const location =useLocation()
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
    const handleAddToCart=()=>{
       if(user && user.email){
        //send data to card
        const itemCart={
          itemid:_id,
          email:user.email,
          image,price,recipe,name
        }
        // axios.post('http://localhost:5000/carts',itemCart)
        // .then(res=>{
        //   console.log(res.data)
        //   if(res.data.insertedId){
        //     Swal.fire({
        //       position: "top-end",
        //       icon: "success",
        //       title: `${name}added your cart`,
        //       showConfirmButton: false,
        //       timer: 1500
        //     });
        //   }
        // })
       axiosSecure.post('/carts',itemCart)
       .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name}added your cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
          refetch()
        })
       }

       else{
        Swal.fire({
          title: "You are not login?",
          text: "Please login add to cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login it!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state:{from:location}})
          }
        });
       }
    }
    return (
        <div>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-slate-900 text-white absolute right-0 mr-4 px-4 mt-4">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
    <button onClick={handleAddToCart} className="btn btn-outline  bg-slate-200 border-0 border-b-4 mt-4">Add to card</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;