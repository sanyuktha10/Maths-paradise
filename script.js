// script.js - small interactions for Maths Paradise

document.addEventListener('DOMContentLoaded', () => {
  // Apply button -> open google form in a new tab
  const applyBtn = document.querySelectorAll('.btn-apply');
  applyBtn.forEach(btn => btn.addEventListener('click', () => {
    const url = "GOOGLE_FORM_LINK_HERE"; // <-- replace with your google form url
    if(!url || url.includes("GOOGLE_FORM_LINK_HERE")){
      alert("Admission form link not set yet. Replace GOOGLE_FORM_LINK_HERE in script.js with the form URL.");
      return;
    }
    window.open(url, '_blank');
  }));

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const el = document.querySelector(this.getAttribute('href'));
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Tiny reveal on scroll (simple)
  const revealItems = document.querySelectorAll('.card, .timetable, .teacher-card, section');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.transform = 'none';
        entry.target.style.opacity = 1;
        entry.target.style.transition = 'all 700ms cubic-bezier(.2,.9,.2,1)';
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});

  revealItems.forEach(i => {
    i.style.opacity = 0;
    i.style.transform = 'translateY(10px)';
    obs.observe(i);
  });

  // Optional: clickable teacher phone or WhatsApp button
  const whatsappBtn = document.getElementById('whatsappContact');
  if(whatsappBtn){
    whatsappBtn.addEventListener('click', () => {
      const phone = prompt('Enter phone number to call/WhatsApp (include country code). Example: +9477xxxxxxx');
      if(phone){
        window.open(`https://wa.me/${phone.replace(/\D/g,'')}`, '_blank');
      }
    });
  }
});
