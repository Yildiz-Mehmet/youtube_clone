import React, { useState } from "react";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <div
        style={{
          height: "300px",
          background:
            "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
          zIndex: 10,
        }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
    </Box>
  );
};

export default ChannelDetail;
