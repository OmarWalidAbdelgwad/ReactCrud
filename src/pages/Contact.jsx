import { useState } from "react";

const Contact = ({ users, setUsers }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !user.name.trim() ||
      !user.email.trim() ||
      !user.phone.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    setUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...user,
      },
    ]);

    alert("User Added Successfully");

    setUser({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">

        <div className="col-lg-6 col-md-8">

          <div className="card border-0 shadow-lg rounded-4">

            <div className="card-header text-white text-center rounded-top-4 py-4 bg-primary">

              <h2 className="fw-bold mb-1">
                <i className="bi bi-person-plus-fill me-2"></i>
                Contact Form
              </h2>

              <p className="mb-0 opacity-75">
                Add New User
              </p>

            </div>

            <div className="card-body p-4">

              <form onSubmit={handleSubmit}>

                {/* Name */}

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Full Name
                  </label>

                  <div className="input-group">

                    <span className="input-group-text">
                      <i className="bi bi-person-fill"></i>
                    </span>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                    />

                  </div>

                </div>

                {/* Email */}

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Email Address
                  </label>

                  <div className="input-group">

                    <span className="input-group-text">
                      <i className="bi bi-envelope-fill"></i>
                    </span>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="example@gmail.com"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />

                  </div>

                </div>

                {/* Phone */}

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Phone Number
                  </label>

                  <div className="input-group">

                    <span className="input-group-text">
                      <i className="bi bi-telephone-fill"></i>
                    </span>

                    <input
                      type="tel"
                      className="form-control"
                      placeholder="010xxxxxxxx"
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                    />

                  </div>

                </div>

                <div className="d-grid">

                  <button
                    className="btn btn-primary btn-lg fw-bold py-3"
                    type="submit"
                  >
                    <i className="bi bi-plus-circle me-2"></i>
                    Add User
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;