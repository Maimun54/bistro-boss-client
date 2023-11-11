

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-400 text-xl mb-2">---{subHeading}---</p>
            <h2 className="uppercase text-4xl py-4 border-y-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;