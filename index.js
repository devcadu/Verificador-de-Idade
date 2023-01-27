function verificar() {
    let dt = new Date()
    let fano = window.document.getElementById("ano").value;
    let ano = dt.getFullYear() - fano
    let resultado = window.document.getElementById("resultado");
    let genero = document.querySelector('input[name="sexo"]:checked').value;
    let imag = document.getElementById("imagem");

    if (fano > dt.getFullYear()) {
        resultado.innerHTML = `<h1>Ano inválido, por favor digite um ano inferior ou atual.</h1>`
    }

    else {

        if (ano == 1 && genero == "Masculino") {
            resultado.innerHTML = `<h1>Você é um bebê de ${ano} ano, e se identifica no gênero ${genero}</h1>`;
            imag.innerHTML = `<img src="imagens/bebe homem.jpg" id="imagem"></img>`
        }
        else if (ano == 1 && genero == "Feminino") {
            resultado.innerHTML = `<h1>Você é um bebê de ${ano} ano, e se identifica no gênero ${genero}</h1>`;
            imag.innerHTML = `<img src="imagens/bebe mulher.jpg" id="imagem"></img>`
        }

        else if (ano <= 4 && genero == "Masculino") {
            resultado.innerHTML = `<h1>Você é um bebê que tem ou irá fazer ${ano} anos, e se identifica no gênero ${genero}</h1>`;
            imag.innerHTML = `<img src="imagens/bebe homem.jpg" id="imagem"></img>`
        }
        else if (ano <= 4 && genero == "Feminino") {
            resultado.innerHTML = `<h1>Você é um bebê que tem ou irá fazer ${ano} anos, e se identifica no gênero ${genero}</h1>`;

            imag.innerHTML = `<img src="imagens/bebe mulher.jpg" id="imagem"></img>`
        }



        else if (ano > 4 && ano <= 12 && genero == "Masculino") {
            resultado.innerHTML = `<h1>Você é uma criança que tem ou irá fazer ${ano} anos, e se identifica no gênero ${genero}</h1>`;
            imag.innerHTML = `<img src="imagens/crianca m.jpg" id="imagem"></img>`

        }

        else if (ano > 4 && ano <= 12 && genero == "Feminino") {
            resultado.innerHTML = `<h1>Você é uma criança que tem ou irá fazer ${ano} anos, e se identifica no gênero ${genero}</h1>`;
            imag.innerHTML = `<img src="imagens/crianca f.jpg" id="imagem"></img>`

        }



        else if (ano > 12 && ano <= 23 && genero == "Masculino") {
            resultado.innerHTML = `<h1>Você é um adolescente que tem ou irá fazer ${ano} anos, e se identifica no gênero ${genero}</h1>`;
            imag.innerHTML = `<img src="imagens/adolescente m.jpg" id="imagem"></img>`
        }
        else if (ano > 12 && ano <= 23 && genero == "Feminino") {
            resultado.innerHTML = `<h1>Você é um adolescente que tem ou irá fazer ${ano} anos, e se identifica no gênero ${genero}</h1>`;
            imag.innerHTML = `<img src="imagens/adolescente f.jpg" id="imagem"></img>`
        }




        else if (ano > 23 && ano <= 40 && genero == "Masculino") {
            resultado.innerHTML = `<h1>Você é um jovem que tem ou irá fazer ${ano} anos, e se identifica no gênero ${genero}</h1>`;
            imag.innerHTML = `<img src="imagens/jovem masculino.jpg" id="imagem"></img>`

        }

        else if (ano > 23 && ano <= 40 && genero == "Feminino") {
            resultado.innerHTML = `<h1>Você é um jovem que tem ou irá fazer ${ano} anos, e se identifica no gênero ${genero}</h1>`;
            imag.innerHTML = `<img src="imagens/jovem feminina.jpg" id="imagem"></img>`

        }


        else if (ano > 40 && ano <= 90 && genero == "Masculino") {
            resultado.innerHTML = `<h1>Você é um idoso que tem ou irá fazer ${ano} anos, e se identifica no gênero ${genero}</h1>`;
            imag.innerHTML = `<img src="imagens/idoso.jpg" id="imagem"></img>`

        }

        else if (ano > 40 && ano <= 90 && genero == "Feminino") {
            resultado.innerHTML = `<h1>Você é um idosa que tem ou irá fazer ${ano} anos, e se identifica no gênero ${genero}</h1>`;
            imag.innerHTML = `<img src="imagens/idosa.jpg" id="imagem"></img>`

        }


        else {
            resultado.innerHTML = `<h1>Você tem ou irá fazer ${ano} anos que foram inválidos, e se identifica no gênero ${genero}</h1>`;
        }
    }
}