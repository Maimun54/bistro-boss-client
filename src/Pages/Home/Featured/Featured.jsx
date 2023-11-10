import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './Featured.css'
import featuredImg from "../../../assets/home/featured.jpg"
const Featured = () => {
    return (
        <div className="featured-items text-white pt-8 my-20">
            <SectionTitle
            subHeading={"Check it Out"}
            heading={'Featured items'}></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div><img src={featuredImg} alt="" /></div>
                <div className="md:ml-10">
                    <p>Aug 20 ,2029</p>
                    <p className="uppercase">Where i can get some?</p>
                    <p className="uppercase">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, obcaecati. Harum rem ex ipsum. Vel porro suscipit quidem? Impedit nesciunt distinctio suscipit aspernatur magnam quam corrupti quasi, perspiciatis totam saepe quas facere tenetur. Molestiae officia reiciendis quos similique odit repellat hic rerum minima asperiores, totam nesciunt facere, architecto est cumque!</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;