document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
});
