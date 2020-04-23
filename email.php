<?php
$nome = addslashes($_POST["nome"]);
$email = addslashes($_POST["email"]);
$telefone = addslashes($_POST["telefone"]);
$evento = addslashes($_POST["evento"]);
$pessoas = addslashes($_POST["pessoas"]);
$data = addslashes($_POST["data"]);
$local = addslashes($_POST["local"]);
$msg = addslashes($_POST["msg"]);
$data = date('d/m/Y', strtotime($data));

$to = "orcamento@djlfestas.com.br";
$subjet = "Contato DJL FESTAS";
$body = "Nome:".$nome. "\r\n".
        "Email: ".$email."\r\n".
        "Telefone: ".$telefone."\r\n".
        "Tipo de Evento: ".$evento."\r\n".
        "Quantidade de Pessoas: ".$pessoas."\r\n".
        "Data do Evento: ".$data."\r\n".
        "Local do Evento: ".$local."\r\n".
        "Mensagem: ".$msg."\r\n";
$header = "From:contrato@djlfestas.com.br"."\r\n"."Reply-To ".$email."\r\n"."X=Mailer:PHP/".phpversion();

if(mail($to,$subjet,$body,$header)){
    header('Location: contato.html?status=success');
}else{
    header('Location: contato.html?status=error');
}
?>