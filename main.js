// css
loadCss.onclick = ()=>{
    const xhr = new XMLHttpRequest();
    let response;
    xhr.open('GET','./public/style.css');
    xhr.send();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4){
            console.log(typeof xhr.response)
            response = xhr.response;
            const style = document.createElement('style');
            const styleTag = document.body.appendChild(style);
            styleTag.insertAdjacentHTML('beforeend',response);
        }
    }
}
//js
loadJs.onclick = () => {
    const xhr  = new XMLHttpRequest();
    xhr.open('GET','./public/1.js');
    xhr.send();
    xhr.onreadystatechange = function() {
        if(this.readyState === 4){
            const sc = document.createElement('script');
            const script = document.body.appendChild(sc);
            script.insertAdjacentHTML('beforeend',this.response);
        }
    }
}
// html
loadHtml.onclick = () => {
    const xhr  =  new XMLHttpRequest();
    xhr.open('GET','./public/1.html');
    xhr.send();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            const div = document.createElement('div');
            div.innerHTML = xhr.response;
            document.body.appendChild(div);
        }
    }
}