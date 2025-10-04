import PageNav from "../components/PageNav";

function About() {
  return (
    <div className="page">
      <p className="h1">About This Project</p>
      <p>
        This educational site was created by the University Cyber Security Club<strong> Hackademic Squad </strong> 
        to raise awareness about secure development and the SSDLC model.
      </p>
      <p>
        It was presented during the <em>Welcome to Cyber Security 2026</em> event to help new students 
        understand how cybersecurity and software engineering work hand in hand.
      </p>
      <p>
        Developed and presented by: <strong>Saif eddien Naghmouche </strong>&<strong> Benhata Mokhtar</strong>
      </p>
      <p>Stay curious. Stay secure. 💻🔒</p>
      <PageNav prev="/best-practices" />
    </div>
  );
}

export default About;
