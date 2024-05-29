import React from "react";
import "./InfoPositions.css";
import { useTranslation } from "react-i18next";
const InfoPositions = () => {
  const {t}=useTranslation()
  const infoPositionsData = [
    {
      title: t("Our expectations"),
      list: [
        t("Experience with AWS or GCP"),
        t("Understanding of cloud concepts and how to develop secure, high availability solutions in the cloud"),
        t("Good at working with infrastructure cost optimization"),
        t("Extensive experience with Infrastructure-as-Code approach "),
        t("Experience with managed k8s clusters"),
        t("Understanding of service-mesh"),
        t("Working with monitoring, alerting and incident management systems"),
        t("Experience with configuration management systems: Ansible, Chef, Puppet"),
        t("Deploying test environments/infrastructures for backend, frontend, mobile"),
        t("Virtualization and containerization - standardization of infrastructure, routines and environments"),
        t("Database management: Percona, MariaDB, Postgres, MSSQL, MongoDB, DynamoDB, Redis, etc."),
        t("Basic web applications security, vulnerability and security testing experience"),
        t("Building infrastructure in accordance with: HIPAA, GDPR, PCI DSS, ISO 27001, CIS"),
        t("English level B1"),
      ],
      id: "1",
    },
    {
      title: t("It will be a plus"),
      list: [
        t("AWS certification (system administrator / developer / architect)"),
        t("Conversational English"),
      ],
      id: "2",
    },
    {
      title: t("Conditions"),
      list: [
        t("Awesome colleagues and managers"),
        t("Competitive salary, dollar-pegged rate (or payment in dollars), flexible form of remuneration"),
        t("Fulltime"),
        t("Official employment, legal assistance in registration of cooperation"),
        t("Expert development team. The management of the company has an engineering background. We regularly hold engineering meetings, where we discuss the difficulties we face in the process of work and technological innovations"),
        t("Opportunity to study at the expense of the company: courses, electronic library, participation and presentation at conferences. We ourselves regularly make presentations at such conferences as FOSDEM, TeamLeadConf, Golang Conf, GDG DevFests and others, so we will help with the preparation of the report"),
      ],
      id: "3",
    },
  ];
  return (
    <div className="info-positions-cards">
      <div className="bg-medium bg-info-positions"/>
      <div className="bg-medium bg-info-positions2"/>
      <div className="info-positions-card">
        <h2 className="poppins">{t("Who and where are we looking for")}</h2>
        <p>
      {t("We are expanding our DevOps engineering department and look forward to working with professionals in this field.")}
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
