// Custom function to get cookie value by name.
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
var win;
$(document).ready(function(){
    $('.gh-header-actions').append('<div class="btn btn-sm btn-primary pr-mod">PR-Mod</div>');
    
    $('.pr-mod').click(function(){
        var url = window.location.href;
        url = url.replace("https://github.com/","")
        
        var server_ip = readCookie("SERVER_IP");
        var server_port = readCookie("SERVER_PORT");
        var server_url = "https://"+server_ip+":"+server_port+"/";

        if(!server_ip || !server_port){
            alert("Server credentials not set. Please open the PR-MOD extension and add server credentials.")
        }
        else{
            //var win = window.open(server_url+url);
            win = window.open("https://facebook.com", '_blank');

            win.addEventListener("unload", function(event){
                alert("hello");
            });          
        }

    });

})