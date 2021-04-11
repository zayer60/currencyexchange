document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=f42c9f2a23111a5ac264af66c39aa604&format=1')
        .then(response => response.json())
        .then(data => {
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[currency];
            console.log(rate);
            if (rate !== undefined) {
                document.querySelector('#result').innerHTML = `1 EUR is equal to ${rate.toFixed(3)} ${currency}.`;
            }
            else {
                document.querySelector('#result').innerHTML = 'Invalid Currency.';
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });
        return false;
    }
});