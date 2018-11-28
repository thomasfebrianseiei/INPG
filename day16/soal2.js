//Diberikan sebuah function yang menerima parameter array multidimensi, buatlah sebuah program JavaScript
// untuk mengubah input menjadi format array of objects seperti di contoh.//

  function convert (data) {
     var baru = [];
    
  for (var i=0; i < data.length; i++) { 
      var tampung = {
      id: data[i][0] ,
      firstName: data[i][1],
      lastName: data[i][2],
      email: data[i][3]
    };
    baru.push(tampung)
  }
  return baru
  }
  console.log(convert([
      [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
      [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
    ]));