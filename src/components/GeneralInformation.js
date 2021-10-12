import React, { useState } from "react";

const data = {
  firstname: "",
  lastname: "",
  email: "",
  number: "",
  address: "",
  description: "",
  title: "",
};

const GeneralInformation = ({ onSubmit }) => {
  const [info, setInfo] = useState(data);

  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitInfo = (event) => {
    event.preventDefault();
    onSubmit(info);
    setInfo(data);
  };

  return (
    <div>
      <form className="ui form" onSubmit={onSubmitInfo}>
        <h4 className="ui dividing header">GENERAL INFORMATION</h4>
        <div className="field">
          <div className="two fields">
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                value={info.firstname}
                onChange={handleChange}
                placeholder="firsname"
                required
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                value={info.lastname}
                onChange={handleChange}
                name="lastname"
                placeholder="lastname"
                required
              />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Email Address</label>
              <input
                type="email"
                onChange={handleChange}
                value={info.email}
                name="email"
                placeholder="email"
                required
              />
            </div>
            <div className="field">
              <label>Phone Number</label>
              <input
                type="text"
                onChange={handleChange}
                value={info.number}
                name="number"
                placeholder="phone no."
                required
              />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Title</label>
              <input
                type="text"
                onChange={handleChange}
                value={info.title}
                name="title"
                placeholder="example: Software Engineer"
                required
              />
            </div>
            <div className="field">
              <label>Address</label>
              <input
                type="text"
                onChange={handleChange}
                value={info.address}
                name="address"
                placeholder="address"
                required
              />
            </div>
          </div>
          <div className="field">
            <label>Profile Description</label>
            <textarea
              rows="2"
              name="description"
              value={info.description}
              onChange={handleChange}
              placeholder="enter a brief description of yourself..."
              required
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GeneralInformation;
