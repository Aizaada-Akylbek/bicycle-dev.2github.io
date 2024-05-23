import React, { useState } from "react";
import "../styles/Employees.css";
import Aizaada from '../assets/employeesImgs/Снимок экрана 2024-05-23 в 2.44.50 PM.png'
import Zhandos from '../assets/team/Zhandos.jpg'

import userImage2 from "../assets/employeesImgs/user2.png";

import linkedin from "../assets/employeesImgs/LinkedIn.png";
import DevOperations from "../components/ui/devOperations/DevOperations";

const Employees = () => {
  const [users, setUsers] = useState([
    {
      name: "Adilet ",
      social: linkedin,
      job: "Software Engineer",
      descr: "There are many variations of passages of Lorem Ipsum available",
      img: userImage2,
    },
    {
      name: "Zhandos Manapov",
      social: linkedin,
      job: "Software Engineer",
      descr: "There are many variations of passages of Lorem Ipsum available",
      img: Zhandos,
    },
    {
      name: "Aizaada Akylbekova",
      social: linkedin,
      job: "Software Engineer",
      descr: "There are many variations of passages of Lorem Ipsum available",
      img: Aizaada,
    },
    // {
    //   name: "Leo Arcand",
    //   social: linkedin,
    //   job: "Software Engineer",
    //   descr: "There are many variations of passages of Lorem Ipsum available",
    //   img: userImage4,
    // },
    // {
    //   name: "Marilyn Levin",
    //   social: linkedin,
    //   job: "Software Engineer",
    //   descr: "There are many variations of passages of Lorem Ipsum available",
    //   img: userImage5,
    // },
    // {
    //   name: "Lindsey Dokidis",
    //   social: linkedin,
    //   job: "Software Engineer",
    //   descr: "There are many variations of passages of Lorem Ipsum available",
    //   img: userImage6,
    // },
    // {
    //   name: "Hanna Dias",
    //   social: linkedin,
    //   job: "Software Engineer",
    //   descr: "There are many variations of passages of Lorem Ipsum available",
    //   img: userImage7,
    // },
    // {
    //   name: "Ryan Gouse",
    //   social: linkedin,
    //   job: "Software Engineer",
    //   descr: "There are many variations of passages of Lorem Ipsum available",
    //   img: userImage8,
    // },
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
        <div className="bg-small bg-employees"/>
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
          <div className="circle m-circle-employees">
            <div className="circle-inner" />
          </div>
          <DevOperations />
        </div>
        <div className="circle s-circle-employees1">
          <div className="circle-inner" />
        </div>
        <div className="circle s-circle-employees2">
          <div className="circle-inner" />
        </div>
      </div>
    </div>
  );
};

export default Employees;
