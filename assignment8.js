<!DOCTYPE html>
<html>
<head>
<style>
table, td {
  border: 1px solid black;
}
</style>
</head>
<body onload="tab()">

 

<script>
 
var info = [{firstName:"Ojas",lastName:"Modi",designation:"chiefarchitect", id:10,mobile:8571968050,dob:"21/05/1997",email:"ojasmodi@gmail.com"},
            {firstName:"Kunika",lastName:"Garg",designation:"ceo", id:11,mobile:9650289006,dob:"17/06/1997",email:"kunikagarg@gmail.com"},
            {firstName:"Mohit",lastName:"Khitani",designation:"coo", id:12,mobile:8939393237,dob:"18/01/1997",email:"mkhitani@gmail.com"},
            {firstName:"garvit",lastName:"garg",designation:"director", id:13,mobile:7576045637,dob:"14/09/1991",email:"hihello@gmail.com"},
            {firstName:"rajesh",lastName:"srivatsa",designation:"teamlead", id:14,mobile:7876043242,dob:"11/06/1994",email:"abcdef@gmail.com"}

]
var k;
var v;

function tab(){

    k = Object.keys(info[1])
    
    
    va =info.map((ele,index)=>{
        return Object.values(info[index])
    
    })

    
    var td =[];
    var text =[];
    var table = document.createElement('table');
    table.border = "1";
   
    var thead = document.createElement('thead');

table.appendChild(thead);

for(var i=0;i<keys.length;i++){
   
var temp =document.createTextNode(keys[i])
// 
// temp.;
thead.appendChild(document.createElement("th")).
appendChild(temp);
}



    for (var i = 0; i < values.length; i++){
        var tr = document.createElement('tr');    
        for(let j=0;j<keys.length;j++){
             td[j] =document.createElement('td');
             text[j] = document.createTextNode(values[i][j]);
             td[j].appendChild(text[j]);
             tr.appendChild(td[j])

        }

    table.appendChild(tr);
}
document.body.appendChild(table);
    
    
}


</script>

</body>
</html>