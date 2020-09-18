let DimensaoZ = 0
let AlarmeDisparado = false
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Target)
        basic.pause(2000)
        DimensaoZ = input.acceleration(Dimension.Z)
        AlarmeDisparado = false
        basic.clearScreen()
    }
    // Ajuste a sensibilidade mudando o valor. Inicialmente definimos como 30.
    if (input.acceleration(Dimension.Z) < DimensaoZ - 30) {
        AlarmeDisparado = true
    }
    if (AlarmeDisparado) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.clearScreen()
    }
})
