$(document).ready(function(){
    var url = window.location.href;
    let urlSplit = url.split("/")
    let key = urlSplit[urlSplit.length - 1]
    if(key == "index.html"){
        $('.index').addClass('active-tab');
    }else if(key == "mads.html"){
        $('.mads').addClass('active-tab');
    } else if(key == "applications.html" || key == "solutions.html"){
        $('.customer').addClass('active-tab');
    } else if(key == "company.html" || key == "company.html#about" || key == "company.html#team" || key == "company.html#partners"){
        $('.company').addClass('active-tab');
    }else if(key == "contact.html"){
        $('.contact').addClass('active-tab');
    }else {
        $('.index').addClass('active-tab');

    }
});