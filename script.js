function nextStep(step) {
    const currentStep = document.querySelector('.step:not([style*="display: none"])');
    currentStep.style.display = 'none';
    document.getElementById(`step${step}`).style.display = 'block';
}

function generateLink() {
    const dogWeight = document.getElementById('dogWeight').value;
    const salesLink = `https://www.thefarmersdog.com/signup/me?card=Me1&weight=${dogWeight}`;
    
    document.getElementById('salesLink').href = salesLink;
    document.getElementById('salesLink').textContent = salesLink;

    document.getElementById('dogForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}
