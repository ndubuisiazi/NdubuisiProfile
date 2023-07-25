import React from 'react'
import ResumeMenu from '../Components/ResumeMenu';

function MUFG(){
    return (
        <div className='App'>
        <div className="welcome-section">
        <img className="welcome-image" src={`${process.env.PUBLIC_URL}/compliance.webp`} alt="welcome" />
    </div>
    <ResumeMenu/>
    <div className="work-history-bar">
      <div className="work-history">
      <div>
      <h2>BACKGROUND</h2>
The role of an Internal Consultant within the Specialty Services team at MUFG is integral to providing consultation advice and implementation support for various bank-wide program initiatives. This role involves engaging in rotating projects and medium to long-term assignments, often requiring interaction with key stakeholders and management across different areas such as Finance, Treasury, and Risk.

Structured methodologies are applied to assigned project engagements, which may span across Finance, Risk, or more encompassing, enterprise-wide program initiatives. This role is pivotal in developing and executing project plans, status reports, and updates for both management and committees. 

Ensuring compliance with regulatory requirements is another critical function, involving the review of regulatory and/or legal pronouncements, performing gap analysis on existing policies, processes, and technology capabilities, and designing new policies and processes as needed.
 </div>
      <div>
      <h2>ROLE</h2>
      <h3>Internal Consultant<br/> Project Manager </h3>
        </div>
      <div  className="myRole">
      <h2>My Role</h2>
      In my role as an Internal Consultant within the Specialty Services team at MUFG, I had the exciting opportunity to work closely with Corporate Real Estate. My responsibilities encompassed supporting the Director in areas such as budget planning and management, new initiative implementation, and workflow development. Additionally, I played a crucial role in data analysis and reporting.

I was instrumental in the collection, preparation, and tracking of departmental and project budgets. In terms of space planning and analysis, I regularly prepared presentations for management reports, specifically focusing on lease renewals and construction progress.

In collaboration with the Facilities/Office Services team, I documented existing business processes to create a standard operating procedure manual. I also maintained the corporate real estate dashboards, ensuring real-time visibility on the real estate portfolio that included 22 offices. This included monitoring lease expirations and the status of active facilities projects.
Lastly, I supported the department with ad-hoc projects and played a significant role in high-level, sensitive headcount reorganization projects. This aspect of my role particularly showcased my ability to handle sensitive information with discretion, demonstrating my commitment to confidentiality and my adaptability within the role.</div>
    </div>
    </div>
    </div>
    )
}

export default MUFG