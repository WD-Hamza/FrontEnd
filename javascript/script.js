const url = window.location.pathname;

const urlName = url.substring(url.lastIndexOf('/')+1)

if(urlName == 'index.html'){
    const element = document.getElementById('home');
    element.style.color = "gold";
}

else if (urlName == 'login.html'){
    const element = document.getElementById('login');
    element.style.color = "gold";}

    else if (urlName == 'singup.html'){
        const element = document.getElementById('singup');
        element.style.color = "gold";}

        else if (urlName == 'about.html'){
            const element = document.getElementById('about');
            element.style.color = "gold";}







