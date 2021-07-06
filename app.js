'use strict'

let form=document.getElementById('form');
let table=document.getElementById('table');
 let imgarray=['./img/action.png','./img/adventure.png','./img/animation.png','./img/comedy.png','./img/detective.png','./img/fantasy.png','./img/history.png','./img/horror.png','./img/musical.png','./img/pirate.png','./img/romantic.png','./img/sci-fi.png','./img/war.png','./img/western.png'];
function Movie(name,category,year,img){
this.name=name;
this.category=category;
this.year=year;
this.img=img;
Movie.all.push(this);
}

Movie.all=[];

function forData(e){
e.preventDefult();
    let name=e.target.namee.value;
    let category=e.target.Image.value;
    let year=getRandomInt(1997,2021);
    let img;
    if(category==='action'){
    img=imgarray=[0];
new Movie(name,category,year,img)
    }
     
    if(category==='adventure'){
        img=imgarray=[1];
    new Movie(name,category,year,img);
}

if(category==='animation'){
    img=imgarray=[2];
new Movie(name,category,year,img);
}

if(category==='comedy'){
    img=imgarray=[3];
new Movie(name,category,year,img);
}



if(category==='detective'){
    img=imgarray=[4];
new Movie(name,category,year,img);
}

if(category==='fantasy'){
    img=imgarray=[5];
new Movie(name,category,year,img);
}

if(category==='history'){
    img=imgarray=[6];
new Movie(name,category,year,img);
}

if(category==='horror'){
    img=imgarray=[7];
new Movie(name,category,year,img);
}


if(category==='musical'){
    img=imgarray=[8];
new Movie(name,category,year,img);
}


if(category==='pirate'){
    img=imgarray=[9];
new Movie(name,category,year,img);
}

if(category==='romantic'){
    img=imgarray=[10];
new Movie(name,category,year,img);
}

if(category==='sci-fi'){
    img=imgarray=[11];
new Movie(name,category,year,img);
}

if(category==='war'){
    img=imgarray=[12];
new Movie(name,category,year,img);
}

if(category==='western'){
    img=imgarray=[13];
new Movie(name,category,year,img);
}
localStorage.setItem('Input',JSON.stringify(Movie.all));

let tr=document.createElement('tr');
table.appendChild(tr);


let td1=document.createElement('img');
td1.src=img;
tr.appendChild(td1);

let td2=document.createElement('td');
tr.appendChild(td2);

let td3=document.createElement('td');
tr.appendChild(td3);
td3.textContent=`${name}`;

let td4=document.createElement('td');
tr.appendChild(td4);
td4.textContent=`${year}`;

form.addEventListener('submit','forData');
}
function render(){
    let datam=JSON.parse(localStorage.getItem('Input'));
    if (datam){
        Movie.all=datam;
        for(let i=0;i<datam.length;i++){
            console.log( datam);

          let  tr=document.createElement('tr');
            table.appendChild(tr);

            
let td1=document.createElement('img');
td1.src=img;
tr.appendChild(td1);

let td2=document.createElement('td');
tr.appendChild(td2);
td2.textContent=datam[i].category;

let td3=document.createElement('td');
tr.appendChild(td3);
td3.textContent=datam[i].name;

let td4=document.createElement('td');
tr.appendChild(td4);
td4.textContent=datam[i].year;

form.addEventListener('submit','forData');

        }
    }
}

render();





}




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }