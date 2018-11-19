var people = [[1, 'Dimitri', 'Hacktiv8'],[2, 'Dhani', 'Hacktiv8'],[3, 'Icha', 'Hacktiv8'], [4, 'Iren', 'Hacktiv8']];

function idcode(people) {
  var id = 0 ;
  var nama = "";
  var company= "";
  for(var i=0;i<people.length;i++) {
    id = people[i][0]
    nama = people[i][1]
    company = people[i][2]
          
    console.log("ID: " + id +" Name: " + nama + " Company: " + company); 
  }
}
idcode(people)