function copyToClipboard() {
    /* create a fake input element */
    const input = document.createElement('input')
    input.value = "nancy.eckenthal@gmail.com"

    document.body.appendChild(input)

    /* Select the text field */
    input.select();
    input.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");

    document.body.removeChild(input)
  }


  document.querySelector("img.email").addEventListener('click', (e) => {
      copyToClipboard()
      const snackbar = document.getElementById("snackbar")
      snackbar.className = "show"
      setTimeout(() => snackbar.className = snackbar.className.replace("show", ""), 3000);

  })