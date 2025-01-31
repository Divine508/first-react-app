import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="container mb-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="src/assets/th.jpg"
            width="100%"
            className="my-5"
            height="100%"
          />
        </div>
        <div className="col-md-6 my-5">
          <div>
            <h1>About Us</h1>
          </div>
          <p>
            This is what i want you to know that this is my react app and i am
            going to make the best react app ever that solves problems in the
            world
          </p>

          <div>
            <Link className="btn bg-black text-white" to={"/about"}>
              Read More...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
