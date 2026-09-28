import { useState, useEffect } from "react";

function Admin({ users, setUsers }) {
       const [editIndex, setEditIndex] = useState(null)
       //     edit user
       const [editUser, setEditUser] = useState({
              name: "",
              email: "",
              phone: "",
       });

       //     delete user

       const handleDelete = (index) => {
              const newUsers = users.filter((user, i) => i !== index)
              setUsers(newUsers);
       }


       const handleEdit = (index) => {
              setEditIndex(index);
              setEditUser(users[index]);
       };

       //  input change

       const handleChange = (e) => {
              setEditUser({
                     ...editUser,
                     [e.target.name]: e.target.value,
              })
       }

       const handleUpdate = () => {
              const UpdatedUsers = [...users];
              UpdatedUsers[editIndex] = editUser;
              setUsers(UpdatedUsers);
              setEditIndex(null)
              alert("user updated ")

       }

       return (
              <div className="container">
                     <h2 className="text-center my-4">Admin Dashboard</h2>
                     <table className="table table-dark table-striped-columns text-center">
                            <thead>
                                   <tr>
                                          <th>#</th>
                                          <th>Name</th>
                                          <th>Email</th>
                                          <th>Phone</th>
                                          <th>Delete</th>
                                          <th>Edit</th>
                                   </tr>
                            </thead>
                            <tbody>
                                   {users.length === 0 ? (
                                          <tr>
                                                 <td colSpan="6">no Users Found</td>
                                          </tr>
                                   ) : users.map((user, index) => (
                                          <tr key={index}>
                                                 <td>{index + 1}</td>
                                                 <td>
                                                        {editIndex === index ? (
                                                               <input
                                                                      className="form-control"
                                                                      name="name"
                                                                      value={editUser.name}
                                                                      onChange={handleChange}

                                                               />) : (user.name)
                                                        }
                                                 </td>

                                                 <td>
                                                        {editIndex === index ? (
                                                               <input
                                                                      className="form-control"
                                                                      name="email"
                                                                      value={editUser.email}
                                                                      onChange={handleChange}

                                                               />) : (user.email)
                                                        }
                                                 </td>

                                                 <td>
                                                        {editIndex === index ? (
                                                               <input
                                                                      className="form-control"
                                                                      name="phone"
                                                                      value={editUser.phone}
                                                                      onChange={handleChange}

                                                               />) : (user.phone)
                                                        }
                                                 </td>
                                                 <td>
                                                   <button className="btn btn-danger " onClick={()=>handleDelete(index)}>delete</button>  
                                                 </td> 
                                                  <td>
                                                        {editIndex===index?(
                                                               <button className="btn btn-primary" onClick={()=>handleUpdate(index)}>Save</button>
                                                        ):(
                                                               <button className="btn btn-warning " onClick={()=>handleEdit(index)}>edit</button>  
   
                                                        )}
                                                  </td>
                                               
                                          </tr>
                                   ))
                                   }


                            </tbody>
                     </table>
              </div>
       )
}


export default Admin 