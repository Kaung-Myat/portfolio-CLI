$(document).ready(function(){
    $("#inputData").keypress(function(event){
        if(event.which == 13){
            event.preventDefault();
            if(document.getElementById("inputData").value == "about"){

                about();
                document.getElementById("inputData").value = "";

            }else if(document.getElementById("inputData").value == "help"){

                help();
                document.getElementById("inputData").value = "";

            }else if(document.getElementById("inputData").value == "clear"){

                document.getElementById("description").innerText = "";
                document.getElementById("inputData").value = "";

            }else if(document.getElementById("inputData").value == "gui"){
                window.open('https://kaungmyatthugui.vercel.app','_blank');
                document.getElementById("inputData").value = "";

            }else if(document.getElementById("inputData").value == "socials"){
                socials();
                document.getElementById("inputData").value = "";
            }else if(document.getElementById("inputData").value == "use 1"){
                window.open("https://github.com/Kaung-Myat","_blank");
                document.getElementById("inputData").value = "";
            }else if(document.getElementById("inputData").value == "use 2"){
                window.open('https://www.facebook.com/profile.php?id=100048568642212','_blank');
                document.getElementById("inputData").value = "";
            }else if(document.getElementById("inputData").value == "use 3"){
                window.open('https://www.instagram.com/kaungmyatthu_tharthar/','_blank');
                document.getElementById("inputData").value = "";
            }
            else{
                document.getElementById("description").innerHTML +=`
                <p id="aboutDesc" class="w-75" style="color: white;">
                    '${document.getElementById("inputData").value}' is not recognized.
                </p>
                `;
                document.getElementById("inputData").value = "";
            }
        }
    })
}) 

function about(){
    var aboutDesc = document.getElementById("description");
    aboutDesc.innerHTML += `
        <p id="aboutDesc" class="" style="color: white;">Hello I'm Kaung Myat Thu, 1st year of Computer Science Student from University Of Computer Studied Sittwe.

        Aside Knowledge from University,I'm currently learning Mobile Development with Flutter and Web Development with NodeJs in Ray Hub Academy Sittwe.</p>
    `;
}

function help(){
    var aboutDesc = document.getElementById("description");
    aboutDesc.innerHTML += `
    <ul style="color:white" class="w-75">
        <li>help --> To check what you want to do</li>
        <li>about --> To check about me</li>
        <li>gui --> To check my GUI portfolio</li>
        <li>clear --> To clear all text</li>
        <li>socials --> To check my social media accounts</li>
    </ul>
    `;
}

function socials(){
    var aboutDesc = document.getElementById("description");
    aboutDesc.innerHTML += `
        <ol>
            <li>GitHub</li>
            <li>FaceBook</li>
            <li>Instagram</li>
        </ol>
        <h6>Usage: use (social no) </h6>
        <p>eg.use 1</p>
    `
}







