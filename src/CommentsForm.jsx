import { useState } from "react";

export default function CommentsForm() {
  let [formData, setformData] = useState({
    username: "",
    remarks: "",
    rating: "",
  });

  let handelInputChange = (event) => {
    setformData((currData) => {
      return {
        ...currData,
        [event.target.name]: [event.target.value],
      };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username"> User Name</label> &nbsp;&nbsp;
          <input
            placeholder="username"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handelInputChange}
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="remarks">Feedback</label> &nbsp;&nbsp;
          <textarea
            value={formData.remarks}
            onChange={handelInputChange}
            placeholder="Any Feedback"
            id="remarks"
            name="remarks"
          >
            Remarks
          </textarea>
          <br></br>
          <br></br>
          <label htmlFor="rating">Rate Us!</label> &nbsp;&nbsp;
          <input
            placeholder="Rating"
            type="number"
            min={1}
            max={10}
            value={formData.rating}
            onChange={handelInputChange}
            id="rating"
            name="rating"
          ></input>
          <br></br>
          <br></br>
          <button>Add Comment</button>
        </form>
      </h3>
    </div>
  );
}
