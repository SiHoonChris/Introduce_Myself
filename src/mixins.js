export default{
  mounted(){
    document.querySelector(".cont-disp") && setTimeout(()=>{
      document.querySelector(".cont-disp").style.opacity="1"
      document.querySelector(".cont-disp").style.transition="opacity 0.4s"
    }, 0)
  }
}
