import { useState } from "react";
import axios from 'axios';

const Home = () => {

  const [ name, setName ] = useState("");
  const [ errors, setErrors ] = useState([]);

  const cleanUpHandler = (e) => {
    setName("");
    setErrors([]);
  }

  const createHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/members", { name })
      .then((res) => {
        console.log(res.data);
        setName("");
        setErrors([]);
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  }

  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#createMemberModal"
        onClick={ cleanUpHandler }
      >
        Create Member
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="createMemberModal"
        tabIndex="-1"
        aria-labelledby="createMemberModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <p className="h5 modal-title" id="createMemberModalLabel">Create Members</p>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="member-name" className="col-form-label">Member Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="member-name"
                    onChange={ (e) => setName(e.target.value) }
                    name="name"
                    value={ name }
                    placeholder="Enter team member name"
                  />
                  { errors.name ? <p className="text-danger">{ errors.name.message }</p> : null }
                </div>
                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-link" data-bs-dismiss="modal">Done Creating Member</button>
                  <button type="submit" className="btn btn-primary" onClick={ createHandler }>Create Members</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Home;