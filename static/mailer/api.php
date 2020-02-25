<?php

  require_once '../../vendor/autoload.php';

  //
  //  Variables
  //

  $sendServer = 'mail.starsoftware.it';
  $sendServerPort = 587;
  $sendUsername = 'filippo.benozzi@starsoftware.it';
  $sendPassword = 'cluthovuwi';

  $sendTo = 'filippobenozzi@gmail.com';

  //
  // end - Variables

  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  $rest_json = file_get_contents("php://input");
  $_POST = json_decode($rest_json, true);

  if( empty($_POST['firstName']) && empty($_POST['email']) ) {
    echo json_encode(
      [
        "sent" => false,
        "message" => $SendMailEmptyerrorMessage
      ]
    );
    exit();
  }

  if ($_POST){

    http_response_code(200);

    $transport = (new Swift_SmtpTransport($sendServer, $sendServerPort))
      ->setUsername($sendUsername)
      ->setPassword($sendPassword)
    ;

    $mailer = new Swift_Mailer($transport);

    $message = (new Swift_Message('Nuovo messaggio dal sito: ' . $_POST['firstName'] . ' ' . $_POST['lastName']))
      ->setFrom([$_POST['email'] => $_POST['firstName'] . ' ' . $_POST['lastName'] ])
      ->setTo([$sendTo => 'Dinamiza'])
      ->setBody($_POST['msg'])
    ;

    // Send the message
    $result = $mailer->send($message);

    echo json_encode(array("sent" => true));

  } else {
    // tell the user about error
    echo json_encode(
      [
        "sent" => false,
        "message" => $SendMailFailederrorMessage
      ]
    );
  }


