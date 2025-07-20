navigator.clipboard.readText().then(text => {
  document.getElementsByClassName('cm-line')[2].innerText='set data \"'+text+'\"';
  setTimeout(()=>{
    document.getElementsByClassName('command-send')[0].click();
  },10);
});
