const TYPES_LIST = [ /* 16タイプの配列データ */ ];

let filterGroup = 'all';
let searchQuery = '';

const typeGrid = document.getElementById('type-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');

renderList();

searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.trim().toLowerCase();
  renderList();
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterGroup = btn.getAttribute('data-group');
    renderList();
  });
});

function renderList() {
  /* リスト描画処理 */
}