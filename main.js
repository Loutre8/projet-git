<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message de Bienvenue</title>
    <script>
        function afficherMessage() {
            var date = new Date();
            var heure = date.getHours();
            var message;

            if (heure < 12) {
                message = "Bonjour !";
            } else if (heure < 18) {
                message = "Bon après-midi !";
            } else {
                message = "Bonsoir !";
            }

            document.getElementById("message").innerHTML = message;
        }
    </script>
</head>
<body onload="afficherMessage()">
    <h1 id="message"></h1>
</body>
</html>
