function formatCurrency(amt, code) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: code
    }).format(amt);
}

console.log(formatCurrency(50203457.334, 'USD')); // $50,203,457.33
console.log(formatCurrency(50203457.334, 'INR')); // ₹5,02,03,457.33
console.log(formatCurrency(50203457.334, 'EUR')); // €50,203,457.33
