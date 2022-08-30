import DownloadIcon from "../../images/download-icon.png";
export const DownloadPublished = () => {
  return (
    <section>
      <a className="download-btn" href="https://www.nature.com/articles/s41598-022-07611-8.pdf" download="Tyler-Dennis">
        <img src={DownloadIcon} alt="" className="download-img"></img>Download
        Paper
      </a>
    </section>
  );
};

export default DownloadPublished;
