
var selectedColor = '';
var x = new Array();
x.push({
    name : '',
    color: 'red'
});
x.push({
    name : '',
    color: 'green'
});
x.push({
    name : '',
    color: 'blue'
});
x.push({
    name : '',
    color: 'yellow'
});

x.push({
    name : '',
    color: 'pink'
});

x.push({
    name : '',
    color: 'Fuchsia'
});


setDivs();
setInterval(nextPerson,1000);

$('#sel-colors').change(function (e) {
    selectedColor = e.target.value;
});

$('#add-btn').click(function () {
    x.push({
        name : $('#inp-name').val(),
        color : selectedColor
    });
    console.log(x[x.length-1].name)
    setDivs();
});

function setDivs() {
    $('.grid-1').empty();
    for(let c = 0; c<x.length; c++){
        $('.grid-1').append(`<div style="background-color: ${x[c].color}"><h1>${x[c].name}</h1></div>`);
    }
}

function nextPerson() {
    let last = x.pop();
    x.unshift(last);
    setDivs();
}
// ==============================================
