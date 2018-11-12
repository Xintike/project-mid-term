// AJAX
var xhr=new XMLHttpRequest();
xhr.open('get',"https://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery",true);
xhr.send();
xhr.onload=function(){
  var data = JSON.parse(xhr.responseText);
  
var InforList=document.querySelector('.InforList');
// areaoption

var areaOption = document.querySelector('.areaOption');
var areaArr={};
var areaStr='<option>'+'請選擇地區...'+'</option>';

// add area option
for (var i=0;data.length>i;i++){
  if(areaArr[data[i].ZipName_]==undefined){
    areaArr[data[i].ZipName_]=1;
  }else{
    areaArr[data[i].ZipName_]+=1;
  }
}
  
  for (ZipName_ in areaArr){
    areaStr +='<option>'+ZipName_+'</option>';
  }
areaOption.innerHTML = areaStr;
  
 // typeOption
var typeOption=document.querySelector('.typeOption');
var typeArr={};
var typeStr='<option>'+'請選擇類型...'+'</option>';
  
// add type option
  for (var j=0;data.length>j;j++){
  if(typeArr[data[j].InformDesc_]==undefined){
    typeArr[data[j].InformDesc_]=1;
  }else{
    typeArr[data[j].InformDesc_]+=1;
  }
}
  
  for (InformDesc_ in typeArr){
    typeStr +='<option>'+InformDesc_+'</option>';
  }
typeOption.innerHTML = typeStr;
  
// search from area & type
 var count1= document.querySelector('.count1');
 var search = document.querySelector('.search');

  search.addEventListener('click',function(e){
    var areaValue= areaOption.value;
    var typeValue= typeOption.value;
    var Information='';
    var count='';
    var total=0;
    for(var k=0;data.length>k;k++){
      
       if(data[k].ZipName_ == areaValue){
         if(data[k].InformDesc_ == typeValue){
         total +=1;
         Information +='<li>'+'<h4>'+'地點:'+data[k].address_+'</h4>'+'<h5>'+'報案狀況:'+data[k].BeforeDesc_+'</h5>'+'</li>';
        
       }}
    }
           count = '<h2>'+areaValue+'&nbsp'+typeValue+'&nbsp'+'有'+total+'處'+'</h2>';

    count1.innerHTML = count;  
    InforList.innerHTML = Information;
      
  })

  
}
