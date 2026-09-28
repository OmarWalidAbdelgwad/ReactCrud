const About = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-body p-5 text-center">

              <h1 className="fw-bold text-primary mb-3">
                About Us
              </h1>

              <p className="lead text-muted">
                Welcome to our website. This project is a simple user
                management system built with React.
              </p>

              <p className="text-secondary">
                You can add users from the Contact page and manage them
                from the Admin Dashboard. User data is stored in
                localStorage, so your data will remain available even
                after refreshing the page.
              </p>

              <div className="mt-4">
                <span className="badge bg-primary me-2">
                  React
                </span>

                <span className="badge bg-success me-2">
                  Bootstrap
                </span>

                <span className="badge bg-dark">
                  LocalStorage
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;