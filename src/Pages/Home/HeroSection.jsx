export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Mathias Loc Nguyen</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Aspiring Full Stack</span>{" "}
            <br />
            Software Developer
          </h1>
          <h5 className="hero--section-description">
            I'm currently a third-year student in Haaga-Helia University of Applied Sciences
            <br /> studying to become a software developer.
          </h5>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="https://scontent.fqlf1-2.fna.fbcdn.net/v/t1.6435-9/95203612_2505511819550955_4152629043268681728_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=T0NRwQ4ukmMAX83GXMq&_nc_ht=scontent.fqlf1-2.fna&oh=00_AfCFgLP1iuTEuKeLnFnjGVpSZ36srt9-HB0kM7ZrsNiV4A&oe=65F5DA20" alt="Hero Section" />
      </div>
    </section>
  );
}
