import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: { key: "056ccec3b39541509a138f1236b54ffc" },
});
