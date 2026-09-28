import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container py-5">

      <div className="row justify-content-center align-items-center min-vh-75">

        <div className="col-lg-8">

          <div className="card border-0 shadow-lg rounded-4 p-5 text-center home-card">

            <div className="mb-4">
              <i className="bi bi-code-slash display-1 text-primary"></i>
            </div>

            <h1 className="display-4 fw-bold mb-3">
              Welcome to React CRUD Website
            </h1>

            <p className="lead text-muted mb-4">
              Build a complete CRUD application using modern React tools and
              manage your data easily with a clean and responsive interface.
            </p>

            <div className="row text-start my-4">

              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  React JS
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Bootstrap 5
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  React Router DOM
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  useState & useEffect
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  LocalStorage
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  CRUD Operations
                </div>
              </div>

            </div>

            <div className="d-flex justify-content-center gap-3 mt-4">

              <Link to="/contact" className="btn btn-primary btn-lg px-4">
                <i className="bi bi-person-plus-fill me-2"></i>
                Add User
              </Link>

              <Link to="/admin" className="btn btn-outline-dark btn-lg px-4">
                <i className="bi bi-people-fill me-2"></i>
                View Users
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;