
/* PORTFOLIO DOWNLOAD */

/* Passwords for different people:
TEST: Vuk&Vukica
KBG Kommune: Jobbsøknad2026
*/
function requestDownload() {
  const input = prompt("Enter password to download portfolio:");
  if (input === "Vuk&Vukica") {
    window.location.href = "assets/JulijaC_Portfolio2026.pdf";
  } else {
    alert("Incorrect password. Please contact me to request access.");
  }
}

const btnUxui   = document.getElementById('btn-uxui');
const btnCollab  = document.getElementById('btn-collab');
const btnProduct = document.getElementById('btn-product');

const rows = {
  1: document.getElementById('row-1'),
  2: document.getElementById('row-2'),
  3: document.getElementById('row-3'),
  4: document.getElementById('row-4'),
};

function updateRows() {
  const uxui    = btnUxui.classList.contains('active');
  const collab  = btnCollab.classList.contains('active');
  const product = btnProduct.classList.contains('active');

  rows[1].classList.toggle('visible', uxui);
  rows[2].classList.toggle('visible', uxui || collab);
  rows[3].classList.toggle('visible', collab || product);
  rows[4].classList.toggle('visible', product);
}

[btnUxui, btnCollab, btnProduct].forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    updateRows();
  });
});

const darkmodeBtn = document.getElementById('darkmode');

darkmodeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkmodeBtn.textContent = document.body.classList.contains('dark-mode')
    ? 'Dark Mode'
    : 'Light Mode';
});
