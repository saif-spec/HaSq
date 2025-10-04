import PageNav from "../components/PageNav";



function Phases() {
  return (
    <div className="page">
      <p className="h1">Phases of SSDLC</p>

      <section className="phase">
        <h2>1 - Planning & Requirements</h2>
        <p>Define project goals and identify security requirements early on.</p>
      </section>

      <section className="phase">
        <h2>2 - Design</h2>
        <p>Perform threat modeling and choose secure architectures.</p>
      </section>

      <section className="phase">
        <h2>3 - Implementation</h2>
        <p>Use secure coding practices and avoid known vulnerabilities.</p>
      </section>

      <section className="phase">
        <h2>4 - Testing</h2>
        <p>Conduct security testing (static, dynamic, penetration).</p>
      </section>

      <section className="phase">
        <h2>5 - Deployment & Maintenance</h2>
        <p>Patch, monitor, and continuously improve system security.</p>
      </section>

      <PageNav next="/best-practices" prev="/overview"/>
    </div>
  );
}

export default Phases;
