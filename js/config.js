var BaseUrl =  "http://103.248.152.130:1049";
var ResourceUrl = 'http://103.248.152.130:2099/ttshenshou/';

if(window.location.pathname!='/'
    &&window.location.pathname!='/index.html'
    &&window.location.pathname!='/site/login.html'
    &&window.location.pathname!='/site/wxredd.html')
{
    var wwid=window.localStorage.getItem("wwid");
    if(!wwid)
    {
        localStorage.setItem('enter_url',encodeURIComponent(window.location.href));
        window.location.href = '/index.html';
    }
}


        