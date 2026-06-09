
// JavaScript for the alien builder page
// event listeners for website and builder
document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-button');
  const builderPanel = document.getElementById('builder-panel');
  const introPanel = document.getElementById('intro-panel');
  

  const bodyEl = document.getElementById('alien-body');
  const eyeColorEl = document.getElementById('alien-eyeColor');
  const pupilsEl = document.getElementById('alien-pupils');
  const mouthEl = document.getElementById('alien-mouth');
  const nosesEl = document.getElementById('alien-Noses');
  const earsEl = document.getElementById('alien-pupils');
  const blushEl = document.getElementById('alien-blush');
  const browsEl = document.getElementById('alien-brows');
  

  const bodyImg = document.getElementById('alien-body-img');
  const eyeColorImg = document.getElementById('alien-eyeColor-img');
  const pupilsImg = document.getElementById('alien-pupils-img');
  const mouthImg = document.getElementById('alien-mouth-img');
  const nosesImg = document.getElementById('alien-noses-img');
  const earsImg = document.getElementById('alien-ears-img');
  const blushImg = document.getElementById('alien-blush-img');
  const browsImg = document.getElementById('alien-brows-img');
  

  const bodyLabel = document.getElementById('body-label');
  const eyeColorLabel = document.getElementById('EyeColor-label');
  const pupilsLabel = document.getElementById('Pupils-label');
  const mouthLabel = document.getElementById('mouth-label');
  const nosesLabel = document.getElementById('noses-label');
  const earsLabel = document.getElementById('ears-label');
  const blushLabel = document.getElementById('blush-label');
  const browsLabel = document.getElementById('brows-label');
  



  // array for features, the state variable chooses which of these are selected
  const variants = {
    body: [
      { label: 'body1', className: 'body-0', src: 'images/bodies/body-0.png' },
      { label: 'body2', className: 'body-1', src: 'images/bodies/body-1.png' },
      { label: 'body3', className: 'body-2', src: 'images/bodies/body-2.png' },
      { label: 'body4', className: 'body-3', src: 'images/bodies/body-3.png' },
      { label: 'body5', className: 'body-4', src: 'images/bodies/body-4.png' },
      { label: 'body6', className: 'body-5', src: 'images/bodies/body-5.png' },
      { label: 'body7', className: 'body-6', src: 'images/bodies/body-6.png' },
      { label: 'body8', className: 'body-7', src: 'images/bodies/body-7.png' },
      { label: 'body9', className: 'body-8', src: 'images/bodies/body-8.png' },
    ],
    eyeColor: [
      { label: 'Eye Color1', className: 'eyeColor-0', src: 'images/eye_color/eyecolor-0.png' },
      { label: 'Eye Color2', className: 'eyeColor-1', src: 'images/eye_color/eyecolor-1.png' },
    ],
    pupils: [
      { label: 'pupils1', className: 'pupils-0', src: 'images/pupils/pupils-0.png' },
      { label: 'pupils2', className: 'pupils-1', src: 'images/pupils/pupils-1.png' },
      { label: 'pupils3', className: 'pupils-2', src: 'images/pupils/pupils-2.png' },
      { label: 'pupils4', className: 'pupils-3', src: 'images/pupils/pupils-3.png' },
      { label: 'pupils5', className: 'pupils-4', src: 'images/pupils/pupils-4.png' },
      { label: 'pupils6', className: 'pupils-5', src: 'images/pupils/pupils-5.png' },
      { label: 'pupils7', className: 'pupils-6', src: 'images/pupils/pupils-6.png' },
      { label: 'pupils8', className: 'pupils-7', src: 'images/pupils/pupils-7.png' },
      { label: 'pupils9', className: 'pupils-8', src: 'images/pupils/pupils-8.png' },
      
    ],
    brows: [
      { label: 'brows1', className: 'brows-0', src: 'images/brows/brow-0.png' },
      { label: 'brows2', className: 'brows-1', src: 'images/brows/brow-1.png' },
      { label: 'brows3', className: 'brows-2', src: 'images/brows/brow-2.png' },
      { label: 'brows4', className: 'brows-3', src: 'images/brows/brow-3.png' },
      { label: 'brows5', className: 'brows-4', src: 'images/brows/brow-4.png' },
      
    ],
    blush: [
      { label: 'blush1', className: 'blush-0', src: 'images/blush/blush-0.png' },
      { label: 'blush2', className: 'blush-1', src: 'images/blush/blush-1.png' },
      { label: 'blush3', className: 'blush-2', src: 'images/blush/blush-2.png' },
      { label: 'blush4', className: 'blush-3', src: 'images/blush/blush-3.png' },
      { label: 'blush5', className: 'blush-4', src: 'images/blush/blush-4.png' },
      { label: 'blush3', className: 'blush-2', src: 'images/blush/blush-5.png' },
      { label: 'blush4', className: 'blush-3', src: 'images/blush/blush-6.png' },
      { label: 'blush5', className: 'blush-4', src: 'images/blush/blush-7.png' },
    ],
    mouths: [
      { label: 'mouths1', className: 'mouths-0', src: 'images/mouths/mouth-0.png' },
      { label: 'mouths2', className: 'mouths-1', src: 'images/mouths/mouth-1.png' },
      { label: 'mouths3', className: 'mouths-2', src: 'images/mouths/mouth-2.png' },
      { label: 'mouths4', className: 'mouths-3', src: 'images/mouths/mouth-3.png' },
      { label: 'mouths5', className: 'mouths-4', src: 'images/mouths/mouth-4.png' },
      { label: 'mouths6', className: 'mouths-5', src: 'images/mouths/mouth-5.png' },
      { label: 'mouths7', className: 'mouths-6', src: 'images/mouths/mouth-6.png' },
      { label: 'mouths8', className: 'mouths-7', src: 'images/mouths/mouth-7.png' },
    ],
    noses: [
      { label: 'noses1', className: 'noses-0', src: 'images/noses/nose-0.png' },
      { label: 'noses2', className: 'noses-1', src: 'images/noses/nose-1.png' },
      { label: 'noses3', className: 'noses-2', src: 'images/noses/nose-2.png' },
      { label: 'noses4', className: 'noses-3', src: 'images/noses/nose-3.png' },
      { label: 'noses5', className: 'noses-4', src: 'images/noses/nose-4.png' },
      
    ],
    ears: [
      { label: 'ears1', className: 'ears-0', src: 'images/ears/ear-0.png' },
      { label: 'ears2', className: 'ears-1', src: 'images/ears/ear-1.png' },
      { label: 'ears3', className: 'ears-2', src: 'images/ears/ear-2.png' },
      
    ],
  };

  // keeping track of objects 
  const state = {
    body: { index: 0, x: 0, y: 0, scale: 50 },
    head: { index: 0, x: 0, y: 0, scale: 50 },
    features: { index: 0, x: 0, y: 0, scale: 50 }
  };

  // function to apply CSS transforms
  function applyTransform(element, partData) {
    const actualScale = partData.scale / 50; 
    element.style.transform = `translate(${partData.x}px, ${partData.y}px) scale(${actualScale})`;
  }

  // function to update the preview images and labels based on the variables 
  function updatePreview() {
    const bodyChoice = variants.body[state.body.index];
    const eyeColorChoice = variants.eyeColor[state.eyeColor.index];
    const pupilsChoice = variants.pupils[state.pupils.index];

    bodyEl.className = `alien-part alien-body ${bodyChoice.className}`;
    eyeColorEl.className = `alien-part alien-eyeColor ${eyeColorChoice.className}`;
    pupilsEl.className = `alien-part alien-pupils ${pupilsChoice.className}`;

    bodyImg.style.display = 'block';
    eyeColorImg.style.display = 'block';
    pupilsImg.style.display = 'block';

    bodyImg.src = bodyChoice.src;
    eyeColorImg.src = eyeColorChoice.src;
    pupilsImg.src = pupilsChoice.src;

    bodyImg.alt = bodyChoice.label;
    eyeColorImg.alt = eyeColorChoice.label;
    pupilsImg.alt = pupilsChoice.label;

    bodyImg.onerror = () => { bodyImg.style.display = 'none'; };
    eyeColorImg.onerror = () => { eyeColorImg.style.display = 'none'; };
    pupilsImg.onerror = () => { pupilsImg.style.display = 'none'; };

    bodyLabel.textContent = bodyChoice.label;
    eyeColorLabel.textContent = eyeColorChoice.label;
    pupilsLabel.textContent = pupilsChoice.label;

    // Apply exact positions and scales
    applyTransform(bodyImg, state.body);
    applyTransform(eyeColorImg, state.eyeColor);
    applyTransform(pupilsImg, state.pupils);
  }

  // event listeners and uses function for start button
  startButton.addEventListener('click', () => {
    builderPanel.classList.toggle('hidden');
    introPanel.classList.toggle('hidden');
    updatePreview();
    if (!builderPanel.classList.contains('hidden')) {
      startButton.textContent = 'Restart Builder';
      builderPanel.scrollIntoView({ behavior: 'smooth' });
    } else {
      startButton.textContent = 'Start Building';
    }
  });

  // event listeners and uses function for flip buttons
  document.querySelectorAll('.flip-button').forEach(button => {
    button.addEventListener('click', () => {
      const part = button.dataset.part;
      const direction = Number(button.dataset.direction);
      const items = variants[part];
      state[part].index = (state[part].index + direction + items.length) % items.length;
      updatePreview();
    });
  });

  // New event listeners, control panels, x y and slide scaler

  // Accordion Logic (Opening/Closing Control Panels)
  document.querySelectorAll('.panel-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parentCard = trigger.closest('.control-card');
      const isActive = parentCard.classList.contains('active');
      
      document.querySelectorAll('.control-card').forEach(card => {
        card.classList.remove('active');
      });

      if (!isActive) {
        parentCard.classList.add('active');
      }
    });
  });

  // D-Pad Buttons X y Axis
  document.querySelectorAll('.move-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const part = btn.dataset.part; 
      const axis = btn.dataset.axis; 
      const amount = Number(btn.dataset.amount); 
      
      state[part][axis] += amount;
      updatePreview();
    });
  });

  // Scale Sliders (size)
  document.querySelectorAll('.scale-slider').forEach(slider => {
    slider.addEventListener('input', (e) => {
      const part = slider.dataset.part;
      state[part].scale = Number(e.target.value);
      updatePreview();
    });
  });

  updatePreview();
});