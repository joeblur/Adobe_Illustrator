// Define the colors and their percentages
var colors = [
    { color: new RGBColor(), percentage: 30 },  // Color 1
    { color: new RGBColor(), percentage: 35 },  // Color 2
    { color: new RGBColor(), percentage: 20 },  // Color 3
    { color: new RGBColor(), percentage: 15 }   // Color 4
];

// Set the RGB values for each color
colors[0].color.red = 218; colors[0].color.green = 201; colors[0].color.blue = 184;   // #dac9b8
colors[1].color.red = 200; colors[1].color.green = 191; colors[1].color.blue = 174;   // #c8bfae
colors[2].color.red = 222; colors[2].color.green = 206; colors[2].color.blue = 183;   // #decad7
colors[3].color.red = 179; colors[3].color.green = 172; colors[3].color.blue = 162;   // #b3aca2

// Calculate cumulative percentages
var cumulativePercentages = [];
var total = 0;
for (var i = 0; i < colors.length; i++) {
    total += colors[i].percentage;
    cumulativePercentages.push(total);
}

// Function to get a random color based on percentages
function getRandomColor() {
    var rand = Math.random() * 100;
    for (var i = 0; i < cumulativePercentages.length; i++) {
        if (rand <= cumulativePercentages[i]) {
            return colors[i].color;
        }
    }
    return colors[colors.length - 1].color;  // Fallback to the last color
}

// Apply random colors to selected objects
var selection = app.activeDocument.selection;
for (var i = 0; i < selection.length; i++) {
    if (selection[i].typename === "PathItem") {
        selection[i].fillColor = getRandomColor();
    }
}