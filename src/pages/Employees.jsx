import React, { useState } from "react";
import "../styles/Employees.css";
import userImage1 from "../assets/employeesImgs/Image Placeholder.png";
import userImage2 from "../assets/employeesImgs/user2.png";
import userImage3 from "../assets/employeesImgs/Paste image.png";
import userImage4 from "../assets/employeesImgs/userd4.png";
import userImage5 from "../assets/employeesImgs/user5.png";
import userImage6 from "../assets/employeesImgs/user6.png";
import userImage7 from "../assets/employeesImgs/user7.png";
import userImage8 from "../assets/employeesImgs/user8.png";
import linkedin from "../assets/employeesImgs/LinkedIn.png";
import DevOperations from "../components/ui/devOperations/DevOperations";

const Employees = () => {
  const [users, setUsers] = useState([
    {
      name: "Jocelyn Schleifer",
      social: linkedin,
      job: "Software Engineer",
      descr: "There are many variations of passages of Lorem Ipsum available",
      img: userImage1,
    },
    {
      name: "Martin Donin",
      social: linkedin,
      job: "Software Engineer",
      descr: "There are many variations of passages of Lorem Ipsum available",
      img: userImage2,
    },
    {
      name: "Jordyn Septimus",
      social: linkedin,
      job: "Software Engineer",
      descr: "There are many variations of passages of Lorem Ipsum available",
      img: userImage3,
    },
    {
      name: "Leo Arcand",
      social: linkedin,
      job: "Software Engineer",
      descr: "There are many variations of passages of Lorem Ipsum available",
      img: userImage4,
    },
    {
      name: "Marilyn Levin",
      social: linkedin,
      job: "Software Engineer",
      descr: "There are many variations of passages of Lorem Ipsum available",
      img: userImage5,
    },
    {
      name: "Lindsey Dokidis",
      social: linkedin,
      job: "Software Engineer",
      descr: "There are many variations of passages of Lorem Ipsum available",
      img: userImage6,
    },
    {
      name: "Hanna Dias",
      social: linkedin,
      job: "Software Engineer",
      descr: "There are many variations of passages of Lorem Ipsum available",
      img: userImage7,
    },
    {
      name: "Ryan Gouse",
      social: linkedin,
      job: "Software Engineer",
      descr: "There are many variations of passages of Lorem Ipsum available",
      img: userImage8,
    },
  ]);
  const btns = [
    "Backend",
    "Frontend",
    "Design",
    "DevOps",
    "Marketing",
    "Human Resources",
  ];

  return (
    <div className="container">
      <div className="employees">
        <div className="employees-block">
          <h3 className="main-title middle-blue poppins">Our employees</h3>
          <div className="employees-btns">
            {btns.map((el) => (
              <button className="dark-blue">{el}</button>
            ))}
          </div>

          <div className="employees-cards dark-blue">
            {users.map((el, index) => (
              <div key={index} className="employees-user">
                <img className="user-img" src={el.img} alt="user" />
                <div className="employees-info">
                  <img
                    className="employees-lnkdn"
                    src={el.social}
                    alt="social"
                  />
                  <h4>{el.name}</h4>
                  <h6>{el.job}</h6>
                  <p>{el.descr}</p>
                  <button className="main-btn">Contact our experts</button>
                </div>
              </div>
            ))}
          </div>
          <DevOperations />
        </div>
      </div>
    </div>
  );
};

export default Employees;
