
/* PORTFOLIO DOWNLOAD */

/* Passwords for different people:
TEST: Vuk&Vukica
Jobbsøknadd: Jobb2026
*/
function requestDownload() {
  const input = prompt("Enter password to download portfolio:");
  if (input === "Jobb2026") {
    window.location.href = "assets/Portfolio_JulijaCvijanovic-NOR.pdf";
  } else {
    alert("Incorrect password. Please contact me to request access.");
  }
}

const btnUxui = document.getElementById('btn-uxui');
const btnProduct = document.getElementById('btn-product');
const mindmap = document.querySelector('.mindmap');
const uxuiSet = document.getElementById('uxui-set');
const productSet = document.getElementById('product-set');

function updateRows() {
  const uxui = btnUxui.classList.contains('active');
  const product = btnProduct.classList.contains('active');

  uxuiSet.classList.toggle('visible', uxui);
  productSet.classList.toggle('visible', product);

  if (uxui) {
    mindmap.prepend(uxuiSet);
  } else if (product) {
    mindmap.prepend(productSet);
  }
}

[btnUxui, btnProduct].forEach((btn) => {
  btn.addEventListener('click', () => {
    const isUxuiSelected = btn === btnUxui;
    btnUxui.classList.toggle('active', isUxuiSelected);
    btnProduct.classList.toggle('active', !isUxuiSelected);
    updateRows();
  });
});

btnUxui.classList.add('active');
btnProduct.classList.remove('active');
updateRows();

const darkmodeBtn = document.getElementById('darkmode');

darkmodeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkmodeBtn.textContent = document.body.classList.contains('dark-mode')
    ? 'Dark Mode'
    : 'Light Mode';
});
