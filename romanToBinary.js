/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }; //Criação de um objeto que armazena o valor de cada algarismo romano 
  //Creation of an object that stores the value of each roman numeral

    const regex = /^[IVXLCDM]+$/i;
    if(!regex.test(s))
    {
        throw new Error;
    } // Função regex para fazer a validação do valor digitado
  //Regex fuction to validate the input value

    const numsSum = s.split("").map(char => romanValues[char]); //Transformando o valor digitado em array e substituindo os algarismos romanos pelos seus valores numericos
  //Converting the input value to array and replacing the roman numeral to their numeric values
  
    let v = 0;
    for(let i = 0; i < numsSum.length; i++)
    {
        if(i + 1 < numsSum.length && numsSum[i] < numsSum[i + 1])
        {
            v -= numsSum[i];
        }
        else 
        {
            v += numsSum[i];
        }
    }//Percorre o array e verifica se o valor atual deve ser somado ou subtraido
    //Go through the array and validate if the current value must be added or subtracted
  
    return(v);
};
