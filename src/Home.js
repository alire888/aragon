import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <Link className="link" to="/brands">
        Brands
      </Link>
    </div>
  );
};
export default Home;
