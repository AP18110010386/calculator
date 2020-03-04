<div>
<script type="text/javascript" src="script.js"></script>
</body>
const numbers = document.querySelectorAll(".number")
cosole.log(numbers)
const numbers = document.querySelectorAll(".number")
numbers.forEach((number)=> {
..console.log(number)
})
const numbers = document.querySelectorAll(".number")
..numbers.forEach((number) => {
..number.addEventListerner("click", () => {
....console.log("number is pressed")
..})
const numbers = document.querySelectorAll(".number")
numbers.forEach((number)=> {
..number.addEventListener("click", (event) => {
....console.log(event.target.value)
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
..calculatorScreen.value = number
}

