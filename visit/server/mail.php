<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$recepient = "sirina2005@mail.ru";
	$sitename = "kvartira-na-sutki.com";

	$name = trim($_POST["name"]);
	$phone = trim($_POST["phone"]);
	$message = "Имя: $name \nТелефон: $phone";

	$pagetitle = "Заявка с \"$sitename\"";
	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
}