const getCss = document.querySelector('#loadCss'); 
getCss.onclick = ()=>{
    const xhr = new XMLHttpRequest();
    let response;
    xhr.open('GET','./style.css');
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
