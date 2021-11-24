const express = require("express");
const ytdl = require("ytdl-core");

const router = express.Router();

router.post("/", async (req, res) => {
  const URL = req.body.URL;
  const info = await ytdl.getInfo(URL);
  const title = info.videoDetails.title;
  const thumbnail = info.videoDetails.thumbnails[3].url;
  const formats = info.formats;

  let filteredFormats = [];

  filteredFormats = formats.filter(
    (item) => item.audioBitrate !== null && item.audioCodec !== null
  );

  return res.json({ title, thumbnail, formats: filteredFormats });
});

module.exports = router;
