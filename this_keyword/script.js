function checkthis(){
    console.log(this)
}

var obj ={
    a:10,
    b=`abdj`,
    c=true,
    d=function(){
        console.log(this)
    }
}