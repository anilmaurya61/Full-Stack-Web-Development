window.onload=function(){
 let num=document.getElementById('inp')
 let list=document.getElementById('list')
 let print=document.getElementById('btn')

 print.onclick=function(){

    let N=parseInt(num.value)
    let listHTML=''
    for(let i=1; i<=N;i++){
       listHTML +='<li>' + i + '</li>'
    }
            list.innerHTML=listHTML;
}
}
