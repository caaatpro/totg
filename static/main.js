if (document.getElementById("convert")) {
    document.getElementById("convert").addEventListener("click", function () {
        document.getElementById("url").value = document.getElementById("url").value.replace("t.me", "to-tg.ru").replace("http://", "https://").replace("@", "https://to-tg.ru/");
    });
}

if (document.getElementById("link")) {
    var url = window.location.pathname.split("/");
    switch (url[1]) {
        case "socks":
            var str = "tg://socks" + window.location.search;
            break;
        case "joinchat":
            str = "tg://join?invite=" + url[2];
            break;
        case "addstickers":
            str = "tg://addstickers?set=" + url[2];
            break;
        case "proxy":
            str = "tg://" + url[1] + window.location.search;
            break;
        default:
            str = "tg://resolve?domain=" + url[1] + window.location.search.replace("?start=", "&start=");
            url[2] && (str = str + "&post=" + url[2])
    }
    document.getElementById("link").href = str;

    setTimeout(function () {
        window.location.replace(str);
    }, 1000);
}