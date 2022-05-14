let botao = document.querySelector("#botao");
let nomeOriginal= document.querySelector("#nomeusuario")
const botCp = document.querySelector("#botCp")

const preps =["de","da",'das','do','dos']

botao.addEventListener('click', (event)=>{
  nome(nomeOriginal.value)
})
botCp.addEventListener("click", (event)=>{
  copiar()
})

const nome =(val)=>{
  let sobrenomes = val.split(" ");
  let abrv = sobrenomes[0]
  for (var i = 1; i < sobrenomes.length -1 ; i++) {
    if (sobrenomes[i].length <=3) {
      if (preps.indexOf(sobrenomes[i]) != -1) {
        abrv+=" "+sobrenomes[i];
      } else {
       abrv+=" "+sobrenomes[i][0]+"." 
      }
    }else{
      abrv+=" "+sobrenomes[i][0]+"."
    }
}
  document.getElementById("abreviado").value= abrv.toUpperCase();
}

const copiar = ()=>{
  
 let txt= document.getElementById("abreviado");
 txt.select();
 txt.setSelectionRange(0, 70);
 navigator.clipboard.writeText(txt.value).then(()=>{
 alert(`O texto copiado é: ${txt.value}`)
} )
}






//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