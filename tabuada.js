//obter os elemetnso da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obter o número informado
    const numero = Number(frm.inNumero.value);

    let resposta = ""
    //cria um laço de repetiçãio iniciando de 1 até 10
    for (let i = 1; i <=10; i++) {
        resposta += numero + "X" + i + "=" + (numero*i) + "\n";
        console.log(resposta)
    }
    //alterar o conteúdo da tag pre
    resp.innerText = resposta;
})