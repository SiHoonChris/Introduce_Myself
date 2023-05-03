import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post['Content-Type'] = "application/json;charset=utf-8";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*";

export default{
  methods: {
    async $api(url, data) {
      return (await axios({
        method: 'post',
        url,
        data
      }).catch(e => {
        console.log(e);
      })).data;
    }
  },
  mounted(){
    document.querySelector(".cont-disp") && setTimeout(()=>{
      document.querySelector(".cont-disp").style.opacity="1"
      document.querySelector(".cont-disp").style.transition="opacity 0.4s"
    }, 0)
  }
}
