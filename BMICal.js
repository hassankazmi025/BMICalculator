const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const weightDiv= document.querySelector("#weight-guide")


  if (height === " " || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span> ${bmi} </span>`;

    if(bmi < 18.6){
        weightDiv.innerHTML=`
        <h3>BMI Weight Guide</h3>
        <p><strong>Under Weight</strong> = Less than 18.6</p>
        <p>Normal Range = 18.6 and 24.9</p>
        <p>Overweight = Greater than 24.9</p>
      
        `
    }else if(bmi >= 18.6 && bmi <=24.9){
        weightDiv.innerHTML=`
        <h3>BMI Weight Guide</h3>
        <p>Under Weight = Less than 18.6</p>
        <p><strong>Normal Range</strong> = 18.6 and 24.9</p>
        <p>Overweight = Greater than 24.9</p>      
        `
    }else {
        weightDiv.innerHTML = `
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p><strong>Overweight</strong> = Greater than 24.9</p>
        `;
      }
    
  }
});
