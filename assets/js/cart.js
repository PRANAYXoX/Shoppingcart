const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  readJSON(myObj);
};
xmlhttp.open("GET", "json.txt");
xmlhttp.send();
//---------------------------SERVER-READ-------------------------------------


var cosmetic_cart=new Array();
var household_cart=new Array();
function readJSON(obj)
{
    var category=obj["data"];
    for(var cat in category)
    {
        if(category[cat].name==="Cosmetics")
        {
           var cos_arr=category[cat].productList;
           for(var item in cos_arr)
           {
               cosmetic_cart.push(cos_arr[item]);
           }
        }
        if(category[cat].name==="Household")
        {
           var hh_arr=category[cat].productList;
           for(var item in hh_arr)
           {
               household_cart.push(hh_arr[item]);
           }
        }
    }
    renderStock();
}
var hh=document.getElementsByClassName('house-body');
var cb=document.getElementsByClassName('cos-body');
function renderStock()
{
    
    hh[0].innerHTML="";
    cb[0].innerHTML="";
    for(var item in household_cart)
    {
        renderHH(household_cart[item]);
    }

    for(var item in cosmetic_cart)
    {
        renderCC(cosmetic_cart[item]);
    }
    getData();
}

function renderHH(hhItem)
{
 var div=document.createElement('div');
 div.innerHTML=`<div class="hh-box box p-2">
                <div class="co-box">
                        <div class="container bg-success text-center">${hhItem.name}</div>
                        <div class="container bg-success text-center">${hhItem.price}</div>
                </div>
                <div class="container buy-stick bg-dark">
                    <div class="row py-1">
                        <div class="col-6 bg-success text-center">
                            <a class="add-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-category="HH" data-name="${hhItem.name}" data-price="${hhItem.price}"><i class="fa fa-cart-plus" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                </div>`;
hh[0].append(div);                
}

function renderCC(item)
{
    var div=document.createElement('div');
    div.innerHTML=`<div class="cos-box box p-2">
                   <div class="co-box">
                           <div class="container bg-success text-center">${item.name}</div>
                           <div class="container bg-success text-center">${item.price}</div>
                   </div>
                   <div class="container buy-stick bg-dark">
                       <div class="row py-1">
                           <div class="col-6 bg-success text-center">
                               <a  class="add-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-category="CC" data-name="${item.name}" data-price="${item.price}"><i class="fa fa-cart-plus" aria-hidden="true"></i></a>
                           </div>
                       </div>
                   </div>
                   </div>`;
   cb[0].append(div);                  
}

function getData()
{
    var get_item=document.getElementsByClassName('add-item');
    
    for(var i=0;i<get_item.length;i++)
    {
        get_item[i].addEventListener('click',function(){
            console.log("HELLO!");
        });
    }
}