<?php

$recepient = "port46.gendir@gmail.com";
$sitename = "Port46";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nПочта: $email \nТекст: $text";

$pagetitle = "Обратная связь с \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");