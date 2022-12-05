const form = document.querySelector("#form")
const startDate = document.querySelector("#start-date").value;
const endDate = document.querySelector("#end-date").value;
let duration_from_form = document.getElementById("duration");


function Date(){

    const startDate = document.getElementById("sdate").value;
const endDate = document.getElementById("edate").value;
    if(Date.parse(endDate) < Data.parse(startDate)){

        alert("End Date Should be greater than Start date")
    }
}



let Button = document.getElementById('btn')

Button.addEventListener('click', (e)=> {
    e.preventDefault()
    


    let JSonObj = {

        name : document.getElementById('name').value,
        DOB :  document.getElementById('dob').value,
        Startdate : document.getElementById('startdate').value,
        Enddate :  document.getElementById('enddate').value,
        File : document.getElementById('file').value,
    }

    localStorage.setItem('Details', JSON.stringify(JSonObj));

})