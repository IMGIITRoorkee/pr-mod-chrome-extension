$(document).ready(function(){
    $('.gh-header-actions').append('<div class="btn btn-sm btn-primary pr-mod">PR-Mod</div>');
    
    $('.pr-mod').click(function(){
        var url = window.location.href;
        url = url.replace("https://github.com/","")
        window.location.href = "http://localhost:5000/"+url;
    });
})