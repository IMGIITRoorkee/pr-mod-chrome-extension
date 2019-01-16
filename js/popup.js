document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("set").onclick = function() {
        var server_ip = document.getElementsByName("server_ip")[0].value;
        var server_port = document.getElementsByName("server_port")[0].value;

        chrome.cookies.set({
            url: 'https://github.com',
            name: 'SERVER_IP',
            value: server_ip
        });

        chrome.cookies.set({
            url: 'https://github.com',
            name: 'SERVER_PORT',
            value: server_port
        });

        window.close();
    }

    document.getElementById("reset").onclick = function(){
        chrome.cookies.remove({
            url: 'https://github.com',
            name: 'SERVER_IP'
        });

        chrome.cookies.remove({
            url: 'https://github.com',
            name: 'SERVER_PORT'
        });
    }

});