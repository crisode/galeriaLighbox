document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 700,  /* tiempo de salida del efecto */
		outDuration: 700   /* tiempo de entrada del efecto */
	});
});
