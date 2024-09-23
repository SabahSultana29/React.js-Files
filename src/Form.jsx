import { useState } from "react";

export default function form() {
  let [formData, setformData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
  let handelInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;
    setformData((currData) => {
      currData[fieldName] = newValue;
      return {
        ...currData,
        [event.target.name]: [event.target.value],
      };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    setformData({
      //To call newForm Data so that during submission everything gets cleared
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="enter your full Name"
        type="text"
        value={formData.fullName}
        onChange={handelInputChange}
        id="fullName"
        name="fullName"
      ></input>
      <br></br>
      <br></br>&nbsp;&nbsp;
      <label htmlFor="userName">user Name</label>
      <input
        placeholder="enter user Name"
        type="text"
        value={formData.userName}
        onChange={handelInputChange}
        id="userName"
        name="userName"
      ></input>
      <br></br>
      <br></br> &nbsp;&nbsp;
      <label htmlFor="Password">Password</label>
      <input
        placeholder="enter your Password"
        type="password"
        value={formData.password}
        onChange={handelInputChange}
        id="password"
        name="password"
      ></input>
      <br></br>
      <br></br> &nbsp;&nbsp;
      <button>Submit</button>
      <br></br>
    </form>
  );
}
