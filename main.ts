let x = 0
let y = 0
function 燈數 (num: number) {
    let num = 0
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14 && num <= 16) {
        x = 0
        y = 17 - num
    } else {
    	
    }
    led.plot(x, y)
}
basic.forever(function () {
	
})
