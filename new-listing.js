document.getElementById('submitListing').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const productType = document.querySelector('.type-button.active') ? document.querySelector('.type-button.active').innerText : '';
    const category = document.getElementById('category').value;
    const brand = document.getElementById('brand').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const images = document.getElementById('imageUpload').files;

    // Basic validation
    if (!productType || !category || !brand || !title || !description || !price) {
        document.getElementById('listingMessage').innerText = "Please fill in all fields.";
        return;
    }

    console.log('Listing submitted:', {
        productType,
        category,
        brand,
        title,
        description,
        price,
        images
    });

    // Show success message
    document.getElementById('listingMessage').innerText = "Your listing has been submitted!";
    
    // Reset form
    document.querySelector('.form-box').reset();
});