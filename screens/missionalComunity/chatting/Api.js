// api.js
import axios from "axios";

const api = axios.create({
  baseURL:
    "http://10.0.2.2:80/DLMI/missionalCommunity/chatting/message.php/api",
});

export default api;
