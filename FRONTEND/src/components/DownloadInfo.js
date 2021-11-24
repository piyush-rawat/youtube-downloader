import React from "react";

import DownloadLink from "./DownloadLink";

const DownloadInfo = ({ info }) => {
  const { title, thumbnail, formats } = info;

  return (
    <div className="download-info">
      <img src={thumbnail} alt="thumbnail" />
      <div className="download-links">
        {formats.map(
          (item) =>
            item.qualityLabel && (
              <DownloadLink key={Math.random()} item={item} title={title} />
            )
        )}
      </div>
    </div>
  );
};

export default DownloadInfo;
