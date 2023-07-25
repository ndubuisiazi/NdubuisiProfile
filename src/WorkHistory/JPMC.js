import React from 'react'
import ResumeMenu from '../Components/ResumeMenu';

function JPMC(){
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
        As a project manager at JPMorgan Chase & Co. (JPMC) tasked with BCBS 239 compliance, the role operates at a critical juncture of strategic planning, collaboration across various teams, and rigorous execution. BCBS 239, an international banking standard, mandates improvements to banks' risk data aggregation and internal risk reporting. This role calls for coordination with different departments, facilitating collaborative efforts, and driving changes to meet BCBS 239 standards, thereby bolstering risk management capabilities and operational efficiency.</div>
      <div>
      <h2>ROLE</h2>
      <h3>Project Manager <br/> Principal Risk</h3>
        </div>
      <div  className="myRole">
      <h2>My Role</h2>
        Part of a dedicated team of three Principal Risk Project Managers, I played a key role in steering JPMC toward full BCBS 239 compliance within a challenging 20-month timeline. My contributions included designing and implementing data validation policies and an automation framework that significantly reduced manual errors and improved efficiency. I negotiated service level agreements with upstream data providers, leading to automation of 75% of data sourcing, which enhanced the timeliness and reliability of our risk data. I also compiled and standardized risk data into comprehensive reports for BCBS subcommittee meetings, supporting transparency and informed decision-making. Our focused efforts led to full regulatory compliance, greatly enhancing JPMC's risk management capabilities and resilience</div>
    </div>
    </div>
    </div>
    )
}

export default JPMC