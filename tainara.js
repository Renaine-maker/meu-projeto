
let buttonElement = document.querySelector("#start button");

buttonElement.onclick = function(){
    let startElement = document.querySelector("#start");
    startElement.style.display = "none";
    let elogio = prompt("Primeiro, faça um elogio a sua incrível amiga que programou isso para você:");
    var lugar = prompt("Qual lugar você gostaria conhecer/viajar?");
    var casa = prompt("Qual casa você pertence? Sonserina, Grifinória, Lufa-Lufa ou Corvinal?");
    var marvel = prompt("Personagem da Marvel que você mais gosta?");
    var biscoito = prompt("Biscoito ou Bolacha?");
    var choco = prompt("Nescau ou Toddy?");
    var crush = prompt("Qual o único menino da nossa querida church que você daria uma chance?");

    console.log(elogio, lugar, casa, marvel, biscoito, choco, crush);


    document.write("<h1>Muito obrigada pelo " + elogio + "!</h1>");
    document.write("<h2>É o seguinte xuxu, programei suas respostas para aparecerem aqui em baixo, logo após, eu escrevi o que eu acho que você responderia e vamos comparar pra ver se acertei!</h2>" + "<br/> <br/>");
    document.write("<h3>Suas respostas foram: <br/></h3>");
    document.write("Você gostaria de conhecer: " + lugar + "<br/>");
    document.write("Você pertence a casa: " + casa + "<br/>");
    document.write("Seu personagem da Marvel favorito é: " + marvel + "<br/>");
    document.write("Você prefere: " + biscoito + "<br/>");
    document.write("Você prefere: " + choco + "<br/>");
    document.write("O varão de fogo: " + crush + "<br/><br/>");
    

    document.write("<h3>Agora vamos ver o que eu acho que você responderia: <br/></h3>");
    document.write("Veio Gramado na minha mente, você fala de vez em quando." + "<br/>");
    document.write("Não entendo nadaaaa de Harry Potter, mas lufa-lufa é um péssimo nome, sonserina, vem de sonso, você não é sonsa, grifinólia todo mundo fala, chuto corvinal. <br/>");
    document.write("Espero  muito que você tenha escolhido Tony e Nat, porque nossa amizade depende disso! <br/>");
    document.write("Acredito que Biscoito. <br/>");
    document.write("Infelizmente você tem cara de Toddy." + "<br/>");
    document.write("O varão de fogo: Apostei todas minhas fichas no cabelinho. <br/><br/>");
}



   