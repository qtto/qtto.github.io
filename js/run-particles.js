particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "edge",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.85,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0.4,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 16,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 40,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 160,
        "line_linked": {
          "opacity": 0.3
        }
      },
      "bubble": {
        "distance": 240,
        "size": 2,
        "duration": 1,
        "opacity": 0.9,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 5
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});