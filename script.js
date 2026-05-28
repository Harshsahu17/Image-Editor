let filters = {
    brightness: {
        name: 'Brightness',
        unit: '%',
        value: 100,
        min: 0,
        max: 200,
    },
    contrast: {
        name: 'Contrast',
        unit: '%',
        value: 100,
        min: 0,
        max: 200,
    },
    saturation: {
        name: 'Saturation',
        unit: '%',
        value: 100,
        min: 0,
        max: 200,
    },
    hueRotation: {
        name: 'Hue Rotation',
        unit: 'deg',    
        value: 0,
        min: 0,
        max: 360,
    },
    blur: {
        name: 'Blur',
        unit: 'px',
        value: 0,
        min: 0,
        max: 20,
    },
    grayscale: {
        name: 'Grayscale',
        unit: '%',
        value: 0,
        min: 0,
        max: 100,
    },
    sepia: {
        name: 'Sepia',
        unit: '%',
        value: 0,
        min: 0,
        max: 100,
    },
    opacity: {
        name: 'Opacity',
        unit: '%',  
        value: 100,
        min: 0,
        max: 100,
    },
    invert: {
        name: 'Invert',
        unit: '%',
        value: 0,
        min: 0,
        max: 100,
    },
}

const imageCanvas = document.querySelector('#image-canvas');
const imgInput = document.querySelector('#image-input');
const canvasCtx = imageCanvas.getContext('2d');
const resetBtn = document.querySelector('#reset-btn');
const downloadBtn = document.querySelector('#download-btn');
let file = null;
let image = null;

const filtersContainer = document.querySelector('.filters');
const presetsContainer = document.querySelector('.presets');

function createFilterElement(name, unit, value, min, max) {
    const filterElement = document.createElement('div');
    filterElement.classList.add('filter'); 
    
    const input = document.createElement('input');
    input.type = 'range';
    input.min = min;
    input.max = max;
    input.value = value;
    input.id = name;
    input.unit = unit;

    const p = document.createElement('p');
    p.innerText = name;

    filterElement.appendChild(p);
    filterElement.appendChild(input);

    input.addEventListener('input', () => {
        filters[name].value = input.value;
        applyFilters();
    });

    return filterElement;
}

function createFilters() {
    Object.keys(filters).forEach(key => {
        const filter = filters[key];
        const filterElement = createFilterElement(key, filter.unit, filter.value, filter.min, filter.max);
        filtersContainer.appendChild(filterElement);
});
}
createFilters();

imgInput.addEventListener('change', (event) => {
    file = event.target.files[0];
    const imagePlaceholder = document.querySelector('.placeholder');
    imageCanvas.style.display = 'block';
    imagePlaceholder.style.display = 'none';
    
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
        image = img;
        imageCanvas.width = img.width;
        imageCanvas.height = img.height;
        canvasCtx.drawImage(img, 0, 0);
    }
});

function applyFilters() {
    canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    canvasCtx.filter = `
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.contrast.value}${filters.contrast.unit})
    saturate(${filters.saturation.value}${filters.saturation.unit})
    hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
    blur(${filters.blur.value}${filters.blur.unit})
    grayscale(${filters.grayscale.value}${filters.grayscale.unit})
    sepia(${filters.sepia.value}${filters.sepia.unit})
    opacity(${filters.opacity.value}${filters.opacity.unit})
    invert(${filters.invert.value}${filters.invert.unit})
    `.trim();
    canvasCtx.drawImage(image, 0, 0);
}

resetBtn.addEventListener('click', () => {
    filters = {
    brightness: {
        name: 'Brightness',
        unit: '%',
        value: 100,
        min: 0,
        max: 200,
    },
    contrast: {
        name: 'Contrast',
        unit: '%',
        value: 100,
        min: 0,
        max: 200,
    },
    saturation: {
        name: 'Saturation',
        unit: '%',
        value: 100,
        min: 0,
        max: 200,
    },
    hueRotation: {
        name: 'Hue Rotation',
        unit: 'deg',    
        value: 0,
        min: 0,
        max: 360,
    },
    blur: {
        name: 'Blur',
        unit: 'px',
        value: 0,
        min: 0,
        max: 20,
    },
    grayscale: {
        name: 'Grayscale',
        unit: '%',
        value: 0,
        min: 0,
        max: 100,
    },
    sepia: {
        name: 'Sepia',
        unit: '%',
        value: 0,
        min: 0,
        max: 100,
    },
    opacity: {
        name: 'Opacity',
        unit: '%',  
        value: 100,
        min: 0,
        max: 100,
    },
    invert: {
        name: 'Invert',
        unit: '%',
        value: 0,
        min: 0,
        max: 100,
    },
    }
    applyFilters();

    filtersContainer.innerHTML = "";
    createFilters();
});

downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = imageCanvas.toDataURL();
    link.click();
});

const presets = {

    vintage: {
        name: "Vintage",
        brightness: 110,
        contrast: 90,
        saturation: 85,
        hueRotation: 0,
        blur: 1,
        grayscale: 10,
        sepia: 45,
        opacity: 100,
        invert: 0,
    },

    blackWhite: {
        name: "Black & White",
        brightness: 105,
        contrast: 120,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayscale: 100,
        sepia: 0,
        opacity: 100,
        invert: 0,
    },

    cinematic: {
        name: "Cinematic",
        brightness: 95,
        contrast: 140,
        saturation: 120,
        hueRotation: 340,
        blur: 0,
        grayscale: 10,
        sepia: 15,
        opacity: 100,
        invert: 0,
    },

    coolBlue: {
        name: "Cool Blue",
        brightness: 105,
        contrast: 110,
        saturation: 120,
        hueRotation: 180,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0,
    },

    warmSunset: {
        name: "Warm Sunset",
        brightness: 115,
        contrast: 110,
        saturation: 140,
        hueRotation: 330,
        blur: 0,
        grayscale: 0,
        sepia: 20,
        opacity: 100,
        invert: 0,
    },

    dreamy: {
        name: "Dreamy",
        brightness: 120,
        contrast: 85,
        saturation: 110,
        hueRotation: 15,
        blur: 3,
        grayscale: 0,
        sepia: 10,
        opacity: 95,
        invert: 0,
    },

    neonPop: {
        name: "Neon Pop",
        brightness: 115,
        contrast: 160,
        saturation: 180,
        hueRotation: 45,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0,
    },

    moody: {
        name: "Moody",
        brightness: 80,
        contrast: 140,
        saturation: 70,
        hueRotation: 200,
        blur: 1,
        grayscale: 20,
        sepia: 10,
        opacity: 100,
        invert: 0,
    },

    faded: {
        name: "Faded",
        brightness: 110,
        contrast: 75,
        saturation: 80,
        hueRotation: 0,
        blur: 0,
        grayscale: 15,
        sepia: 10,
        opacity: 90,
        invert: 0,
    },

    retro: {
        name: "Retro",
        brightness: 105,
        contrast: 95,
        saturation: 130,
        hueRotation: 20,
        blur: 0,
        grayscale: 10,
        sepia: 35,
        opacity: 100,
        invert: 0,
    },

    cyberpunk: {
        name: "Cyberpunk",
        brightness: 110,
        contrast: 170,
        saturation: 190,
        hueRotation: 290,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0,
    },

    softGlow: {
        name: "Soft Glow",
        brightness: 125,
        contrast: 90,
        saturation: 115,
        hueRotation: 10,
        blur: 2,
        grayscale: 0,
        sepia: 5,
        opacity: 100,
        invert: 0,
    },

    noir: {
        name: "Noir",
        brightness: 90,
        contrast: 180,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayscale: 100,
        sepia: 10,
        opacity: 100,
        invert: 0,
    },

    pastel: {
        name: "Pastel",
        brightness: 120,
        contrast: 85,
        saturation: 130,
        hueRotation: 25,
        blur: 1,
        grayscale: 0,
        sepia: 5,
        opacity: 100,
        invert: 0,
    },

    horror: {
        name: "Horror",
        brightness: 70,
        contrast: 160,
        saturation: 60,
        hueRotation: 120,
        blur: 1,
        grayscale: 20,
        sepia: 0,
        opacity: 100,
        invert: 0,
    },

    frozen: {
        name: "Frozen",
        brightness: 110,
        contrast: 125,
        saturation: 90,
        hueRotation: 180,
        blur: 0,
        grayscale: 10,
        sepia: 0,
        opacity: 100,
        invert: 0,
    },

    goldenHour: {
        name: "Golden Hour",
        brightness: 120,
        contrast: 105,
        saturation: 140,
        hueRotation: 350,
        blur: 0,
        grayscale: 0,
        sepia: 25,
        opacity: 100,
        invert: 0,
    },

    matrix: {
        name: "Matrix",
        brightness: 85,
        contrast: 160,
        saturation: 70,
        hueRotation: 90,
        blur: 0,
        grayscale: 20,
        sepia: 0,
        opacity: 100,
        invert: 0,
    }

};

Object.keys(presets).forEach(presetName => {
    const presetButton = document.createElement('button');
    presetButton.classList.add('btn');
    presetButton.innerText = presetName;
    presetsContainer.appendChild(presetButton);  

    presetButton.addEventListener('click', () => {

        const preset = presets[ presetName ];

        Object.keys(filters).forEach(filterName => {
            filters[filterName].value = preset[filterName];
        });

        applyFilters()
        // Update filter sliders
        filtersContainer.innerHTML = "";
        createFilters()
    });
});