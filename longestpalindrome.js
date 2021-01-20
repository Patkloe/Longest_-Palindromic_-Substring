// version 0.0.1
function is_palindrome(t){
  var rev = "";
  for(var i = t.length - 1; i >= 0; i--){
       rev = rev + t[i];
  }
  if(rev === t)
    return true;
  return false;
}
function longestpalindrome(s){
 var ins = {};
 var ind = 0;
 var max = 0;
 var res = "";
 for(var i = 0; i < s.length; i++){
     let val = s[i];
     if(val in ins){
       ind = ins[val];
       console.log(" index in dict :" + " " + ind + " " + "in table :" + " " + i);
       let pal = "";
       while(ind <= i){
           //alert("start");
         pal = pal + s[ind];
        ind++;
       } // fin while
         // alert(pal);
       if(is_palindrome(pal)){
          let size = pal.length;
          if( size > max){
              max = size;
              res = pal;
          }
       }
     }
     ins[val] = i;
 }
 return res;
}
 var test = "abracaacbra";
     longestpalindrome(test);
