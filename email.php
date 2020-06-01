<?php

$nome = addslashes($_GET["nome"]);
$email = addslashes($_GET["email"]);
$telefone = addslashes($_GET["telefone"]);
$evento = addslashes($_GET["evento"]);
$pessoas = addslashes($_GET["pessoas"]);
$data = addslashes($_GET["data"]);
$local = addslashes($_GET["local"]);
$msg = addslashes($_GET["msg"]);
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
echo 'success';
if(mail($to,$subjet,$body,$header)){
    echo 'success';
}else{
    echo 'error';
}
?>