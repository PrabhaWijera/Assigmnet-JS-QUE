var selectedColor = '';
var x = new Array();
x.push({
    name : 'A',
});
x.push({
    name : 'B',
});
x.push({
    name : 'C',

});
x.push({
    name : 'D',
});
setDivs();
setInterval(nextPerson, 1000);

$('#sel-colors').change(function (e) {
    selectedColor = e.target.value;
});

$('#add-btn').click(function () {
    x.push({
        name: $('#inp-name').val(),
        color: selectedColor
    });
    console.log(x[x.length - 1].name);
    setDivs();
});
function setDivs() {
    $('.grid-1').empty();
    for (let c = 0; c < x.length; c++) {
        if (x[c].color === 'Green') {
            $('.grid-1').append(`<div style="background-color: ${x[c].color}"><h1>${x[c].name}</h1></div>`);
        } else {
            $('.grid-1').append(`<div style="background-image: url('../assetts/4703093a70ba47001bf2c86319aae091.gif'); background-size: cover; background-repeat: no-repeat; background-size: 100% 100% ;"><h1>${x[c].name}</h1></div>`);
        }
    }
}


function nextPerson() {
    let last = x.pop();
    x.unshift(last);
    setDivs();
}
