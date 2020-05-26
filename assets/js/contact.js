function contact (){
    const nome = document.getElementById("nome").value;
    const pedido = document.getElementById("pedido").value;
    const endereco = document.getElementById("endereco").value;
    const mensagem = `Olá,%20boa%20noite!%20Gostaria%20de%20fazer%20um%20pedido.%0D%0D*Nome*:%20${nome}%0D%0D*Pedido*:%20${pedido}%0D%0D*Endereço*:%20${endereco}%20`;

    window.open(`https://wa.me/554299542190?text=${mensagem}`);
}