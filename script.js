// Initialize AOS
AOS.init({duration:1000, once:true});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter=>{
  counter.innerText='0';
  const updateCounter=()=>{
    const target=+counter.getAttribute('data-target');
    const count=+counter.innerText.replace(/,/g,'');
    const increment=Math.ceil(target/200);
    if(count<target){
      counter.innerText=(count+increment).toLocaleString();
      setTimeout(updateCounter,10);
    }else{
      counter.innerText=target.toLocaleString();
    }
  }
  updateCounter();
});

// Dark / Light Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Load theme from localStorage
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

