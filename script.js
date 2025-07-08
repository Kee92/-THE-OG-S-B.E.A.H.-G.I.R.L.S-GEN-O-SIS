const masterKey = "$2a$10$zl7SIybkoXA7ndkK3MMq6eBspFGQm/h0KG6AMDiujFfzG2ZpaV.D.";


const deck = [

  { name: "The Mirror Gate", meaning: "Reflects your inner duality and hidden truths." },

  { name: "Skeleton Spiral", meaning: "A descent into the bones of your becoming." },

  { name: "Chrono Cross", meaning: "Time folds and unfolds—choose your moment." },

  // ✶ Add your full Codex deck cards here

];

const positions = ["Past Influence", "Present Energy", "Emerging Future"];

function drawSpread() {

  const output = document.getElementById('engine-output');

  const drawn = [];

  while (drawn.length < 3) {

    const card = deck[Math.floor(Math.random() * deck.length)];

    if (!drawn.includes(card)) drawn.push(card);

  }

  output.innerHTML = drawn.map((card, i) => `

    <div class="card-draw">

      <h3>${positions[i]}: ${card.name}</h3>

      <p>${card.meaning}</p>

    </div>

  `).join('');

}

const intentions = ["Release", "Manifest", "Protect", "Transform"];

const actions = {

  Release: [

    "Light a black candle and breathe out what no longer serves.",

    "Write a word on paper and burn it with intention.",

    "Stand barefoot and whisper your letting go into the earth."

  ],

  Manifest: [

    "Draw a sigil of your desire and place it under moonlight.",

    "Speak your intention aloud three times with open palms.",

    "Anoint your third eye with oil and visualize the outcome."

  ],

  Protect: [

    "Circle yourself with salt or symbolic glyphs.",

    "Chant your name followed by 'I am shielded'.",

    "Place a stone or token at each cardinal direction."

  ],

  Transform: [

    "Breathe in deeply and exhale with a sound.",

    "Write your current self and future self on opposite pages.",

    "Burn herbs while visualizing your metamorphosis."

  ]

};

function createRitual() {

  const output = document.getElementById('engine-output');

  const intent = intentions[Math.floor(Math.random() * intentions.length)];

  const steps = actions[intent];

  output.innerHTML = `

    <h3>🕯️ Ritual of ${intent}</h3>

    <ol>${steps.map(step => `<li>${step}</li>`).join('')}</ol>

  `;

}

function revealGlyph(symbol, meaning) {

  const output = document.getElementById('engine-output');

  output.innerHTML = `<h3>${symbol}</h3><p>${meaning}</p>`;

}

function setEngineMode(mode) {

  const output = document.getElementById('engine-output');

  if (mode === 'draw') {

    drawSpread();

  } else if (mode === 'prompt') {

    createRitual();

  } else if (mode === 'glyph') {

    output.innerHTML = `

      <p>Select a glyph to reveal its meaning:</p>

      <div class="glyph-grid">

        <button onclick="revealGlyph('🜁', 'Air: Breath, clarity, new beginnings')">🜁</button>

        <button onclick="revealGlyph('🜂', 'Fire: Will, transformation, passion')">🜂</button>

        <button onclick="revealGlyph('🜄', 'Water: Emotion, intuition, flow')">🜄</button>

      </div>

    `;

  }// Save notes to localStorage on input

const notepad = document.getElementById("notepad");

if (notepad) {

  notepad.value = localStorage.getItem("keeismNotes") || "";

  notepad.addEventListener("input", () => {

    localStorage.setItem("keeismNotes", notepad.value);

  });

}// Example: Toggle ritual section visibility

const ritualToggle = document.getElementById("toggle-ritual");

const ritualSection = document.getElementById("ritual-section");

if (ritualToggle && ritualSection) {

  ritualToggle.addEventListener("click", () => {

    ritualSection.classList.toggle("active");

  });

}const notepad = document.getElementById("notepad");

if (notepad) {

  notepad.value = localStorage.getItem("keeismNotes") || "";

  notepad.addEventListener("input", () => {

    localStorage.setItem("keeismNotes", notepad.value);

  });

}function revealCard(element, title, message) {

  element.innerHTML = `

    <div class="card-face">

      <strong>${title}</strong><br/>

      <em>${message}</em>

    </div>

  `;

  element.style.background = "linear-gradient(135deg, #fb9ed9, #ffbae3)";

  element.style.color = "#2b001b";

  element.style.boxShadow = "0 0 20px #ffc9e9";

}


  
  
  
  
  
 
  
  
  
  
  const masterKey = '$2a$10$mksjLxUAwJqHqDpLbVgN5OirmjBBGE22uP9In1JkgISIqXd.iedZy';

const binIds = [
  "686a5282ac0b16714e986e92", "686a52d18561e97a5032663e", "686a52ed8960c979a5b7f367",
  "686a530a8561e97a50326684", "686a53258a456b7966bc3799", "686a533f8960c979a5b7f394",
  "686a53568561e97a503266ae", "686a53708a456b7966bc37da", "686a53898561e97a503266cc",
  "686a539a8561e97a503266dc"
];

const container = document.querySelector('.codex-deck');

binIds.forEach(id => {
  fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, {
    headers: {
      'X-Master-Key': masterKey
    }
  })
    .then(res => res.json())
    .then(data => {
      const card = data.record;
      const el = document.createElement('div');
      el.className = 'codex-card';
      el.innerHTML = `
        <img src="${card.image}" alt="${card.title}" />
        <h3>${card.title}</h3>
        <div class="reveal">
          <p><strong>Suit:</strong> ${card.suit}</p>
          <p><strong>Element:</strong> ${card.element}</p>
          <p><strong>Prompt:</strong> ${card.prompt}</p>
          <p><strong>Meaning:</strong> ${card.meaning}</p>
        </div>
      `;
      el.onclick = () => el.classList.toggle('revealed');
      container.appendChild(el);
    })
    .catch(err => console.error(`❌ Error loading ${id}:`, err));
});const masterKey = '$2a$10$mksjLxUAwJqHqDpLbVgN5OirmjBBGE22uP9In1JkgISIqXd.iedZy';

const binIds = [
  "686a53aa8960c979a5b7f3ce", "686a53c18a456b7966bc380d", "686a53e08561e97a5032670a",
  "686a53f18a456b7966bc3822", "686a54018a456b7966bc382b", "686a54128960c979a5b7f3fc",
  "686a54228561e97a5032671e", "686a54328a456b7966bc383b", "686a5aaa8561e97a50326c2e",
  "686a5b448a456b7966bc3e34"
];

const container = document.querySelector('.codex-deck');

binIds.forEach(id => {
  fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, {
    headers: {
      'X-Master-Key': masterKey
    }
  })
    .then(res => res.json())
    .then(data => {
      const card = data.record;
      const el = document.createElement('div');
      el.className = 'codex-card';
      el.innerHTML = `
        <img src="${card.image}" alt="${card.title}" />
        <h3>${card.title}</h3>
        <div class="reveal">
          <p><strong>Suit:</strong> ${card.suit}</p>
          <p><strong>Element:</strong> ${card.element}</p>
          <p><strong>Prompt:</strong> ${card.prompt}</p>
          <p><strong>Meaning:</strong> ${card.meaning}</p>
        </div>
      `;
      el.onclick = () => el.classList.toggle('revealed');
      container.appendChild(el);
    })
    .catch(err => console.error(`❌ Error loading ${id}:`, err));
});
  
  
  
  const masterKey = '$2a$10$mksjLxUAwJqHqDpLbVgN5OirmjBBGE22uP9In1JkgISIqXd.iedZy';

const binIds = [
  "686a5b608960c979a5b80173", "686a5d568960c979a5b80228", "686a5d778561e97a50326d36",
  "686a5df38960c979a5b80250", "686a5e4c8a456b7966bc3f50", "686a602f8a456b7966bc4025",
  "686a60528960c979a5b80366", "686a60dd8561e97a50326eb4", "686a60ff8960c979a5b803a1",
  "686a61778960c979a5b803c6"
];

const container = document.querySelector('.codex-deck');

binIds.forEach(id => {
  fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, {
    headers: {
      'X-Master-Key': masterKey
    }
  })
    .then(res => res.json())
    .then(data => {
      const card = data.record;
      const el = document.createElement('div');
      el.className = 'codex-card';
      el.innerHTML = `
        <img src="${card.image}" alt="${card.title}" />
        <h3>${card.title}</h3>
        <div class="reveal">
          <p><strong>Suit:</strong> ${card.suit}</p>
          <p><strong>Element:</strong> ${card.element}</p>
          <p><strong>Prompt:</strong> ${card.prompt}</p>
          <p><strong>Meaning:</strong> ${card.meaning}</p>
        </div>
      `;
      el.onclick = () => el.classList.toggle('revealed');
      container.appendChild(el);
    })
    .catch(err => console.error(`❌ Error loading ${id}:`, err));
});
  
  
  
  
  const masterKey = '$2a$10$mksjLxUAwJqHqDpLbVgN5OirmjBBGE22uP9In1JkgISIqXd.iedZy';

const binIds = [
  "686a61df8a456b7966bc40b1", "686a62088561e97a50326f1f", "686a626a8960c979a5b80420",
  "686a62e8a456b7966bc40f6", "686a62eb8a456b7966bc4126", "686a630e8a456b7966bc4138",
  "686a6a838a456b7966bc447c", "686a6a988960c979a5b8085f", "686a6ab18561e97a50327908",
  "686a6ad08960c979a5b80884"
];

const container = document.querySelector('.codex-deck');

binIds.forEach(id => {
  fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, {
    headers: {
      'X-Master-Key': masterKey
    }
  })
    .then(res => res.json())
    .then(data => {
      const card = data.record;
      const el = document.createElement('div');
      el.className = 'codex-card';
      el.innerHTML = `
        <img src="${card.image}" alt="${card.title}" />
        <h3>${card.title}</h3>
        <div class="reveal">
          <p><strong>Suit:</strong> ${card.suit}</p>
          <p><strong>Element:</strong> ${card.element}</p>
          <p><strong>Prompt:</strong> ${card.prompt}</p>
          <p><strong>Meaning:</strong> ${card.meaning}</p>
        </div>
      `;
      el.onclick = () => el.classList.toggle('revealed');
      container.appendChild(el);
    })
    .catch(err => console.error(`❌ Error loading ${id}:`, err));
});
  
  
  
  
  const masterKey = '$2a$10$mksjLxUAwJqHqDpLbVgN5OirmjBBGE22uP9In1JkgISIqXd.iedZy';

const binIds = [
  "686a6a3c8561e97a503278df", "686a69c68960c979a5b8080f", "686a69ac8a456b7966bc4402",
  "686a698c8561e97a503278b0", "686a69628561e97a503278a1", "686a68ee8561e97a5032787c",
  "686a68cb8960c979a5b807a9", "686a68af8561e97a5032785d", "686a68988960c979a5b80775",
  "686a68818561e97a50327843"
];

const container = document.querySelector('.codex-deck');

binIds.forEach(id => {
  fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, {
    headers: {
      'X-Master-Key': masterKey
    }
  })
    .then(res => res.json())
    .then(data => {
      const card = data.record;
      const el = document.createElement('div');
      el.className = 'codex-card';
      el.innerHTML = `
        <img src="${card.image}" alt="${card.title}" />
        <h3>${card.title}</h3>
        <div class="reveal">
          <p><strong>Suit:</strong> ${card.suit}</p>
          <p><strong>Element:</strong> ${card.element}</p>
          <p><strong>Prompt:</strong> ${card.prompt}</p>
          <p><strong>Meaning:</strong> ${card.meaning}</p>
        </div>
      `;
      el.onclick = () => el.classList.toggle('revealed');
      container.appendChild(el);
    })
    .catch(err => console.error(`❌ Error loading ${id}:`, err));
});
  
  
  
  
  const masterKey = '$2a$10$mksjLxUAwJqHqDpLbVgN5OirmjBBGE22uP9In1JkgISIqXd.iedZy';

const binIds = [
  "686a68698a456b7966bc4376", "686a684a8960c979a5b80724", "686a68368960c979a5b8071a",
  "686a681e8561e97a5032780e", "686a68028960c979a5b80700", "686a67eb8a456b7966bc4346",
  "686a67c98a456b7966bc4330", "686a67a78960c979a5b806ce", "686a67868960c979a5b806c1",
  "686a676f8561e97a50327791"
];

const container = document.querySelector('.codex-deck');

binIds.forEach(id => {
  fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, {
    headers: {
      'X-Master-Key': masterKey
    }
  })
    .then(res => res.json())
    .then(data => {
      const card = data.record;
      const el = document.createElement('div');
      el.className = 'codex-card';
      el.innerHTML = `
        <img src="${card.image}" alt="${card.title}" />
        <h3>${card.title}</h3>
        <div class="reveal">
          <p><strong>Suit:</strong> ${card.suit}</p>
          <p><strong>Element:</strong> ${card.element}</p>
          <p><strong>Prompt:</strong> ${card.prompt}</p>
          <p><strong>Meaning:</strong> ${card.meaning}</p>
        </div>
      `;
      el.onclick = () => el.classList.toggle('revealed');
      container.appendChild(el);
    })
    .catch(err => console.error(`❌ Error loading ${id}:`, err));
});
  
  
  
  
  const masterKey = '$2a$10$mksjLxUAwJqHqDpLbVgN5OirmjBBGE22uP9In1JkgISIqXd.iedZy';

const binIds = [
  "686a67588561e97a50327783", "686a673b8561e97a50327777", "686a67248960c979a5b80694",
  "686a66e48561e97a50327755", "686a66bb8960c979a5b80671", "686a668f8a456b7966bc429b",
  "686a66608561e97a5032772a", "686a66468561e97a5032771a", "686a662c8960c979a5b8062a",
  "686a66108960c979a5b80619"
];

const container = document.querySelector('.codex-deck');

binIds.forEach(id => {
  fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, {
    headers: {
      'X-Master-Key': masterKey
    }
  })
    .then(res => res.json())
    .then(data => {
      const card = data.record;
      const el = document.createElement('div');
      el.className = 'codex-card';
      el.innerHTML = `
        <img src="${card.image}" alt="${card.title}" />
        <h3>${card.title}</h3>
        <div class="reveal">
          <p><strong>Suit:</strong> ${card.suit}</p>
          <p><strong>Element:</strong> ${card.element}</p>
          <p><strong>Prompt:</strong> ${card.prompt}</p>
          <p><strong>Meaning:</strong> ${card.meaning}</p>
        </div>
      `;
      el.onclick = () => el.classList.toggle('revealed');
      container.appendChild(el);
    })
    .catch(err => console.error(`❌ Error loading ${id}:`, err));
});
  
  
  
  
  const masterKey = '$2a$10$mksjLxUAwJqHqDpLbVgN5OirmjBBGE22uP9In1JkgISIqXd.iedZy';

const binIds = [
  "686a65f38561e97a503276e8", "686a65c08561e97a503276d7", "686a65a28a456b7966bc424a",
  "686a65878960c979a5b805a9", "686a65688960c979a5b80599", "686a65328960c979a5b80579",
  "686a65178960c979a5b80568", "686a64e98960c979a5b80556", "686a64a28960c979a5b8052c",
  "686a648d8a456b7966bc41c5"
];

const container = document.querySelector('.codex-deck');

binIds.forEach(id => {
  fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, {
    headers: {
      'X-Master-Key': masterKey
    }
  })
    .then(res => res.json())
    .then(data => {
      const card = data.record;
      const el = document.createElement('div');
      el.className = 'codex-card';
      el.innerHTML = `
        <img src="${card.image}" alt="${card.title}" />
        <h3>${card.title}</h3>
        <div class="reveal">
          <p><strong>Suit:</strong> ${card.suit}</p>
          <p><strong>Element:</strong> ${card.element}</p>
          <p><strong>Prompt:</strong> ${card.prompt}</p>
          <p><strong>Meaning:</strong> ${card.meaning}</p>
        </div>
      `;
      el.onclick = () => el.classList.toggle('revealed');
      container.appendChild(el);
    })
    .catch(err => console.error(`❌ Error loading ${id}:`, err));
});
  
  
  
  
  
  const masterKey = '$2a$10$mksjLxUAwJqHqDpLbVgN5OirmjBBGE22uP9In1JkgISIqXd.iedZy';

const binIds = [
  "686a809c8a456b7966bc4c45", "686a80958a456b7966bc4c40", "686a80728561e97a50327a3b",
  "686a806b8960c979a5b80f2d", "686a80568a456b7966bc4c22", "686a804f8a456b7966bc4c1d",
  "686a7fdc8a456b7966bc4bed", "686a7efa8a456b7966bc4b9b", "686a7c728960c979a5b80d0d",
  "686a79658a456b7966bc49e0"
];

const container = document.querySelector('.codex-deck');

binIds.forEach(id => {
  fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, {
    headers: {
      'X-Master-Key': masterKey
    }
  })
    .then(res => res.json())
    .then(data => {
      const card = data.record;
      const el = document.createElement('div');
      el.className = 'codex-card';
      el.innerHTML = `
        <img src="${card.image}" alt="${card.title}" />
        <h3>${card.title}</h3>
        <div class="reveal">
          <p><strong>Suit:</strong> ${card.suit}</p>
          <p><strong>Element:</strong> ${card.element}</p>
          <p><strong>Prompt:</strong> ${card.prompt}</p>
          <p><strong>Meaning:</strong> ${card.meaning}</p>
        </div>
      `;
      el.onclick = () => el.classList.toggle('revealed');
      container.appendChild(el);
    })
    .catch(err => console.error(`❌ Error loading ${id}:`, err));
});
  
  
  
  const masterKey = '$2a$10$mksjLxUAwJqHqDpLbVgN5OirmjBBGE22uP9In1JkgISIqXd.iedZy';

const binIds = [
  "686a794c8960c979a5b80cf3", "686a786d8a456b7966bc498b", "686a76d48a456b7966bc48c5",
  "686a75288960c979a5b80b68", "686a74ee8a456b7966bc4829", "686a74d08a456b7966bc481d",
  "686a7488960c979a5b80b25", "686a74718561e97a50327622", "686a74318a456b7966bc47d3",
  "686a741b8a456b7966bc47cd"
];

const container = document.querySelector('.codex-deck');

binIds.forEach(id => {
  fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, {
    headers: {
      'X-Master-Key': masterKey
    }
  })
    .then(res => res.json())
    .then(data => {
      const card = data.record;
      const el = document.createElement('div');
      el.className = 'codex-card';
      el.innerHTML = `
        <img src="${card.image}" alt="${card.title}" />
        <h3>${card.title}</h3>
        <div class="reveal">
          <p><strong>Suit:</strong> ${card.suit}</p>
          <p><strong>Element:</strong> ${card.element}</p>
          <p><strong>Prompt:</strong> ${card.prompt}</p>
          <p><strong>Meaning:</strong> ${card.meaning}</p>
        </div>
      `;
      el.onclick = () => el.classList.toggle('revealed');
      container.appendChild(el);
    })
    .catch(err => console.error(`❌ Error loading ${id}:`, err));
});