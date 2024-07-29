document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is loaded and ready to go!');
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission
         
        const formData = new FormData(form);
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                document.getElementById('form-success').style.display = 'block';
                document.getElementById('form-error').style.display = 'none';
                form.reset();
            } else {
                document.getElementById('form-success').style.display = 'none';
                document.getElementById('form-error').style.display = 'block';
            }
        } catch (error) {
            document.getElementById('form-success').style.display = 'none';
            document.getElementById('form-error').style.display = 'block';
        }
    });
});