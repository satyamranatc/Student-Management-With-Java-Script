let MyForm = document.getElementById("MyForm");
let ListOfData = document.getElementById("ListOfData");
let FormBtns = document.getElementsByClassName("FormBtns");

let allStudents = [];



function Display()
{

ListOfData.innerHTML = ""
console.log("Display",allStudents)
allStudents.forEach((e)=>{
    ListOfData.innerHTML += `
    <div class='Card'>
    <h1>${e.Id}</h1>
    <h1>${e.Name}</h1>
    <h1>${e.Age}</h1>
    <h1>${e.Class}</h1>
    </div>`
})
}



MyForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    let Obj = {
        Id: e.target[0].value,
        Name: e.target[1].value,
        Age: e.target[2].value,
        Class: e.target[3].value,
    }
    
    let IdExist = -1;
    for(let i in allStudents)
    {

        if(allStudents[i].Id == Obj.Id)
        {
            IdExist = i;
            break;
        }

    }
    if(IdExist == -1)
    {
        allStudents.push(Obj);
    }
    else{
        allStudents[IdExist].Age = Obj.Age;
        allStudents[IdExist].Class = Obj.Class;
        
    }
   
    Display();
})


FormBtns[0].onclick = ()=>{
document.querySelectorAll("input")[0].style.display = "block";
document.querySelectorAll("input")[1].style.display = "block";
document.querySelectorAll("input")[2].style.display = "block";
document.querySelectorAll("input")[3].style.display = "block";
document.querySelector("#Submit").style.display = "block";
MyForm.remove(Remove);
}

FormBtns[1].onclick = ()=>{
    document.querySelectorAll("input")[0].style.display = "block";
    document.querySelectorAll("input")[1].style.display = "none";
    document.querySelectorAll("input")[2].style.display = "block";
    document.querySelectorAll("input")[3].style.display = "block";
    document.querySelectorAll("input")[4].style.display = "block";
    document.querySelector("#Submit").style.display = "block";
    MyForm.remove(Remove);
}
FormBtns[2].onclick = ()=>{
    document.querySelectorAll("input")[1].style.display = "none";
    document.querySelectorAll("input")[2].style.display = "none";
    document.querySelectorAll("input")[3].style.display = "none";
    document.querySelector("#Submit").style.display = "none";
    let Remove = document.createElement("button");
    Remove.innerHTML = "Remove";
    Remove.type = "button"
    Remove.onclick = ()=>{
        let DeleteId = document.querySelectorAll("input")[0].value;
        allStudents = allStudents.filter((e)=>e.Id != DeleteId)
        Display();
    }
    MyForm.appendChild(Remove);
    
}

