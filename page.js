
// JavaScript for the alien builder page
document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-button');
  const builderPanel = document.getElementById('builder-panel');
  const introPanel = document.getElementById('intro-panel');

  const bodyEl = document.getElementById('alien-body');
  const headEl = document.getElementById('alien-head');
  const featuresEl = document.getElementById('alien-features');
  const bodyImg = document.getElementById('alien-body-img');
  const headImg = document.getElementById('alien-head-img');
  const featuresImg = document.getElementById('alien-features-img');
  const bodyLabel = document.getElementById('body-label');
  const headLabel = document.getElementById('head-label');
  const featuresLabel = document.getElementById('features-label');

// placeholder names for body and head and feature choices, feel free to change, chenge the source images to
// imput your own drawings as the different parts

// array for features, the state variable chooses which of these are selected
  const variants = {
    body: [
      { label: 'body1', className: 'body-0', src: 'images/body-0.png' },
      { label: 'body2', className: 'body-1', src: 'images/body-1.png' },
      { label: 'body3', className: 'body-2', src: 'images/body-2.png' }
    ],
    head: [
      { label: 'head1', className: 'head-0', src: 'images/head-0.png' },
      { label: 'head2', className: 'head-1', src: 'images/head-1.png' },
      { label: 'head3', className: 'head-2', src: 'images/head-2.png' }
    ],
    features: [
      { label: 'features1', className: 'features-0', src: 'images/features-0.png' },
      { label: 'features2', className: 'features-1', src: 'images/features-1.png' },
      { label: 'features3', className: 'features-2', src: 'images/features-2.png' }
    ]
  };

  // set variables
  const state = {
    body: 0,
    head: 0,
    features: 0
  };


// function to update the preview images and labels based on the current state
  function updatePreview() {
    const bodyChoice = variants.body[state.body];
    const headChoice = variants.head[state.head];
    const featuresChoice = variants.features[state.features];

    bodyEl.className = `alien-part alien-body ${bodyChoice.className}`;
    headEl.className = `alien-part alien-head ${headChoice.className}`;
    featuresEl.className = `alien-part alien-features ${featuresChoice.className}`;

    bodyImg.style.display = 'block';
    headImg.style.display = 'block';
    featuresImg.style.display = 'block';

    bodyImg.src = bodyChoice.src;
    headImg.src = headChoice.src;
    featuresImg.src = featuresChoice.src;

    bodyImg.alt = bodyChoice.label;
    headImg.alt = headChoice.label;
    featuresImg.alt = featuresChoice.label;

    bodyImg.onerror = () => { bodyImg.style.display = 'none'; };
    headImg.onerror = () => { headImg.style.display = 'none'; };
    featuresImg.onerror = () => { featuresImg.style.display = 'none'; };

    bodyLabel.textContent = bodyChoice.label;
    headLabel.textContent = headChoice.label;
    featuresLabel.textContent = featuresChoice.label;
  }

  // event listeners for start button
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

  // event listeners for flip buttons
  document.querySelectorAll('.flip-button').forEach(button => {
    button.addEventListener('click', () => {
      const part = button.dataset.part;
      const direction = Number(button.dataset.direction);
      const items = variants[part];
      state[part] = (state[part] + direction + items.length) % items.length;
      updatePreview();
    });
  });

  updatePreview();
});