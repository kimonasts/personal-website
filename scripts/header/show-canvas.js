var canvasDiv = document.getElementById('particle-canvas');
var options = {
    particleColor: '#888',
    interactive: true,
    speed: 'slow',
    density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);