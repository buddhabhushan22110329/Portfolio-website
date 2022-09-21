const pro = document.getElementById("projectSection");
const abt = document.getElementById("abtID");
const cnt = document.getElementById("cntID");
const home = document.getElementById("homeSection");

var homeID = document.getElementById("homeID")
var projectID = document.getElementById("projectID")
var contactID = document.getElementById("contactID")
var aboutID = document.getElementById("aboutID")

function addHome(){
    document.body.append(home);

    homeID.style.color="#eb4a4c";
    aboutID.style.color="white";
    projectID.style.color="white";
    contactID.style.color="white";

    pro.remove();
    abt.remove();
    cnt.remove();
}

function addAbt(){
    document.body.append(abt); 

    aboutID.style.color="#eb4a4c";
    homeID.style.color="white";
    projectID.style.color="white";
    contactID.style.color="white";

    pro.remove();
    home.remove();
    cnt.remove();
}

function addPro(){
    document.body.append(pro); 

    homeID.style.color="white";
    aboutID.style.color="white";
    projectID.style.color="#eb4a4c";
    contactID.style.color="white";

    abt.remove();
    home.remove();
    cnt.remove();
}

function addCnt(){
    document.body.append(cnt); 

    homeID.style.color="white";
    aboutID.style.color="white";
    projectID.style.color="white";
    contactID.style.color="#eb4a4c";

    abt.remove();
    home.remove();
    pro.remove();
}

function lk(){
    window.open('https://www.linkedin.com/in/buddhabhushan-sirsat-0316591a0/');
}
function address(){
    window.open('https://goo.gl/maps/dQaCxrzSFtBPE5XQA');
}
function tin(){
    window.open('https://tindog-by-bhushan.netlify.app/');
}
function cl(){
    window.open('https://digitalclockbybhushan.netlify.app/');
}
function win(){
    window.open('https://win11bhushan.netlify.app/');
}