
function render_table_from_json(data, location){
    let target = document.querySelector(location)
fetch(data)
.then(response => response.json())
.then(json => {
let header = `<thead><tr>`
Object.keys(json[0]).forEach((heading)=>header+=`<th>${heading}</th>`)
header+=`</tr></thead>`
target.innerHTML=``
target.innerHTML+=header
let Data= `<tbody>`
json.forEach(data=>{
    Data+=`<tr>`
    Object.values(data).forEach(values=>Data+=`<td>${values}</td>`)
    Data+=`</tr>`
})
Data+='<tbody>'
target.innerHTML+=Data
})

}

render_table_from_json('./images.json','table')