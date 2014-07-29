<?php
//if "email" variable is filled out, send email
  if (isset($_POST['do']) && $_POST['do'] == 'sendEmail')  {

      //Email information
      $admin_email = "turcoandrea@gmail.com";
      $email = $_POST['email'];
      $subject = 'new mail from '.$_POST['name'];
      $comment = $_POST['message'];

      //send email
      mail($admin_email, "$subject", $comment, "From:" . $email);

      //Email response
      header('Location: http://www.turcoandrea.it/index.html?send=ok');
      exit;
  }else{
    //Email response
      header('Location: http://www.turcoandrea.it/index.html?send=error');
      exit;
  }

?>