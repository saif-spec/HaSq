import PageNav from "../components/PageNav";


function BestPractices() {
  return (
    <div className="page">
      <p className="h1">Secure Coding Best Practices</p>
      <ul className="ul1">
        <li>✅ Validate all inputs and sanitize user data.</li>
        <li>✅ Use encryption for sensitive data.</li>
        <li>✅ Avoid hard-coded passwords or API keys.</li>
        <li>✅ Keep software dependencies updated.</li>
        <li>✅ Apply least privilege principles.</li>
        <li>✅ Review code with a security mindset.</li>
      </ul>
      <PageNav next="/about" prev="/phases" />
    </div>
  );
}

export default BestPractices;
