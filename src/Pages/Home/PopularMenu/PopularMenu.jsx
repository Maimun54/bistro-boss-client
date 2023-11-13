
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";


const PopularMenu = () => {
    const [menu]=useMenu();
    const popular =menu.filter(item=>item.category==='popular')
    // const [menu,setMenu]=useState([])

    // useEffect(()=>{
    //     fetch('/menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems =data.filter(item=>item.category==='popular')
    //         setMenu(popularItems)})
    // },[])
    return (
        <section>
            <SectionTitle
            heading={'From Our Menu'}
            subHeading={"Popular Items"}
            >

            </SectionTitle>
            {/* <div className="grid grid-cols-2 gap-10">
            {
                popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
           </div> */}
           <MenuCategory items={popular}></MenuCategory>
            {/* <button className="btn btn-outline border-0 border-b-4 mt-4 text-center">View All Menu</button> */}
        </section>
    );
};

export default PopularMenu;