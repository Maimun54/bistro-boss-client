import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const Home = () => {
    const [menu,setMenu]=useState([])

    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems =data.filter(item=>item.category==='popular')
            setMenu(popularItems)})
    },[])

    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <div className="grid grid-cols-2 gap-10">
            {
                menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
           </div>
        </div>
    );
};

export default Home;