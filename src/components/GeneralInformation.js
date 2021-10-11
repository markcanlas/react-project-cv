import React, { useState } from "react";

const data = {
  firstname: "",
  lastname: "",
  email: "",
  number: "",
  address: "",
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
              />
            </div>
          </div>
          <div className="field">
            <label>Address</label>
            <input
              type="text"
              onChange={handleChange}
              value={info.address}
              name="address"
              placeholder="address"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GeneralInformation;
