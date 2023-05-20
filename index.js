let billInput,peopleInput, percent, customTips, peopleError, tipAmount, totalAmount, resetBtn;

billInput = document.getElementById("yourBill");
peopleInput = document.querySelector('.zeroPeople');
active = document.querySelector('.active')
percent = document.querySelectorAll('.tipButton')
customTips = document.querySelector('.inputTips')
peopleError = document.querySelector('.error')
tipAmount = document.querySelector('#tipAmount')
totalAmount = document.querySelector('#total')
resetBtn = document.querySelector('.btn')


const result = function (input) {
    let bill = Number(document.getElementById("yourBill").value);
    let people = Number(document.getElementById("zeroPeople").value);

    let tip =`$${((bill * input) / people).toFixed(2)}`;
    let totalBill =`$${((bill + bill * input) / people).toFixed(2)}`

    document.getElementById('tipAmount').textContent = tip;
    document.getElementById('total').textContent = totalBill;
    

    return;
  
};

percent.forEach((tipButton)=>{
    tipButton.addEventListener('click', ()=>{
        let btnPercentage = Number(tipButton.textContent.replace("%", "")) / 100;
        active.classList.remove('active');
        customTips.value = '';

        tipButton.classList.add('active');
        active = tipButton;

        let bill = Number(document.getElementById("yourBill").value);
        let people = Number(document.getElementById("zeroPeople").value);

        if (bill <= 0 || !Number(bill)) {
            billInput.style.border = "2px solid rgb(255, 0, 0)";
            
            
            return;
          }
          billInput.style.border = "2px solid transparent";
        
        
        if (people <= 0 || !Number(people)) {
            peopleError.style.display = "block";
            peopleInput.style.border = "2px solid rgb(255, 0, 0)";
            return;
          }
          peopleInput.style.border = "2px solid transparent";
          peopleError.style.display = "none";
          

          
          
          
        result(btnPercentage);
          

    });
});

billInput.addEventListener('click',()=>{
    customTips.value ='';
    peopleInput.value = '';
    active.classList.remove('active');
})

peopleInput.addEventListener('click',()=>{
    customTips.value ='';
    active.classList.remove('active');
    
    
})

customTips.addEventListener("input", () => {
    let customValue = Number(document.querySelector("customTips").value) / 100;
    active.classList.remove('active');
    active = customTips;
    let bill = Number(document.querySelector("billamount").value);
    let people = Number(document.querySelector("zeroPeople").value);

        if (bill <= 0 || !Number(bill)) {
            billInput.style.border = "2px solid rgb(255, 0, 0)";
            
            return;
          }
          billInput.style.border = "2px solid transparent";
        
        
        if (people <= 0 || !Number(people)) {
            peopleError.style.display = "block";
            peopleInput.style.border = "2px solid rgb(255, 0, 0)";
            return;
          }
          peopleInput.style.border = "2px solid transparent";
          peopleError.style.display = "none";
          
    
    result(customValue);
  });

  resetBtn.addEventListener('click', ()=>{
    customTips.value = '';
    peopleInput.value = '';
    billInput.value = '';
    document.getElementById('tipAmount').textContent = '$0.00';
    document.getElementById('total').textContent ='$0.00';
    active.classList.remove('active')
    const defaultactive = document.querySelector('.default');
    active = defaultactive;
    billInput.style.border = "none";
    peopleInput.style.border = "none";

  })
