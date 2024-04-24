var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
];
var tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + (1000 * 3600 * 24));
var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()

var text = document.querySelector('h3');

var dicebtn = document.querySelector('#btn');
if (minutes < 10) {
    minutes = "0" + minutes
}
var t_str = hours + ":" + minutes + " ";
if (hours > 11) {
    t_str += "PM";
} else {
    t_str += "AM";
}
document.getElementById("day").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate() + ", " + tomorrow.getFullYear() + " at " + t_str;

document.getElementById('btn').addEventListener('click', function() {
    
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    
    
    
    var total = dice1 + dice2;
    
    
    document.getElementById('total').textContent = total;
    
    
    if (total > 8) {
        document.getElementById('more-than-10').textContent = 'Win';
        document.getElementById('less-than-10').textContent = '';
        document.querySelector('.message h3').textContent = 'You won!';
    } else {
        document.getElementById('less-than-10').textContent = 'Lose';
        document.getElementById('more-than-10').textContent = '';
        document.querySelector('.message h3').textContent = 'You didn\'t win: Try Again!';
    }
})