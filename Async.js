
//array methods
const companies = [
  
    {name: 'company one', category:'finance', start: 1975, end:'2016'},
     {name: 'company two', category:'finance', start: 1965, end:'2005'},
     {name: 'company three', category:'finance', start: 1987, end:'1996'},
     {name: 'company four', category:'finance', start: 1982, end:'2000'},
    {name: 'company five', category:'finance', start: 1991, end:'2012'}
 ]

const ages = [12, 34, 56, 23,22,19,32,56,67,12,17,18]


function getcompanies () {
   // setTimeout(()=>{
      let output ='';
      companies.forEach((company) =>{
         output +=`<li>${company.name}</li>`;
      })
      document.body.innerHTML=output;
   // })
}



function create (company, callback) {
      companies.push(company)
      callback();

}

create({name:'company six', category:'financial', start:'1967',
end:'2017'},getcompanies)