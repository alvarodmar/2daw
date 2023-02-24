window.onload = function() {
	var canvas = document.getElementById("linea1");
		if (canvas && canvas.getContext) {
		var ctx = canvas.getContext("2d");
			if (ctx) {
                ctx.fill
				ctx.lineWidth = 3;
				ctx.strokeStyle = "#1E90FF";
				ctx.beginPath();
				ctx.moveTo(20, 130);
				ctx.lineTo(230, 20);
                ctx.stroke();


                ctx.lineWidth = 10;
				ctx.strokeStyle = "#f00";
				//dibuja la primera línea 
				ctx.beginPath();
				ctx.moveTo(200, 25);
				ctx.lineTo(230, 250);
                ctx.stroke();
                ctx.strokeStyle = "#1E90FF";
				// dibuja una segunda línea  MÁS FINA;
				ctx.translate(0, .7);
				ctx.beginPath();
				ctx.moveTo(20, 50);
				ctx.lineTo(230, 230);
				ctx.stroke();
			}
		}
}