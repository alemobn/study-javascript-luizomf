const paragrafos = document.querySelector('.paragrafos');
const paragrafosTags = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
const estilosContainer = getComputedStyle(document.querySelector('.container'));
const backgroundColorContainer = estilosContainer.backgroundColor;
const fontColor = estilosBody.getPropertyValue('--font-color');

for (let p of paragrafosTags) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = fontColor;
    p.style.borderRadius = '15px';
    p.style.padding = '10px';
    p.style.width = '100%'
}