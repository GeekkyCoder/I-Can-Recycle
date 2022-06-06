const recycleBtn = document.getElementById("recycle-btn")
recycleBtn.addEventListener("click", recycle)
const recycleSelect = document.getElementById("recycle-select")
const recycleBin = document.getElementById("recycle-bin")
const infoParagraph = document.getElementById("info-paragraph")
const body = document.body
let numOfRecycledItems = 0
const newRecycledItemsUl = document.createElement("ul")
recycleBin.appendChild(newRecycledItemsUl)
const emptyBinBtn = document.getElementById("empty-btn")
emptyBinBtn.addEventListener("click", emptyBin)


    function recycle(){
     let recycledItem = recycleSelect.value
     numOfRecycledItems+=1
     if(recycledItem !='' && numOfRecycledItems <=10){
         let recycledItemLi = document.createElement('li')
         recycledItemLi.textContent = recycledItem
         newRecycledItemsUl.appendChild(recycledItemLi)
         recycledItemLi.classList.add('swing-in-top-fwd')
     }else if(numOfRecycledItems >=10){
         infoParagraph.textContent = 'Woahh, bin full!'
         recycleBin.classList.add('ul-warning')
         recycleBtn.style.display = 'none'
         emptyBinBtn.style.display = 'inline'
     }

}

function emptyBin(){
   recycleBin.classList.remove('ul-warning')
   emptyBinBtn.style.display = 'none'
   recycleBtn.style.display = 'inline'
   infoParagraph.textContent = 'Start Recycling Again'
   newRecycledItemsUl.innerHTML = ''
   numOfRecycledItems = 0
}








