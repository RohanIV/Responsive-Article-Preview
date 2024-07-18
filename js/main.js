document.addEventListener('DOMContentLoaded', function(){
    const mediaQuery = window.matchMedia("(min-width: 250px)");
    const btnOpen = document.getElementById("open");
    const btnClose = document.getElementById("close");
    const social = document.getElementById("social");
    const profile = document.getElementById("profile");
    const float_container = document.getElementById("float-container");

    function mediaChange(e){
        if (e.matches){
            btnOpen.addEventListener('click', toggleFooter);
            btnClose.addEventListener('click', toggleFooter);
        }else{
            btnOpen.removeEventListener('click', toggleFooter);
            btnClose.removeEventListener('click', toggleFooter);
        }
    }

    function toggleFooter(){
        if (social.style.display === 'none') {
            social.style.display = 'flex';
            profile.style.display = 'none';
        }else{
            social.style.display = 'none';
            profile.style.display = 'flex';
        }
    }

    mediaChange(mediaQuery);
    mediaQuery.addEventListener('change', mediaChange);
});