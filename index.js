document.addEventListener('DOMContentLoaded', () => {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  modal.style.display = 'none';

  cardForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const studentName = document.getElementById('studentName').value.trim();
      const personalMessage = document.getElementById('personalMessage').value.trim();
      const courseName = document.getElementById('courseName') ? document.getElementById('courseName').value : "a course";

      if (!studentName || !personalMessage) {
          alert('Please fill in all fields');
          return;
      }

      const elements = [
          { tag: 'h1', text: "Certificate of Achievement" },
          { tag: 'p', text: "This is to certify that" },
          { tag: 'h2', text: studentName },
          { tag: 'p', text: "Has almost completed the" },
          { tag: 'h3', text: courseName },
          { tag: 'p', text: "With legendary perseverance and world-class bad-assery for never giving up 🏆" },
          { tag: 'img', attrs: { src: "logo.png", height: 100, alt: "CodeSpace Logo" }},
          { tag: 'p', text: personalMessage }
      ];

      certificateContent.innerHTML = ''; // Clear previous content

      elements.forEach(el => {
          const element = document.createElement(el.tag);
          if (el.text) element.textContent = el.text;
          if (el.attrs) Object.entries(el.attrs).forEach(([key, value]) => element.setAttribute(key, value));
          certificateContent.appendChild(element);
      });

      modal.style.display = 'block';
      cardForm.reset(); // Clear form inputs
  });

  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });
});
