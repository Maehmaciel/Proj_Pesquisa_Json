     let resultado = [];
     let item = [];
function percorrer(obj) {
  for (let propriedade in obj) {
    
    if (obj.hasOwnProperty(propriedade)) {
      if (typeof obj[propriedade] == "object") {
        
        percorrer(obj[propriedade]);
      } else {
        
        if(propriedade==="aprovado"){
        item.push("<p><b>"+propriedade.toUpperCase()+"</b>: "+obj[propriedade]+'</p>');
        resultado.push(item)
        item=[]
      }
        else if(propriedade==="justificativa"){
          item.push("<p><b>"+propriedade.toUpperCase()+"</b>: "+obj[propriedade]+'</p>'+'<h3>Integrantes</h3>');
        }
      else
         item.push("<p><b>"+propriedade.toUpperCase()+"</b>: "+obj[propriedade]+'</p>');
      }
    }
  }
}
        $(document).ready(function() {
            $.get('/data', function(res) {
                
                    percorrer(res);
              for (let r=0;r<resultado.length;r++) {
                for (let i=0;i<resultado[r].length;i++) {
                if(resultado[r][i]===',')
                  break
                else
                document.getElementsByClassName('resultado')[r].innerHTML+=resultado[r][i]
            }
            }
                //$('#um').html(JSON.stringify(resultado));
    
            })
        });