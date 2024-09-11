verificaChuteValido(chute)
    {
        const numero = +chute;

        if (chuteForInv(numero))
        {
            console.log("Valor inválido");
        }
        if(numeroForMaiorOuMenorQueOValorPermitido(numero))
        {
            console.log(`Valor inválido: O número secreto precisa estar entre ${menorValor}e ${maiorValor}`);
        }
        
    }

function chuteForInv(numero)
    {
        return numero.isNaN(numero);
    }

function numeroForMaiorOuMenorQueOValorPermitido(numero)
    {
        return numero > maiorValor || numero < menorValor;
    }