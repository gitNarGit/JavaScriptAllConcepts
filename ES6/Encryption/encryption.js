  let cezar_crypt = (function(){
    let output = {},
    default_charcode,
        needed_charcode,
        final_char,
        key = 2;

    function process(input,sign)
    {
      key = (sign === "+") ? key : key*(-1);
      for(var i in input){
        // get char code from char
        default_charcode = input.charCodeAt(i);
        // get needed char code
        needed_charcode = default_charcode + key;
        // conver to final char
        console.log(String.fromCharCode(needed_charcode));
      };
    }
    output.encrypt = function(input)
    {
        process(input,"+");
    };
    output.decrypt = function(input)
    {
      process(input,"-");
    };

    return output;
  })()
cezar_crypt.encrypt("Armen");
cezar_crypt.decrypt("Ctogp");

