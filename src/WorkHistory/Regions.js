import React from 'react'
import ResumeMenu from '../Components/ResumeMenu';

function Regions(){
    return (
        <div className='App'>
        <div className="welcome-section">
        <img className="welcome-image" src={`${process.env.PUBLIC_URL}/Capital-Markets.jpeg`} alt="welcome" />
    </div>
    <ResumeMenu/>
    <div className="work-history-bar">
      <div className="work-history">
      <div>
      <h2>BACKGROUND</h2>
      Capital Markets Operations plays an essential role within a bank, particularly in the realm of real estate and lending. This division is responsible for executing and supporting trade activities and managing the operational aspects of financial transactions within real estate and lending capital markets. Its effectiveness directly influences the bank's ability to serve its clients, manage risk, and navigate the complexities of these markets.</div>
      <div>
      <h2>ROLE</h2>
      <h3>Operations Analyst <br/> Real Estate / Foreign Exchange </h3>
        </div>
      <div  className="myRole">
      <h2>My Role</h2>
      As an Associate Vice President in Capital Markets Operations at Regions Bank, your role is instrumental to the functioning of the Real Estate and Foreign Exchange (FX) lending portfolios. You contribute key financial insights by creating and delivering daily Profit & Loss (P&L) reports for Capital Markets Loan Trading to senior leadership.

Your management of the syndicated FX loan book involves close coordination with other major institutions, where you oversee fund disbursement and tracking, keeping in mind the frequent repricing cycles. Ensuring the right transactions and hedges are in place for extending loans, you demonstrate strategic financial acumen and commitment to upholding the bank's financial health.

Furthermore, your responsibility for reconciling discrepancies in interest and principal balances of loans is vital for maintaining the bank's financial accuracy and integrity. You ensure that the bank's records align with regulatory standards, underlining the importance of your role within the organization.

Your work in this role underscores your proficiency in capital markets operations, particularly within the real estate and lending sectors. You're not just maintaining financial records and delivering reports, but you are also directly contributing to the bank's risk management strategy and the effective functioning of its capital market activities. Your role is essential to ensuring operational efficiency and compliance within the organization, making a significant impact on the bank's performance in the capital markets.</div>
    </div>
    </div>
    </div>
    )
}

export default Regions