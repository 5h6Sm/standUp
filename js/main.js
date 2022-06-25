    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.bezierCurveTo(100, 150, 200, 90, 300, 50, 400, 100);
    ctx.stroke();
