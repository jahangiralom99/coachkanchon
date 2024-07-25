import Banner from "./Banner";
import BookCard from "./BookCard";
import Business from "./Business";
import CompanyLogo from "./CompanyLogo";
import Course from "./Course";
import MarqueLogo from "./MarqueLogo";
import MySecrets from "./MySecrets";
import Selling from "./Selling";
import WinningBusiness from "./WinningBusiness";

const Home = () => {
    return (
        <div>
            <Banner />
            <Business />
            <MarqueLogo />
            <WinningBusiness />
            <Course />
            <MySecrets />
            <Selling />
            <BookCard />
            <CompanyLogo/>
        </div>
    );
};

export default Home;