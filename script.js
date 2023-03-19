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

            }else if(document.getElementById("inputData").value == "portfolio"){

                window.open('https://kaungmyatthugui.vercel.app','_blank');
                document.getElementById("inputData").value = "";

            }else{
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
        <li>help --> you can check what you want to do</li>
        <li>about --> you can check about me</li>
        <li>portfolio --> you can check my portfolio</li>
        <li>clear --> you can clear all text</li>
    </ul>
    `;
}







