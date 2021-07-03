<?php
    
    $email = $_POST['user_email'];
    $subject = "Заявка с сайта";
    $message = "Вы получили это письмо, потому что оставили свой почтовый адрес на сайте.\n\nВаша ссылка на скачивание игры с бонусом: https://dropmefiles.com/0HKPa";
    $headers = "From: FutureCafe.ru <futurecafe@gmail.com>\r\nContent-type: text/plain; charset=utf-8 \r\n";
    mail ($email, $subject, $message, $headers);

    echo "<center><p style='color:#339900; font-size:18px;'>Мы отправили вам сообщение с ссылкой на почту! Возможно письмо могло попасть в папку &#34Спам&#34</p></center>";
    echo "<center><font size='3'><a href=index.php>Перейти на главную</a></font></center>";

?>