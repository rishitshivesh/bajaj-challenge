import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json",
});

export default instance;
