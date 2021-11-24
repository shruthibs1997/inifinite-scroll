var container = document.getElementById('container');
let j=1;
function loacontent(num=10){
    let i=0;
    while(i<num){
        const div = document.createElement('div');
        div.innerText=`masai student ${j}`
        div.style.fontSize="100px"
        container.append(div);
        i++;
        j++;
    }
}
loacontent();

window.addEventListener('scroll',()=>{
    if(window.scrollY +window.innerHeight>=document.documentElement.scrollHeight){
        loacontent()
    }
})