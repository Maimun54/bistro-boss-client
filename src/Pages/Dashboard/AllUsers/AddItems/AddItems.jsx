import { useForm } from "react-hook-form";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {

  const {register,handleSubmit,reset}=useForm()
   const axiosPublic =useAxiosPublic()
   const axiosSecure =useAxiosSecure()
  const onSubmit=async (data)=>{
    console.log(data)
    const imageFile = {image:data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
      headers:{
        'content-type':'multipart/form-data'
      }
    });
    if(res.data.success){
      //now send the menu item data to the server with the image url
      const menuItem ={
        name:data.name,
        category:data.category,
        price:parseFloat(data.price),
        recipe:data.recipe,
        image:res.data.data.display_url
      }
      //
      const menuRes = await axiosSecure.post('/menu',menuItem);
      console.log(menuRes.data)
      if(menuRes.data.insertedId){
        //show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added your menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log(res.data)
  }
    return (
        <div>      
          <SectionTitle 
          heading="add an item"
          subHeading="what's new"
          ></SectionTitle> 
          <div>
          <form onSubmit={handleSubmit(onSubmit)}>

      <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Recipe  Name?</span>
    
  </label>
  <input {...register("name",{required:true})} type="text" placeholder="Type here" className="input input-bordered w-full my-6" />
  
</div>
<div className="flex gap-6 ">
  {/* category */}
  
  <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Category</span>
    
  </label>
  <select {...register('category',{required:true})} className="select select-bordered w-full ">
  <option disabled selected>Select your Category </option>
  <option value="salad">Salad</option>
  <option value="salad">Pizza</option>
  <option value="soup">Soup</option>
  <option value="dessert">Dessert</option>
  <option value="drink">Drink</option>
</select>
  
  
</div>
{/* price */}
<div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Price</span>
    
  </label>
  <input {...register("price",{required:true})} type="number" placeholder="Price" className="input input-bordered w-full " />
  
</div>

</div>
{/* recipe details */}
<div className="form-control">
  <label className="label">
    <span className="label-text">Recipe Details</span>
   
  </label>
  <textarea {...register("recipe",{required:true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

</div>
<div className="form-control  my-6 w-full">
<input {...register("image",{required:true})} type="file" className="file-input w-full max-w-xs" />
</div>
      
      <button className="btn">Add Item <FaUtensils className="m-4"></FaUtensils></button>
    </form>
            </div> 
        </div>
    );
};

export default AddItems;