import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const createContact = e => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name,
      phone,
      email,
    };
    dispatch(addContact(new_contact));
    navigate("/");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add contact</div>
      <div className="card-body">
        <form onSubmit={e => createContact(e)}>
          <div className="form-control">
            <input
              type="text"
              className="form-control"
              placeholder="enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              className="form-control"
              placeholder="enter phone number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              className="form-control"
              placeholder="enter an email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary  m-4" type="submit">
            Crate contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
