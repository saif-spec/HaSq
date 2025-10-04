import PageNav from "../components/PageNav";

function Overview() {
  return (
    <div className="page">
      <p className="h1">What is SSDLC ?</p>
      <p>
        The Secure Software Development Life Cycle (SSDLC) ensures that 
        security is included at every stage of software creation — not just 
        after the system is built.
      </p>
      <p>
        By integrating security early, organizations can reduce risks, 
        lower costs, and deliver safer products to users.
      </p>
      <ul className="ul1">
        <li> Planning & Requirements</li>
        <li> Design</li>
        <li> Implementation</li>
        <li> Testing</li>
        <li> Deployment & Maintenance</li>
      </ul>
      <PageNav next="/phases" prev="/"/>
    </div>
  );
}

export default Overview;
