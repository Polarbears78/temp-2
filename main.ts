input.onButtonPressed(Button.A, function () {
    datalogger.logData([
    datalogger.createCV("temp", input.temperature()),
    datalogger.createCV("sound", input.soundLevel()),
    datalogger.createCV("light", input.lightLevel()),
    datalogger.createCV("wind", Environment.ReadWindSpeed(AnalogPin.P0))
    ])
})
datalogger.setColumns([
"temp",
"sound",
"light",
"wind"
])
