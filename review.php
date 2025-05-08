<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['text'])) {
    $username = strip_tags($_POST['username'] ?? 'anonymous');
    $email = strip_tags($_POST['email'] ?? 'unknown@example.com');
    $text = strip_tags($_POST['text']);
    $rating = intval($_POST['rating'] ?? 0);

    $log = fopen("reviews.txt", "a");
    fwrite($log, date("Y-m-d H:i:s") . " | Rating: $rating | $username <$email>: $text" . PHP_EOL);
    fclose($log);
    $output_= "Thank you for your feedback!";
} else {
    $output_= "There was an error in processing your request at the moment!";
}
?>
