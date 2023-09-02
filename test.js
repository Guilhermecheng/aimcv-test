// prices
let originalPrice = document.querySelector('[data-testid="price-original"]').innerHTML.replace(/\R$&nbsp;/g, '').replace(".", "").replace(",",".").match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g, '')
let valuePix = document.querySelector('[data-testid="price-value"]').innerHTML.replace(/\R$&nbsp;/g, '').replace(".", "").replace(",",".").match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g, '')
let diference = (originalPrice - valuePix).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

// setting price diference to floating box
document.querySelector('[class="sc-fqkvVR lkyyeb"]').style.color = "rgb(89, 192, 11)"
document.querySelector('[class="sc-fqkvVR lkyyeb"]').innerHTML = `(${diference} de desconto)`
document.querySelector('[class="sc-hBtRBD gKtA-d"]').innerHTML = `(${diference} de desconto)`

// hiding bag button
document.querySelector('[data-testid="bagButton"]').style.display = 'none';
// changing buy button color
document.querySelector('[data-testid="buyButton"]').style.background = 'rgb(0, 134, 255)'

// float button changes
let floatButton = document.querySelector('[data-testid="float-button"]')
floatButton.querySelector('[class="sc-iHGNWf ijfQdp"]').innerHTML = 'COMPRAR'
floatButton.style.background = 'rgb(0, 134, 255)'
