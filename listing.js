document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const imageUpload = document.getElementById("imageUpload");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = form.title.value.trim();
        const category = form.category.value.trim();
        const price = form.price.value.trim();
        const productService = form.productService.value.trim();
        const description = form.description.value.trim();
        const imageFile = imageUpload.files[0];

        if (!title || !category || !price || !productService || !description || !imageFile) {
            alert("Please fill in all required fields and upload an image.");
            return;
        }

        if (isNaN(price) || parseFloat(price) <= 0) {
            alert("Please enter a valid price.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const post = {
                title,
                category,
                price,
                productService,
                description,
                imageSrc: e.target.result,
            };

            savePost(post);
            alert("Post added successfully!");
            form.reset();
            redirectToPage(productService);
        };
        reader.readAsDataURL(imageFile);
    });

    function savePost(post) {
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(post);
        localStorage.setItem("posts", JSON.stringify(posts));
    }

    function redirectToPage(productService) {
        if (productService.toLowerCase() === "product") {
            window.location.href = "newservicefeed.html";
        } else if (productService.toLowerCase() === "service") {
            window.location.href = "services.html";
        } else {
            alert("Invalid selection for Product or Service.");
        }
    }
});
