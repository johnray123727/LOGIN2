const ROLE_PAGES = {
  student: 'index.html',
  faculty: 'faculty.html',
  admin: 'admin.html'
};

function initLoginPage(currentRole) {
  const roleSelect = document.getElementById('roleSelect');
  const roleTrigger = document.getElementById('roleTrigger');
  const roleMenu = document.getElementById('roleMenu');
  const roleLabel = document.getElementById('roleLabel');
  const roleInput = document.getElementById('roleInput');
  const options = roleMenu.querySelectorAll('.role-option');

  roleLabel.textContent = currentRole.charAt(0).toUpperCase() + currentRole.slice(1);
  roleInput.value = currentRole;
  options.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.role === currentRole);
  });

  roleTrigger.addEventListener('click', () => {
    const open = roleSelect.classList.toggle('open');
    roleTrigger.setAttribute('aria-expanded', open);
  });

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const role = opt.dataset.role;
      if (role !== currentRole) {
        window.location.href = ROLE_PAGES[role];
        return;
      }
      roleSelect.classList.remove('open');
      roleTrigger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!roleSelect.contains(e.target)) {
      roleSelect.classList.remove('open');
      roleTrigger.setAttribute('aria-expanded', 'false');
    }
  });

  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
