// AOS Init
AOS.init({duration:1000, once:true});

// Counter Animation
const counters=document.querySelectorAll('.counter');
counters.forEach(counter=>{
  counter.innerText='0';
  const updateCounter=()=>{
    const target=+counter.getAttribute('data-target');
    const count=+counter.innerText.replace(/,/g,'');
    const inc=Math.ceil(target/200);
    if(count<target){
      counter.innerText=(count+inc).toLocaleString();
      setTimeout(updateCounter,10);
    }else{
      counter.innerText=target.toLocaleString();
    }
  };
  updateCounter();
});
