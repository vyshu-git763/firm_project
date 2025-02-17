import React from 'react';
import './Research.css'; 

const Research = () => {
  return (
    <div className="research-page">
      <h1>Research at Rahul A & Associates</h1>
      <p>
        Our research team is dedicated to providing cutting-edge legal research to help our clients navigate complex legal matters.
        We explore the latest trends, conduct in-depth studies, and offer valuable insights to empower businesses and individuals.
      </p>
      <section className="research-section">
        <h2>Ongoing Research Projects</h2>
        <ul>
          <li>Legal Tech Innovations</li>
          <li>Corporate Governance and Compliance</li>
          <li>International Trade Law</li>
          <li>Environmental and Sustainability Laws</li>
        </ul>
      </section>
      <section className="research-section">
        <h2>Research Publications</h2>
        <ul>
          <li><a href="/publication1">Research Paper on Legal Innovations</a></li>
          <li><a href="/publication2">Understanding Corporate Governance</a></li>
          <li><a href="/publication3">Impact of International Trade Regulations</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Research;
