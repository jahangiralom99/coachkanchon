import logo from "../../assets/companylogo.png";

const CompanyLogo = () => {
  return (
    <div className="bg-white pb-12">
      <div className="max-w-screen-lg mx-auto px-5 pt-12">
        <img className="border border-black rounded p-2" src={logo} alt="" />
      </div>
    </div>
  );
};

export default CompanyLogo;
