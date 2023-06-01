import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/captions",
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": "df3de8d2d8mshf2cfe1379b74260p1a5fbejsn135ceadaa208",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
