fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc").then((v)=>v.json()).then((v)=>{console.log(v.data);
display(v.data);
}).catch((err)=>{console.log(err)})

function display(a){
    document.getElementById("cont").innerHTML="";
    a.forEach((v)=>{
        let di=document.createElement("div");

        let country=document.createElement("h3");
        country.textContent="Country:"+v.country;

        let id=document.createElement("h2");
        id.textContent=`id:${v.id}`;

        let rank=document.createElement("h1");
        rank.textContent=`Rank:${v.Rank}`;

        let population=document.createElement("h4");
        population.textContent=`Population:${v.population}`;
        di.append(rank,id,country,population);
        document.getElementById("cont").append(di);
    })
};