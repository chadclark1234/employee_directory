import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=5";

export default {
  search: function () {
    console.log("hello");
    return axios.get(BASEURL);
  },
};
// export default API;
