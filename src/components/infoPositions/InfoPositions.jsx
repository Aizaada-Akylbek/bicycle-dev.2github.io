import React from "react";
import "./InfoPositions.css";
const InfoPositions = () => {
  const infoPositionsData = [
    {
      title: "Our expectations",
      list: [
        "Experience with AWS or GCP",
        "Understanding of cloud concepts and how to develop secure, high availability solutions in the cloud",
        "Good at working with infrastructure cost optimization",
        "Extensive experience with Infrastructure-as-Code approach ",
        "Experience with managed k8s clusters",
        "Understanding of service-mesh",
        "Working with monitoring, alerting and incident management systems",
        "Experience with configuration management systems: Ansible, Chef, Puppet",
        "Deploying test environments/infrastructures for backend, frontend, mobile",
        "Virtualization and containerization - standardization of infrastructure, routines and environments",
        "Database management: Percona, MariaDB, Postgres, MSSQL, MongoDB, DynamoDB, Redis, etc.",
        "Basic web applications security, vulnerability and security testing experience",
        "Building infrastructure in accordance with: HIPAA, GDPR, PCI DSS, ISO 27001, CIS",
        "English level B1",
      ],
      id: "1",
    },
    {
      title: "It will be a plus",
      list: [
        "AWS certification (system administrator / developer / architect)",
        "Conversational English",
      ],
      id: "2",
    },
    {
      title: "Conditions",
      list: [
        "Awesome colleagues and managers",
        "Competitive salary, dollar-pegged rate (or payment in dollars), flexible form of remuneration",
        "Fulltime",
        "Official employment, legal assistance in registration of cooperation",
        "Expert development team. The management of the company has an engineering background. We regularly hold engineering meetings, where we discuss the difficulties we face in the process of work and technological innovations",
        "Opportunity to study at the expense of the company: courses, electronic library, participation and presentation at conferences. We ourselves regularly make presentations at such conferences as FOSDEM, TeamLeadConf, Golang Conf, GDG DevFests and others, so we will help with the preparation of the report",
      ],
      id: "3",
    },
  ];
  return (
    <div className="info-positions-cards">
      <div className="bg-medium bg-info-positions"/>
      <div className="bg-medium bg-info-positions2"/>
      <div className="info-positions-card">
        <h2 className="poppins">Who and where are we looking for</h2>
        <p>
          We are expanding our DevOps engineering department and look forward to
          working with professionals in this field.
        </p>
      </div>
      {infoPositionsData.map((el) => (
        <div className="info-positions-card" key={el.id}>
          <h2 key={el.id} className="poppins">
            {el.title}
          </h2>
          <ul>
            {el.list.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default InfoPositions;
