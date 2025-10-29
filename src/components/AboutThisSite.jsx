// src/components/AboutThisSite.jsx

const AboutThisSite = () => {
  return (
    <div className="about-this-site">
      <h2>About This Website</h2>
      <p>
        This website was created as a volunteer project by <strong>Joe Wiegert</strong>, a self-taught 
        software engineer and proud member of the O'Fallon Area Democratic Club.
      </p>
      <p>
        Built from the ground up using modern web technologies, all development work and hosting costs 
        are personally funded and maintained by Joe as a contribution to the club and our shared mission.
      </p>
      <p>
        This project represents both a technical portfolio piece and a genuine commitment to 
        supporting grassroots democratic organizing.
      </p>
      <p className="site-tech-note">
        <em>
          Have feedback or suggestions for the site? Reach out to us at{' '}
          <strong>ofallondems@gmail.com</strong>
        </em>
      </p>
    </div>
  );
};

export default AboutThisSite;
