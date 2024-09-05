const getValue=(ClassName)=>{

    return document.querySelector(ClassName).value;
};

export default getValue;

export const createTag=(tag,value)=>{
    let tagName=document.createElement(tag);
    if(tag=="img"){
        tagName.src=value;
    }
    else{
        tagName.innerhtml=value;
    }
    return tagName;
};
// const getValue = (className) => {
//     return document.querySelector(className).value;
// };

// export default getValue;

// export const createTag = (tag, value) => {
//     let tagName = document.createElement(tag);
//     if (tag == "img") {
//         tagName.src = value;
//     }
//     else {
//         tagName.innerHTML = value;
//     }
//     return tagName;
// };