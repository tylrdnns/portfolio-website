import { CertificationData } from "../data/ExperienceData";
export const Certifications = () => {
  return (
    <section>
      <h2 className="title-font  pink-text h2-tag">Certifications</h2>
      <section className="certification">
        {CertificationData.map((info, index) => (
          <section key={index}>
            <h3 className="h3-tag">{info.name}</h3>
            <p>{info.source}</p>
            <p>{info.date}</p>
            {/*<a href={info.creditUrl} target="_blank" rel="noreferrer">
              Show credential
        </a>*/}
          </section>
        ))}
      </section>
    </section>
  );
};

export default Certifications;
