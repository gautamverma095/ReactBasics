import { useState } from "react";

export const Form = () => {

    const [data,setData] = useState([])
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    maritialStatus: false,
  });

  const handleChange = (e) => {
    const { name, value,type,checked } = e.target;
  const val = type === "checkbox" ? checked :value

    setInput({
      ...input,
      [name]: val,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([
        ...data,
        input
    ])
    setInput({
        name: "",
    email: "",
    password: "",
    country: "",
    maritialStatus: false,

    })
  };
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={input.name}
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="name"
          />
        </div>
        <div>
          <input
            value={input.email}
            name="email"
            onChange={handleChange}
            type="text"
            placeholder="email"
          />
        </div>
        <div>
          <input
            value={input.password}
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="password"
          />
        </div>
        <div>
          <select name="country" value={input.country} onChange={handleChange}>
            <option value="IN">India</option>
            <option value="USA">USA</option>
            <option value="CDN">Canada</option>
          </select>
        </div>

        <div>
          <label>Married</label>
          <input type="checkbox" name="maritialStatus" checked={input.maritialStatus} onChange = {handleChange} />
        </div>
        <div>
        <input type="submit" /></div>
      </form>


      <div>

      <ol>
      {
          data.map((el) => {
              return (
                  <li>{el.name}</li>
              )
          })
      }
      
      
      </ol>
      
      </div>
    </>
  );
};
