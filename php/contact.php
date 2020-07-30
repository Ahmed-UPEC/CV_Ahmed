<?php 

    $array = array("firstname"=> "","name"=> "","email"=> "","phone"=> "","msg"=> "",
    "firstnameError"=> "","nameError"=> "","emailError"=> "","phoneError"=> "","msgError"=> "","isSucess"=> false);
    $emailTo = "ahmedfrancilien@gmail.com";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $array["firstname"] = verifyInput($_POST["firstname"]);
        $array["name"] = verifyInput($_POST["name"]);
        $array["email"] = verifyInput($_POST["email"]);
        $array["phone"] = verifyInput($_POST["phone"]);
        $array["msg"] = verifyInput($_POST["msg"]);
        $array["isSuccess"] = true;
        $emailText = "";

        if (empty($array["firstname"])) {
            $array["firstnameError"] = "Veuillez insérer votre prénom";
            $array["isSuccess"] = false;
        }
        else
            $emailText .= "Firstname : {$array["firstname"]} \n";

        if (empty($array["name"])) {
            $array["nameError"] = "Veuillez insérer votre nom";
            $array["isSucess"] = false;
        }
        else
            $emailText .= "Name : {$array["name"]} \n";


        if (!isEmail($array["email"])) {
            $array["emailError"] = "Veuillez enter un email valide";
            $array["isSucess"] = false;
        }
        else
            $emailText .= "Email : {$array["email"]} \n";

        if (!isPhone($array["phone"])) {
            $array["phoneError"] = "Veuillez insérer votre numéro de téléphone par exemple  0645759130 ou 0197854621";
            $array["isSuccess"] = false;
        }
        else
            $emailText .= "Phone (optionel) : {$array["phone"]} \n";

        if (empty($array["msg"])) {
            $array["msgError"] = "Veuillez insérer votre message";
            $array["isSuccess"] = false;
        }
        else
            $emailText .= "Message : {$array["msg"]} \n";
    

        if ( $array["isSuccess"] ) { // envoi mail
            $header = "From : {$array["firstname"]} {$array["name"]} <{$array["email"]}>\r\nReply-to: {$array["email"]}";
            mail($emailTo, "un message de votre site", $emailText, $header);
        }
        echo json_encode($array);
    }

   
    function verifyInput($var) {
        $var = trim($var);
        $var = stripcslashes($var);
        $var = htmlspecialchars($var);
        return $var;
    }

    function isEmail($var) {
        return filter_var($var, FILTER_VALIDATE_EMAIL);
    }

    function isPhone($var){
        return preg_match("/^[0-9 ]*$/", $var);
    }
    
?>