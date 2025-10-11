
import comp1 from "/src/assets/images/front-pages/componies/intel.svg";
import comp2 from "/src/assets/images/front-pages/componies/oracle.svg";
import comp3 from "/src/assets/images/front-pages/componies/dell.svg";
import comp4 from "/src/assets/images/front-pages/componies/samsung.svg";
import comp5 from "/src/assets/images/front-pages/componies/infosys.svg";
import comp6 from "/src/assets/images/front-pages/componies/capgemini.svg";


const companies = [
  {
    img: comp1,
  },
  {
    img: comp2,
  },
  {
    img: comp3,
  },
  {
    img: comp4,
  },
  {
    img: comp5,
  },
  {
    img: comp6,
  },
];
const Companies = () => {
  return (
    <>
      <div className="dark:bg-dark">
        <div className="container-1218 mx-auto ">
          <div className="border-ld border-t lg:pt-14 pt-7">
            <div className="flex flex-wrap md:justify-between justify-center  items-center gap-4">
              {companies.map((item, index) => (
                <div key={index} className="">
                  <img src={item.img} alt="company" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
