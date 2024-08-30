
/* INICIO BOTAO DARK MODE */
var darkMode = document.getElementById("dark-btn");

darkMode.onclick = function(){
  darkMode.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme","dark");
  }else{
    localStorage.setItem("theme", "light");
  }
}

/* INICIO ARMAZENAMENTO DE COR EM MEMORIA */
if(localStorage.getItem("theme") == "light"){

  darkMode.classList.remove("dark-btn-on");
  document.body.classList.add("dark-theme");

}else if(localStorage.getItem("theme") == "dark"){

  darkMode.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
  
}else{
  localStorage.setItem("theme", "light");
  localStorage.setItem("theme");
}
/* FIM ARMAZENAMENTO DE COR EM MEMORIA */

/*FIM BOTAO DARK MODE */