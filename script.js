var order = document.getElementById('selor');
var price = document.getElementById('num');
var tabno = document.getElementById('tables');
var container1 =document.getElementById('table1');
var container2 =document.getElementById('table2');
var container3 =document.getElementById('table3');
var container4 =document.getElementById('table4');
var addbtn= document.getElementById('btn1');


window.addEventListener('DOMContentLoaded', ()=> {
   axios.get("https://crudcrud.com/api/a5da997605d644e08c9793b01f942e3e/orders")
   .then((response)=> {
       
       console.log(response)
       for(var i=0;i<response.data.length;i++){
           
         addtoscreen(response.data[i]);
       }
       
   })
})



addbtn.addEventListener('click',backendcall);



function backendcall() {
   if(order.value=='select Order' || price.value==''){
      alert('Please Enter Order Details')
   }
   else { 
   let myobj = {
      order_details: order.value ,
      price :price.value ,
      table_no :tabno.value
   };
   axios.post("https://crudcrud.com/api/a5da997605d644e08c9793b01f942e3e/orders", myobj)
   .then((response)=>{
      console.log(response);
   })
   .catch((err)=>{
      console.log(err);
   })

addtoscreen(myobj);
   }
}

function addtoscreen(myobj){

   if(tabno.value=='table1') {
   var li= document.createElement('li');
   li.id='list';
   li.textContent=myobj.order_details +"  : "+ myobj.price+" Rs.";
   

   var dltbtn= document.createElement('button');
   dltbtn.textContent='Delete';
   dltbtn.id='buttn';
   li.appendChild(dltbtn);
   container1.appendChild(li);

   dltbtn.onclick=()=> {
      container1.removeChild(li);
            axios.delete(`https://crudcrud.com/api/a5da997605d644e08c9793b01f942e3e/orders/${myobj._id}`)
            .then((response)=>{
               console.log(response);
            })
            .catch((err)=>{
               console.log(err);
            })
   }
   }

   else if(tabno.value=='table2') {
      var li= document.createElement('li');
      li.textContent=myobj.order_details +"  : "+ myobj.price+" Rs.";
       var dltbtn= document.createElement('button');
   dltbtn.textContent='Delete';
   dltbtn.id='buttn';
   li.appendChild(dltbtn);
   container2.appendChild(li);
   
   dltbtn.onclick=()=> {
      container2.removeChild(li);
            axios.delete(`https://crudcrud.com/api/a5da997605d644e08c9793b01f942e3e/orders/${myobj._id}`)
            .then((response)=>{
               console.log(response);
            })
            .catch((err)=>{
               console.log(err);
            })
   }
      }

     else if(tabno.value=='table3') {
         var li= document.createElement('li');
         li.textContent=myobj.order_details +"  : "+ myobj.price+" Rs.";
         var dltbtn= document.createElement('button');
         dltbtn.textContent='Delete';
         dltbtn.id='buttn';
         li.appendChild(dltbtn);
         container3.appendChild(li);
         
         dltbtn.onclick=()=> {
            container3.removeChild(li);
            axios.delete(`https://crudcrud.com/api/a5da997605d644e08c9793b01f942e3e/orders/${myobj._id}`)
            .then((response)=>{
               console.log(response);
            })
            .catch((err)=>{
               console.log(err);
            })
         }
         }

        else if(tabno.value=='table4') {
            var li= document.createElement('li');
            li.textContent=myobj.order_details +"  : "+ myobj.price+" Rs.";
            var dltbtn= document.createElement('button');
            dltbtn.textContent='Delete';
            dltbtn.id='buttn';
            li.appendChild(dltbtn);
            container4.appendChild(li);
            
            dltbtn.onclick=()=> {
               container4.removeChild(li);
            axios.delete(`https://crudcrud.com/api/a5da997605d644e08c9793b01f942e3e/orders/${myobj._id}`)
            .then((response)=>{
               console.log(response);
            })
            .catch((err)=>{
               console.log(err);
            })
            }
            }
}


