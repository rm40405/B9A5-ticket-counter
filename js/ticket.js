// function seat handleing
const selectSeat =document.getElementById('selected-seat');

function handleBySeat(event){
    console.log(event.innerText);
    selectSeat.innerHTML = `<li class="flex justify-between">
    <span>${event.innerText}</span>
    <span>economy</span>
    <span>550</span>
    </li>`
}