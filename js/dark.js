
function dark(){
    const checkbox = document.getElementById("checkbox")
    let isdark=true;
    checkbox.addEventListener('click',()=>{
      document.body.classList.toggle('text-bg-dark')
      if (isdark) {
    
        
        isdark=true;
      }
      else{
        
        
        isdark=false;
      }
    })
}
