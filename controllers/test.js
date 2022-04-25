const test = (err, results, fields) => {
  if(err){
    console.log(err);
  };
    https://docs.google.com/spreadsheets/d/1hVqZheVyww2AMjHSieWC_ariOh1i0FHEaOTpf0yQPlE/edit#gid=0&range=A1
    console.log(results); // собственно данные
    //console.log(fields); // мета-данные полей

}

module.exports = test;



// TEST ZONE
/*var url = 'https://docs.google.com/spreadsheets/d/1hVqZheVyww2AMjHSieWC_ariOh1i0FHEaOTpf0yQPlE/edit#gid=0&range=A1';
  var response = results.fetch(url);
  var object = JSON.parse(response.getContentText()); 

*/  