import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PopularMenu = () => {
    return (
        <section>
            <SectionTitle
            heading={'From Our Menu'}
            subHeading={"Popular Items"}
            >

            </SectionTitle>
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-center">View All Menu</button>
        </section>
    );
};

export default PopularMenu;