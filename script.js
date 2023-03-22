var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);


var res=fetch("https://restcountries.com/v2/all");
//the output of fetch is always a promise
res.then((data)=>data.json())
.then((data1)=>foo(data1))
//.catch((error)=>console.log(error));
//console.log(res);


function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++)
    {
row.innerHTML+=`<div class="col-md-4">
<div class="card" style="width: 18rem;">
  <img src="${data1[i].flag}" class="card-img-top" alt="Country Flags">
  <div class="card-body">
  <p class="card-header">${data1[i].name}</p>
    <p class="card-text"> Capital:${data1[i].capital}</p>
    <p class="card-text">Population:${data1[i].population}</p>
  </div>
</div>`
       
        }
        document.body.append(container);
}

//data of res is a promise
//to handle promise we need .then
 //var result=res.then((data)=>data.json());
 //again a promise from the data.json() method
 //console.log(result);
 //again we need .then to handle the promise
//result.then((data1)=>console.log(data1));