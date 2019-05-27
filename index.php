<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/static/main.css">
    <title>Короткие ссылки для Telegram</title>
</head>
<body class="text-center">
    <div class="center_box">
        <?php if ($_SERVER['REQUEST_URI'] == '/'):?>
            <input type="text" id="url" class="form-control" placeholder="t.me/...">
            <button class="button" id="convert" type='button'>Конвертировать</button>
        <?php else: ?>
            <a id="link" class="button">Открыть в Telegram</a>
        <?php endif; ?>
    </div>

    <footer class="footer">
        <div class="container"></div>
    </footer>

    <script src="/static/main.js"></script>
</body>
</html>