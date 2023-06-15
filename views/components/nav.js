const navbar = document.querySelector('#navbar');

const createHomeNav = () => {
    // como agregar clases en tailwind
    
    // const div = document.createElement('nav');
    // nav.classList.add('backdrop-blur-sm', 'dark:bg-zinc-800', 'border-b-2', 'border-zinc-50', 'fixed', 'top-0', 'left-0', 'right-0', 'h-[5rem]')
    navbar.innerHTML = `
    <div class="flex justify-between items-center h-20 px-4 max-w-7xl mx-auto">
        <h1 class="text 2xl font-bold text-indigo-700 dark:text-indigo-300">TodoApp</h1>
        
        <div class="flex gap-4">
          <button></button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-zinc-50 md:hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div class="hidden md:flex gap-4">
            <a href="/signup/" class="bg-indigo-700 dark:bg-indigo-300 text-white dark:text-zinc-700 uppercase font-bold px-4 py-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-indigo-200 transition-all">Registro</a>
            <a href="/login/" class="text-zinc-700 dark:text-zinc-100 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all">Login</a>
          </div>
        </div>
        <div class="bg-zinc-100 dark:bg-zinc-700 p-4 fixed h-screen top-20 w-0 bottom-0 -right-12 transition-all">
      <div class="gap-4 flex-col text-center hidden">
        <a href="/signup/" class="bg-indigo-700 dark:bg-indigo-300 text-white dark:text-zinc-700 uppercase font-bold px-4 py-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-indigo-200 transition-all">Registro</a>
        <a href="/login/" class="text-zinc-700 dark:text-zinc-100 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all">Login</a>
      </div>
    </div>
      </div>
    `    
}

const createSignupNav = () => {
  // como agregar clases en tailwind
  
  // const div = document.createElement('nav');
  // nav.classList.add('backdrop-blur-sm', 'dark:bg-zinc-800', 'border-b-2', 'border-zinc-50', 'fixed', 'top-0', 'left-0', 'right-0', 'h-[5rem]')
  navbar.innerHTML = `
  <div class="flex justify-between items-center h-20 px-4 max-w-7xl mx-auto">
      <h1 class="text 2xl font-bold text-indigo-700 dark:text-indigo-300">TodoApp</h1>
      
      <div class="flex gap-4">
        <button></button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-zinc-50 md:hidden">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div class="hidden md:flex gap-4">
          <a href="/login/" class="text-zinc-700 dark:text-zinc-100 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all">Login</a>
        </div>
      </div>
      <div class="bg-zinc-100 dark:bg-zinc-700 p-4 fixed h-screen top-20 w-0 bottom-0 -right-12 transition-all">
    <div class="gap-4 flex-col text-center hidden">
      <a href="/login/" class="text-zinc-700 dark:text-zinc-100 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all">Login</a>
    </div>
  </div>
    </div>
  `    
}

const createLoginNav = () => {
  // como agregar clases en tailwind
  
  // const div = document.createElement('nav');
  // nav.classList.add('backdrop-blur-sm', 'dark:bg-zinc-800', 'border-b-2', 'border-zinc-50', 'fixed', 'top-0', 'left-0', 'right-0', 'h-[5rem]')
  navbar.innerHTML = `
  <div class="flex justify-between items-center h-20 px-4 max-w-7xl mx-auto">
      <h1 class="text 2xl font-bold text-indigo-700 dark:text-indigo-300">TodoApp</h1>
      
      <div class="flex gap-4">
        <button></button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-zinc-50 md:hidden">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div class="hidden md:flex gap-4">
          <a href="/signup/" class="text-zinc-700 dark:text-zinc-100 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all">Registro</a>
        </div>
      </div>
      <div class="bg-zinc-100 dark:bg-zinc-700 p-4 fixed h-screen top-20 w-0 bottom-0 -right-12 transition-all">
    <div class="gap-4 flex-col text-center hidden">
      <a href="/signup/" class="text-zinc-700 dark:text-zinc-100 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all">Registro</a>
    </div>
  </div>
    </div>
  `    
}

const createLoginTodos = () => {
  navbar.innerHTML = `
  <div class="flex justify-between items-center h-20 px-4 max-w-7xl mx-auto">
      <h1 class="text 2xl font-bold text-indigo-700 dark:text-indigo-300">TodoApp</h1>
      
      <div class="flex gap-4">
        <button></button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-zinc-50 md:hidden">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div class="hidden md:flex gap-4">
          <button id="close-btn" class="text-zinc-700 dark:text-zinc-100 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all">Cerrar sesion</button>
        </div>
      </div>
      <div class="bg-zinc-100 dark:bg-zinc-700 p-4 fixed h-screen top-20 w-0 bottom-0 -right-12 transition-all">
    <div class="gap-4 flex-col text-center hidden">
      <button id="close-btn" class="text-zinc-700 dark:text-zinc-100 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all">Cerrar sesion</button>
    </div>
  </div>
    </div>
  `    
}

const createLoginAgenda = () => {
  navbar.innerHTML = `
  <div class="flex justify-between items-center h-16 px-4 max-w-7xl mx-auto">
      <h1 class="text 2xl font-bold text-indigo-700 dark:text-indigo-300">TodoApp</h1>
      
      <div class="flex gap-4">
        <button></button>
        <svg class="hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-zinc-50 md:hidden">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div class="md:flex gap-4">
          <button id="close-btn" class=" flex justify-center items-center text-zinc-700 dark:text-zinc-100 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all">
          <div id="spinner-container-close">
                    <div class="spinner"></div>
                </div>
                 <span id="button-close">Cerrar sesion</span>
          </button>
        </div>
      </div>
      <div class="bg-zinc-100 dark:bg-zinc-700 p-4 fixed h-screen top-20 w-0 bottom-0 -right-12 transition-all">
    <div class="gap-4 flex-col text-center hidden">
      <button id="close-btn" class="text-zinc-700 dark:text-zinc-100 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all">Cerrar sesion</button>
    </div>
  </div>
    </div>
  `    
}

if (window.location.pathname === '/') {
    createHomeNav();
} else if (window.location.pathname === '/signup/') {
  createSignupNav();
} else if (window.location.pathname === '/login/') {
  createLoginNav();
} else if (window.location.pathname === '/todos/') {
  createLoginTodos();
} else if (window.location.pathname === '/agenda/') {
  createLoginAgenda();
}
const navBtn = navbar.children[0].children[1].children[1];

navBtn.addEventListener('click', e => {
    const sidebar = e.target.parentElement.parentElement.children[2];
    const buttons = sidebar.children[0];
    if (sidebar.classList.contains('-right-12')) {
        sidebar.classList.remove('-right-12', 'w-0');
        sidebar.classList.add('right-0', 'w-3/4')
        buttons.classList.remove('hidden')
        buttons.classList.add('flex')
    } else{
        sidebar.classList.add('-right-12', 'w-0');
        sidebar.classList.remove('right-0', 'w-3/4')
        buttons.classList.add('hidden')
        buttons.classList.remove('flex')
    }
});


const closeBtnMobile = navbar.children[0].children[2].children[0];
const closeBtnDesktop = navbar.children[0].children[1].children[2];

closeBtnMobile.addEventListener('click', async e => {
  try {
    await axios.get('/api/logout');
    window.location.pathname = '/login';
  } catch (error) {
    console.log(error);
  }
})

closeBtnDesktop.addEventListener('click', async e => {
  const button = e.target;
  const spinner = button.querySelector('#spinner-container-close');
  try {
    spinner.style.display = 'flex';
    button.querySelector('span').textContent = '';
    await axios.get('/api/logout');
    window.location.pathname = '/login';
  } catch (error) {
    spinner.style.display = 'none';
    button.querySelector('span').textContent = 'Cerrar sesion';
    console.log(error);    
  }
})