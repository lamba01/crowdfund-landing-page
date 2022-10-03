var button = document.getElementById('bookmark')
        var image = document.getElementById('btnimg')
        var text = document.getElementById('span');

        button.addEventListener('click', function effect() {  
               button.classList.toggle('active')
        })
        function effect() {
            if(image.className == 'active'){
                text.innerHTML = 'Bookmark'
            }else {
                text.innerText = 'Bookmarked'
            }        
            
            image.classList.toggle('active')
        }
var content = document.querySelector('aside')
var close = document.getElementById('closemodal')

function display() {
    content.style.display = 'block'
}
close.onclick = function () {
    content.style.display = 'none'
} 
var pledge = document.getElementById('pledgeclick')
var putt = document.getElementById('pledge')
var wrapper = document.getElementById('wrapped')
var radio = document.getElementById('input')
 function okay2() {
    putt.style.display = 'flex'
    wrapper.style.borderColor = '#147B74'
    putt1.style.display = 'none'
    wrapper1.style.borderColor = 'black'
    radio1.checked = false
} 

var putt1 = document.getElementById('pledge1')
var wrapper1 = document.getElementById('wrapped1')

 function okay() {
    putt1.style.display = 'flex'
    wrapper1.style.borderColor = '#147B74'
    putt.style.display = 'none'
    wrapper.style.borderColor = 'black'
    radio1.checked = false
} 
var jail = document.getElementById('tcontainer')
var textss = document.getElementById('project')
var radio1 = document.getElementById('radio1')
function thanks() {
    jail.style.display = 'block'
    content.style.display = 'none'
   
}

/* For the first input */
var first = document.getElementById('inpt1') 

 function submit() {
    if(first.value.trim().length === 0){
        window.alert('Enter a value!')
    }else if(first.checkValidity() == true){
        jail.style.display = 'block'
        content.style.display = 'none'
        first.value = null
        let amountleft = document.getElementsByName('amountleft1')
        for (let i = 0; i < amountleft.length; i++) {
            var a = amountleft[i].value;
            a--
            amountleft[i].value = a
        }
    }
    else {
        window.alert('Enter a valid value!')
    } 
}
 
var tt = document.getElementById('inpt')

 function submitvalue() {
    if(tt.value.trim().length === 0){
        window.alert('Enter a value!')
    }else if(tt.checkValidity() == true){
        jail.style.display = 'block'
        content.style.display = 'none'
        tt.value = null
        let amountleft2 = document.getElementsByName('amountleft2')
        for (let i = 0; i < amountleft2.length; i++) {
            var b = amountleft2[i].value
            b--
            amountleft2[i].value = b
        }
    }
    else {
        window.alert('Enter a valid value!')
    }
} 

/* mobile menu toggle */
var hamburger = document.getElementById('hamburger')
var mobilemenu = document.getElementById('mobilemenu')
var mobileclose = document.getElementById('closemobile')
hamburger.onclick = function() {
    mobilemenu.style.display = 'block'
    mobileclose.style.display = 'block'
    hamburger.style.display = 'none'
}
mobileclose.onclick = function() {
    mobileclose.style.display = 'none'
    mobilemenu.style.display = 'none'
    hamburger.style.display = 'block'
}
function closemenu() {
    mobilemenu.style.display = 'none'
    mobileclose.style.display = 'none'
    hamburger.style.display = 'block'
}

var gotit = document.getElementById('gotitbtn')
gotit.onclick = function () {
    jail.style.display = 'none'
    var people = document.getElementById('people').value
    people++
    document.getElementById('people').value = people
}
