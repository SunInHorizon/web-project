const form = document.getElementById('form');
const firstname = document.getElementById('First Name');
const lastname = document.getElementById('Last Name');
const gender = document.getElementById('Gender');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const password2 = document.getElementById('Password2');
const birthday = document.getElementById('Birthday');
const image = document.getElementById('Image')
const checkbox = document.getElementById('Checkbox');
var ageY;
var count = 0;

const inputControl1 = firstname.parentElement;
const inputControl2 = lastname.parentElement;
const inputControl3 = gender.parentElement;
const inputControl4 = email.parentElement;
const inputControl5 = password.parentElement;
const inputControl6 = password2.parentElement;
const inputControl7 = birthday.parentElement;
const inputControl8 = image.parentElement;


//var getSelectedValue = document.querySelector( 'input[name="gender"]:checked').value;
//console.log(getSelectedValue);

//console.log(firstname);
//console.log(gender1);
//console.log(gender2);
//console.log(gender3);


form.addEventListener('submit', e =>
{
    e.preventDefault();

    validateInputs();

    if(count === 9)
    {
        addata();
        resetValue();
    }
    count = 0;
});

const setError = (element, message) => {
    //console.log(element);
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    

    inputControl1.classList.remove('rst');
    inputControl2.classList.remove('rst');
    inputControl3.classList.remove('rst');
    inputControl4.classList.remove('rst');
    inputControl5.classList.remove('rst');
    inputControl6.classList.remove('rst');
    inputControl7.classList.remove('rst');
    inputControl8.classList.remove('rst');

    //console.log(classList);
    console.log(inputControl);
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}



const setSuccess = element => {
    //console.log(element);
    const inputControl = element.parentElement;
   
    const errorDisplay = inputControl.querySelector('.error');
    
    
    inputControl1.classList.remove('rst');
    inputControl2.classList.remove('rst');
    inputControl3.classList.remove('rst');
    inputControl4.classList.remove('rst');
    inputControl5.classList.remove('rst');
    inputControl6.classList.remove('rst');
    inputControl7.classList.remove('rst');
    inputControl8.classList.remove('rst');

    //console.log(classList);
    console.log(inputControl);
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const setError2 = (element, message) => {
    //const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    //console.log(inputControl);

    inputControl1.classList.remove('rst');
    inputControl2.classList.remove('rst');
    inputControl3.classList.remove('rst');
    inputControl4.classList.remove('rst');
    inputControl5.classList.remove('rst');
    inputControl6.classList.remove('rst');
    inputControl7.classList.remove('rst');
    inputControl8.classList.remove('rst');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}



const setSuccess2 = element => {
    //const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    inputControl1.classList.remove('rst');
    inputControl2.classList.remove('rst');
    inputControl3.classList.remove('rst');
    inputControl4.classList.remove('rst');
    inputControl5.classList.remove('rst');
    inputControl6.classList.remove('rst');
    inputControl7.classList.remove('rst');
    inputControl8.classList.remove('rst');
    
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

/*function submitBday() 
{
    var Q4A = "Your birthday is: "
    var Bday = document.getElementById('Birthday').value;
    Q4A += Bday;

    //var theBday = document.getElementById('resultBday');
    //theBday.innerHTML = Q4A;
    console.log(Q4A);
    console.log(Bday);
}*/

function ageCount() 
{
    var now =new Date();
    //console.log(now);                            //getting current date
    var currentY= now.getFullYear();                //extracting year from the date
    var currentM= now.getMonth();                   //extracting month from the date
      
    var dobget =document.getElementById("Birthday").value; //getting user input
    var dob= new Date(dobget);                             //formatting input as date
    var prevY= dob.getFullYear();                          //extracting year from input date
    var prevM= dob.getMonth();                             //extracting month from input date
      
    ageY =currentY - prevY;
    var ageM =Math.abs(currentM- prevM);                    //converting any negative value to positive

    console.log(ageY);
    console.log(ageM);
      
    //document.getElementById('demo').innerHTML = ageY +' years ' + ageM +' months';
}

function previewImage(event) 
{
    document.getElementById('preview').style.display = "";
    var input = event.target;
    var image = document.getElementById('preview');
    if (input.files && input.files[0]) 
    {
       var reader = new FileReader();
       reader.onload = function(e) {
          image.src = e.target.result;
       }
       reader.readAsDataURL(input.files[0]);
    }
}

const validateInputs = () => {

    /*var radioChecked=0;
    var radios=document.getElementById('Gender');
    for(var i=0;i<radios.length;i++)
    { 
        if(radios[i].checked)
        {
            radioChecked=radioChecked+1;
        } 
    }
    if(radioChecked==0)
        return null;*/

    const gender1 = document.getElementById('Male').checked;
    const gender2 = document.getElementById('Female').checked;
    const gender3 = document.getElementById('Other').checked;

    const firstnamevalue = firstname.value.trim();
    const lastnamevalue = lastname.value.trim();
    const gendervalue = gender.value;
    //const gendervalue1 = gender1.value;
    //const gendervalue2 = gender2.value;
    //const gendervalue3 = gender3.value;
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const passwordvalue2 = password2.value.trim();
    const birthdayvalue = birthday.value.trim();
    const imagevalue = image.value.trim();
    //const checkboxvalue = checkbox.value.trim();
    const checkboxvalue = document.getElementById('Checkbox').checked;

    
    console.log(gendervalue)
    //console.log(birthdayvalue);
    //console.log(gendervalue1);
    //console.log(gendervalue2);
    //console.log(gendervalue3);
    console.log(checkboxvalue);
    //console.log(ageY);
    
    if(firstnamevalue === "")
    {
        count = 0;
        setError(firstname, 'First Name is Required');
    }
    else
    {
        count++;
        setSuccess(firstname);
    }

    if(lastnamevalue === "")
    {
        count = 0;
        setError(lastname, 'Last Name is Required');
    }
    else
    {
        count++;
        setSuccess(lastname);
    }

    if(gender1 === false && gender2 == false && gender3 == false)
    {
        count = 0;
        setError(gender, 'Gender is Required');
    }
    else
    {
        count++;
        setSuccess(gender);
    }

    /*if(gendervalue2 === "")
    {
        setError(gender2, 'Gender is Required');
    }
    else
    {
        setSuccess(gender2);
    }

    if(gendervalue3 === "")
    {
        setError(gender3, 'Gender is Required');
    }
    else
    {
        setSuccess(gender3);
    }*/

           
    /*if(getSelectedValue != null) 
    {   
        setSuccess(getSelectedValue);
    }  
    else 
    {  
        setError(getSelectedValue, 'Chose your Gender');
    }*/

    if(emailvalue === "")
    {
        count = 0;
        setError(email, 'Email is Required');
    }
    else
    {
        count++;
        setSuccess(email);
    }

    if(passwordvalue === "")
    {
        count = 0;
        setError(password, 'Password is Required');
    }
    else if (passwordvalue.length < 8 ) 
    {
        count = 0;
        setError(password, 'Password must be at least 8 character.')
    }
    else
    {
        count++;
        setSuccess(password);
    }

    if(passwordvalue2 === '') 
    {
        count = 0;
        setError(password2, 'Please confirm your password');
    } 
    else if (passwordvalue2 !== passwordvalue) 
    {
        count = 0;
        setError(password2, "Passwords doesn't match");
    } 
    else 
    {
        count++;
        setSuccess(password2);
    }


    if(birthdayvalue === "")
    {
        count = 0;
        setError(birthday, 'Birthday is Required');        
    }
    else if(ageY >= 30)
    {
        setError(birthday, 'Not the correct age group');
    }
    else
    {
        count++;
        setSuccess(birthday);
    }

    if(imagevalue === "")
    {
        count = 0;
        setError(image, 'Please upload your Image');
    }
    else
    {
        count++;
        setSuccess(image);
    }

    if(checkboxvalue === false)
    {
        count = 0;
        setError(checkbox, 'Terms and Condition needed');        
    }
    else
    {
        count++;
        setSuccess(checkbox);
    }

    console.log(count);
  

}

function addata()
{
    var firstname1 = document.sample.FirstName.value;
    var lastname1 = document.sample.LastName.value;
    var genderv1 = document.sample.gender.value;
    var email1 = document.sample.Email.value;
    var birthday1 = document.sample.birthday.value;
    
    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = firstname1;
    td2.innerHTML = lastname1;
    td3.innerHTML = genderv1;
    td4.innerHTML = email1;
    td5.innerHTML = birthday1;

    document.getElementById("tbl").appendChild(tr);

    document.getElementById("tbl").style.display = "";
}

function resetValue()
{
    document.getElementById('First Name').value = "";
    document.getElementById('Last Name').value = "";
    document.getElementById('Male').checked = false;
    document.getElementById('Female').checked = false;
    document.getElementById('Other').checked = false;
    document.getElementById('Email').value = "";
    document.getElementById('Password').value = "";
    document.getElementById('Password2').value = "";
    document.getElementById('Birthday').value = "";
    document.getElementById('Image').value = "";
    document.getElementById('preview').style.display = "none";
    document.getElementById('Checkbox').checked = false;

    

    inputControl1.classList.add('rst');
    inputControl2.classList.add('rst');
    inputControl3.classList.add('rst');
    inputControl4.classList.add('rst');
    inputControl5.classList.add('rst');
    inputControl6.classList.add('rst');
    inputControl7.classList.add('rst');
    inputControl8.classList.add('rst');
    
}