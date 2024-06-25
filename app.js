let hola ="hola mundo";
function encritador(inputmgs="gente como van"){
   let mensage=inputmgs.split('');

    for(let i=0;i<mensage.length;i++){
    
    
     
        
        switch(mensage[i]){
            case "e"://enter
             mensage
             break;
             case "i"://imes
             mensage[i]="imes";
             break;
             case "a"://ai
             mensage[i]="ai";
             break;
             case "o"://ober
             mensage[i]="ober";
             break;
             case "u"://ufat
             mensage[i]="ufat";
             break;
        }
    }
 

   console.log(mensage.join(''));
}
encritador(hola);

function desencriptar( msg="asfafa"){
    let mensage=msg.split('');
      //console.log("arr in des;",mensage);
    /* msg= msg.replaceAll("enter","e");
     msg =msg.replaceAll("imes","i");
     msg =msg.replaceAll("ai","a");

     msg =msg.replaceAll("ober","o");
     msg =msg.replaceAll("ufat","u");
 */

   
  for(let i=0;i<mensage.length;i++){
    
    
     
        
        switch(mensage[i]){
            case "e"://enter
             //mensage[i]="e";
              mensage.splice(i+1,4);
             break;
             case "i"://imes
             mensage.splice(i+1,3);
             break;
             case "a"://ai
             mensage.splice(i+1,1);
             break;
             case "o"://ober
             //mensage[i]="o";
             mensage.splice(i+1,3);
             break;
             case "u"://ufat
             mensage.splice(i+1,3);
             break;
        }
    }
 



  console.log(mensage.join(''));
  //console.log(msg);
}
let mensage="fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"
//desencriptar("hoberlai mufatndober");
desencriptar(mensage);