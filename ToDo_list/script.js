window.onload=function(){
    let data=document.getElementById('inp')
    let print=document.getElementById('btn')
    let list=document.getElementById('List')

    print.onclick=function(){
        //console.log(data.value)
        list.innerHTML+='<li>'+(data.value)+'</li>'
          
    }
    
}


// console.log('hello')