function calcular() {

let num = document.getElementById('n1')
let tab = document.getElementById('seltab')

if(num.value.length == 0) {
    alert("Por favor , coloque um número")
} else {
    let n = Number(num.value)
    tab.innerHTML = "" // Elimina itens anteriores
    for(let c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        tab.appendChild(item)
    }
}

}
