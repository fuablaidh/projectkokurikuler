// Ambil semua tombol
const toggleButtons = document.querySelectorAll('.toggleButton');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card'); 
    const moreContent = card.querySelector('.moreContent'); 

    const isHidden = moreContent.style.display === 'none' || moreContent.style.display === '';

    if (isHidden) {
      moreContent.style.display = 'block';
      button.textContent = 'Lebih Sedikit';
      card.classList.add('expanded'); // 👉 tambahkan class saat dibuka
    } else {
      moreContent.style.display = 'none';
      button.textContent = 'Lebih Banyak';
      card.classList.remove('expanded'); // 👉 hapus class saat ditutup
    }
  });
});
