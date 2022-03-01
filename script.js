
document.querySelector("#category").addEventListener('click', (e) => {
  console.log(e.target);
  if(e.target.tagName == 'L1'){
      window.location.href = "/" + e.target.id;
  }
});