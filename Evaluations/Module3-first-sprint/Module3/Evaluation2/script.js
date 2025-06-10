
async function getData() {

try {
    
    let res = await fetch("https://rickandmortyapi.com/api/character");
    let data = await res.json();
    console.log(data)

    let list = document.getElementById("list");
    data.results.forEach((element) => {
        let li = document.createElement("li");

        li.innerHTML = `
        <img src="${element.image}" alt="">
        <h3 class="name"> Name : ${element.name}</h3>
        <p class="species"> Species : ${element.species}</p>
        <p class=${element.status}>Status : ${element.status}</p>
        <p class="location">Location : ${element.location.name}</p>
        `;
        list.appendChild(li);
    });
} catch (error) {
    console.log(error.message)
}
    
   
}

getData();

document.getElementById('search').addEventListener('input',async(e)=>{
    let res = await fetch(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`);
    let data = await res.json();
    
    let list = document.getElementById("list");
    list.innerHTML = "";
    data.results.forEach((element) => {
        let li = document.createElement("li");
        

        li.innerHTML = `
        <img src="${element.image}" alt="">
        <h3 class="name"> Name : ${element.name}</h3>
        <p class="species"> Species : ${element.species}</p>
        <p class=${element.status}>Status : ${element.status}</p>
        <p class="location">Location : ${element.location.name}</p>
        `;
        list.appendChild(li);
    });
})

document.getElementById('filter').addEventListener('change',async(e)=>{
    let res = await fetch(`https://rickandmortyapi.com/api/character/?status=${e.target.value}`);
    let data = await res.json();
    
    let list = document.getElementById("list");
    list.innerHTML = "";
    data.results.forEach((element) => {
        let li = document.createElement("li");

        li.innerHTML = `
        <img src="${element.image}" alt="">
        <h3 class="name"> Name : ${element.name}</h3>
        <p class="species"> Species : ${element.species}</p>
        <p class=${element.status}>Status : ${element.status}</p>
        <p class="location">Location : ${element.location.name}</p>
        `;
        list.appendChild(li);
    });
})  

document.getElementById('species').addEventListener('change',async(e)=>{
    let res = await fetch(`https://rickandmortyapi.com/api/character/?species=${e.target.value}`);
    let data = await res.json();
    
    let list = document.getElementById("list");
    list.innerHTML = "";
    data.results.forEach((element) => {
        let li = document.createElement("li");

        li.innerHTML = `
        <img src="${element.image}" alt="">
        <h3 class="name"> Name : ${element.name}</h3>
        <p class="species"> Species : ${element.species}</p>
        <p class=${element.status}>Status : ${element.status}</p>
        <p class="location">Location : ${element.location.name}</p>
        `;
        list.appendChild(li);
    });
})

let page = 1 ;

document.getElementById('next').addEventListener('click',async(e)=>{
    page++;
    let res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    let data = await res.json();
    
    let list = document.getElementById("list");
    list.innerHTML = "";
    data.results.forEach((element) => {
        let li = document.createElement("li");

        li.innerHTML = `
        <img src="${element.image}" alt="">
        <h3 class="name"> Name : ${element.name}</h3>
        <p class="species"> Species : ${element.species}</p>
        <p class=${element.status}>Status : ${element.status}</p>
        <p class="location">Location : ${element.location.name}</p>
        `;
        list.appendChild(li);
    });
})

document.getElementById('pre').addEventListener('click',async(e)=>{
    if(page>1){
        page--;
        let res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        let data = await res.json();
        
        let list = document.getElementById("list");
        list.innerHTML = "";
        data.results.forEach((element) => {
            let li = document.createElement("li");
    
            li.innerHTML = `
            <img src="${element.image}" alt="">
            <h3 class="name"> Name : ${element.name}</h3>
            <p class="species"> Species : ${element.species}</p>
            <p class=${element.status}>Status : ${element.status}</p>
            <p class="location">Location : ${element.location.name}</p>
            `;
            list.appendChild(li);
        });
    }
})