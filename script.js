// Initialize AOS
AOS.init({duration:1000, once:true});

// Dark / Light Mode Toggle (optional)
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

if(toggleBtn){
    if(localStorage.getItem('theme') === 'dark'){
        body.classList.add('dark-mode');
        toggleBtn.textContent = '🌞';
    }

    toggleBtn.addEventListener('click', ()=>{
        body.classList.toggle('dark-mode');
        if(body.classList.contains('dark-mode')){
            toggleBtn.textContent = '🌞';
            localStorage.setItem('theme','dark');
        } else{
            toggleBtn.textContent = '🌙';
            localStorage.setItem('theme','light');
        }
    });
}
