import PageNav from "../components/PageNav";



function Home() {
  return (
    <div className="page">
      <p className="h1">Welcome to Cyber Security</p>
      <p>
        Cybersecurity is the practice of protecting systems, networks, and programs 
        from digital attacks. These attacks often aim to access, change, or destroy 
        sensitive information, interrupt business processes, or extort money.
      </p>
      <p>
        In today’s connected world, cybersecurity is a shared responsibility — 
        everyone plays a part in keeping data and systems safe.
      </p>
      <p>
        Let’s now explore how <strong>security can be built into software itself </strong> 
        using the <em>Secure Software Development Life Cycle (SSDLC)</em>.
      </p>
      <PageNav next="/overview" />
    </div>
  );
}

export default Home;
