// datos mandados con la solicutud POST
let datos = {
    "path": "1996/03/12/12589/EZEIZA_1996_03_12_CAVOTI_ALEJANDRO.pdf"
  }
  
  fetch('https://restlb1.dnm.gov.ar/getfileftp/public/api/v1/get_file_amia', {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => function(){
    window.open("data:application/pdf;base64," + Base64.encode(json.data[0])))
} 
  .catch(err => console.log(err))