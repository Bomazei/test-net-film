const items = document.querySelectorAll('.item')
const item = document.querySelector('.item')
const itemsWrapper = document.querySelector('.items-wrapper')
const arLeft = document.querySelector('.arrow-left')
const arRight = document.querySelector('.arrow-right')
let pos = 0
const itemWidth = parseFloat(getComputedStyle(items[0]).width)


arLeft.style.opacity = '0'


arRight.addEventListener('click', () => {
    
    if (pos < items.length/4) {
        pos++
        itemsWrapper.style.transform = `translateX(-${pos*(itemWidth+20)*3}px)`
        arLeft.style.opacity = '1'
    }
    if (pos > items.length/4){
        arRight.style.opacity = '0'
        itemsWrapper.style.transform = `translateX(-${pos*(itemWidth + 20)*2.6}px)`
    } 
 
})
arLeft.addEventListener('click', () => {
    
    if (pos > 0) {
        pos--
        itemsWrapper.style.transform = `translateX(-${pos*(itemWidth+20)*3}px)`
        arRight.style.opacity = '1'
    }
    if (pos === 0){
        arLeft.style.opacity = '0'
    }
    
    
})
