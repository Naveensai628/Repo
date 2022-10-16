function printPass() {

    let x=document.getElementById("myform").elements[1].value

    

    if(x==='naveen'){
        let changeClass=document.querySelector('.btn');
       changeClass.classList.replace('btn','chn');
        
    }else    {
        let afterChange=document.querySelector('.chn');
        afterChange.classList.replace('chn','btn');  
    }


}