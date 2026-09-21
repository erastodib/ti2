let notas = [];
//let notas = [80, 67, 96, 48, 74, 57, 32, 10, 63, 88];

function calcularNotas() {

    let aprovados = 0;
    let recuperacao = 0;
    let reprovados = 0;
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {

        nota = notas[i];
        soma += nota;

        if (nota >= 0 && nota <= 100) {

            if (nota > 60)
                aprovados++;
            else if (nota > 50)
                recuperacao++;
            else reprovados++;
        }

        let media = soma / notas.length;
        document.getElementById("resultado").innerHTML =
            "Aprovados: " + aprovados + "<br>" +
            "Recuperação: " + recuperacao + "<br>" +
            "Reprovados: " + reprovados + "<br>" +
            "Média da turma: " + media.toFixed(2);
    }

    //calcularNotas();

    document.getElementById("adicionar").addEventListener("click", function () {
        let inputNota = document.getElementById("nota");
        let newNota = parseFloat(inputNota.value);

        if (!isNaN(newNota && newNota >= 0 && newNota <= 100){
            notas.push(newNota);
            inputNota.value = "";
            calcularNotas();
        }
        else alert("Nota inválida!");
    )
})

}
