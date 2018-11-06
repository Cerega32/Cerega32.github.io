<?php
//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
require("vendor/autoload.php");
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	// Конфигурация траспорта
	$transport = (new Swift_SmtpTransport('smtp.beget.com', 465, 'ssl'))
	  ->setUsername('manager@sailingtrips.ru')
	  ->setPassword('s2EnkPCa')
	  ;

	$message = (new Swift_Message('Описание вашего будущего путешествия'))
	  ->setFrom(['manager@sailingtrips.ru' => 'Путешествия под парусами'])
	  ->setTo(trim($_POST['email']))
	  ->setContentType("text/html; charset=UTF-8")
	  ->attach(Swift_Attachment::fromPath('Marshryt_Tyra.pdf'))
	  ;

	$message->setBody(
	'<html>' .
	'<body>' .
	'<table align="center" width="100%" style="background: #ffffff;" cellpadding="0" cellspacing="0" border="0">' .
	'<tbody>' .
	'<tr><td align="center">' .
	'<table align="center" style="width: 624px;max-width: 624px;" cellpadding="0" cellspacing="0" border="0">' .
	'<tr>' .
	'<td><h2>Ваша яхта подана и ждёт вас в Испании<br> со 10 по 17 ноября!</h2></td>' . 
	'<td><img src="' . $message->embed(Swift_Image::fromPath('img/icon-spain.png')) . '" alt="Image" /></td>' .
	'</tr>' .
	'<tr><td>' .
	'Добро пожаловать на борт! Приготовьтесь к покорению Атлантического океана. Мы совместили активный отдых и тренинг по управлению стрессом. Где, как ни в кристально чистых водах океана, под шелест парусов, в дали от толп туристов и шума мегаполисов, остаться на едине с собой.' .
	'</td></tr>' .
	'<tr><td>' .
	'<h4>Файл с подробным описанием путешествия во вложениях</h4>' .
	'</td></tr>' .
	'<tr><td>' .
	'<h4>Для бронирования места пишите в WhatsApp: <a class="header__reference" href="https://wa.me/79653957247" target="_blank">+7 965-395-72-47</a><br>или пишите на почту: <a class="header__reference" href="mailto:sailingtrips@yandex.ru" target="_blank">sailingtrips@yandex.ru</a></h4>' .
	'</td></tr>' .
	'</table>' .
	'</td></tr>' .
	'</tbody></table>' .
	'</body>' .
	'</html>',
	'text/html'
	);

	$headers = $message->getHeaders();
	$headers->addTextHeader('Precedence', 'bulk');

	// Отправка сообщения
	$mailer = new Swift_Mailer($transport);
	$result = $mailer->send($message);

	$messageadmin = (new Swift_Message('Заявка с сайта'))
	  ->setFrom(['manager@sailingtrips.ru' => 'Путешествия под парусами'])
	  ->setTo('sailingtrips@yandex.ru')
	  ->setContentType("text/html; charset=UTF-8")
	  ;

	$messageadmin->setBody('Имя: ' . $_POST['name'] . ' | Емейл: ' . $_POST['email'] . ' | Телефон: ' . $_POST['tel'] . ' | С какой формы заявка: ' . $_POST['form']);

	$headersadmin = $messageadmin->getHeaders();
	$headersadmin->addTextHeader('Precedence', 'bulk');

	// Отправка сообщения
	$maileradmin = new Swift_Mailer($transport);
	$resultadmin = $maileradmin->send($messageadmin);

	if ($result)
	{
	  echo "Sent\n";
	}
	else
	{
	  echo "Failed\n";
	}

	if ($resultadmin)
	{
	  echo "Sent\n";
	}
	else
	{
	  echo "Failed\n";
	}
}