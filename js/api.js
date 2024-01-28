fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => response.json())
    .then(data => console.log(data));