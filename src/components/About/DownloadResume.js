import DownloadIcon from "../../images/download-icon.png";
import Resume from "../../images/Tyler_Dennis__CV1.pdf";
export const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Tyler-Dennis">
        <img src={DownloadIcon} alt="" className="download-img"></img>Download
        Resume
      </a>
    </section>
  );
};

export default DownloadResume;
