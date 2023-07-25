import React from 'react'
import '../style/App.css';
import ResumeMenu from '../Components/ResumeMenu';

function BoA(){
    return (
        <div className='App'>
        <div className="welcome-section">
        <img className="welcome-image" src={`${process.env.PUBLIC_URL}/compliance.jpeg`} alt="welcome" />
    </div>
    <ResumeMenu/>
    

    <div className="work-history-bar">
      <div className="work-history">
      <div>
      <h2>BACKGROUND</h2>
      The Counterparty Credit Risk Technology Group at Bank of America manages the crucial Credit Studio platform, a tool for monitoring and managing credit risk. The group ensures the accuracy and reliability of the platform by constantly enhancing its software, conducting rigorous data validation, and resolving data quality issues. By processing and analyzing key metrics, including trade count and various types of exposure, the group supports effective credit risk management. Data analysts play a pivotal role in these activities, contributing significantly to the bank's overall risk management strategy.</div>
      <div>
      <h2>ROLE</h2>
      <h3>Quality Assurance Data Analyst <br/> Counterparty Credit Risk Technology</h3>
        </div>
      <div  className="myRole">
      <h2>My Role</h2>
      As a Data Analyst in Bank of America's Counterparty Credit Risk Technology Group, I ensured the robustness of our key platform, Credit Studio. My pivotal role involved performing User Acceptance Testing (UAT) on coded projects, running meticulous test batches to compare and analyze various crucial metrics including trade count, counterparty exposure, tenor exposure, and trade type exposure. Leveraging SQL and Excel, I conducted in-depth data validation and generated comprehensive reports for stakeholders.

In addition, I utilized SQL and VBA to write and execute test scripts, ensuring the data integrity of over 3 million OTC positions. I was instrumental in creating strategic testing, monitoring, and delivery plans for software projects, which propelled them towards successful completion.

One of my key responsibilities was conducting root cause analysis for data quality issues. I adeptly identified these issues, provided innovative solutions, and tracked their resolution using JIRA. This ensured seamless data quality management and the flawless functioning of our systems.

Overall, my role was integral in maintaining the accuracy and reliability of our risk monitoring platform, thereby enabling effective credit risk management within the bank.</div>
    </div>
    </div>
    </div>
    )

}

export default BoA