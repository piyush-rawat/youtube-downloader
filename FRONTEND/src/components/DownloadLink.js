import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const DownloadLink = ({ item, title }) => {
  const { qualityLabel, audioBitrate, url } = item;

  return (
    <>
      <a href={`${url}&title=${title}`}>
        <AiOutlineDownload size={20} /> Download {qualityLabel}
      </a>
    </>
  );
};

export default DownloadLink;
