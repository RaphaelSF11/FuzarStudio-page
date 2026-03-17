    // Navbar
    window.addEventListener('scroll', () =>
      document.getElementById('nav').classList.toggle('solid', window.scrollY > 50)
    );
    // Scroll reveal
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.up').forEach(el => io.observe(el));