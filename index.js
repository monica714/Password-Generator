


//Selectors




const lowerCase=document.getElementById("lowercase");
    
const upperCase=document.getElementById("uppercase");

const Numbers=document.getElementById("numbers");

const Symbols=document.getElementById("symbols");

const ResultBar =document.getElementById("target");

const TotalLength=document.getElementById("length");


//Random Value

const UpperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerSet="abcdefghijklmnopqrstuvwxyz";
const numberSet="0123456789";
const SymbolSet="~!@#$%^&*()_+-?/";


const getRandomData=(dataset)=>{
  return dataset[Math.floor(Math.random()*  dataset.length)];
}


const getPass=(Password="")=>{
  
     if(upperCase.checked)
      {
        Password += getRandomData(UpperSet);
      }
      if(lowerCase.checked)
      {
        Password += getRandomData(LowerSet);
      }
      if(Numbers.checked)
      {
        Password += getRandomData(numberSet);
      }
      if(Symbols.checked)
      {
        Password += getRandomData(SymbolSet);
      }
     if(Password.length < TotalLength.value)
      {
        return getPass(Password);
      }
      
      ResultBar.innerHTML=truncateString(Password,TotalLength.value);
     
      
}


  


    

document.getElementById("generate").addEventListener("click",()=>{
  
        getPass();
   })


//------> Main
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num);
  } else {
    return str;
  }
}



document.getElementById("clipboard").addEventListener("click",


  function() {
    var copyText = ResultBar;
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    if(textArea.value)
    {
      alert("copied");
    }

    
})
