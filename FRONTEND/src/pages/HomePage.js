import React, { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import axios from "axios";

import Input from "../components/Input";
import Spinner from "../components/Spinner";
import DownloadInfo from "../components/DownloadInfo";

const HomePage = () => {
  const [URL, setURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    thumbnail: "",
    formats: [],
  });

  const getVideoInfo = async () => {
    setInfo([]);
    setLoading(true);
    try {
      console.log(URL);
      const info = (await axios.post("/download", { URL })).data;
      setInfo(info);
      console.log(info);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (URL) {
      getVideoInfo();
    }
  }, [URL]);

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>
            <FaYoutube />
            YouTube Downloader
          </h1>
        </div>
        <p>Copy and Paste Video URL Below</p>
        <Input setURL={setURL} getVideoInfo={getVideoInfo} />
        {loading && <Spinner />}
        {info.thumbnail && (
          <>
            <p>{info.title}</p>
            <DownloadInfo info={info} />
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
