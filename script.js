const arrowButton = document.getElementById("arrow").addEventListener("click" , function(){
    const target = document.getElementById("frame4cards");
    target.scrollIntoView({behavior : "smooth"})
})

const buttons = document.querySelectorAll(".boldArrow");
const contents = document.querySelectorAll(".ShowContents");

buttons.forEach((button, index) => {
    const showContent = contents[index]; // Match content with the button using the index

    
    button.style.transition = "transform 0.3s ease";

    button.addEventListener("click", function() {
        if (showContent.style.display === "none" || showContent.style.display === '') {
            showContent.style.display = "block"; // Show the content
            button.style.transform = "rotate(-90deg)"; // Rotate the button
        } else {
            showContent.style.display = "none"; // Hide the content
            button.style.transform = "rotate(0deg)"; // Reset rotation
        }
    });
});

const showMoreButton = document.getElementById("ShowMoreButton");
const allGrids = document.querySelectorAll(".frame");

showMoreButton.addEventListener("click", function () {
    allGrids.forEach((grid) => {
        if (grid.style.display === "none" || grid.style.display === "") {
            grid.style.display = "block"; // Show the grid
        } else {
            grid.style.display = "none"; // Hide the grid
        
        }
    });
});
let shapes = document.querySelectorAll('.shape');
let dynamicImage = document.getElementById('dynamic-image');
let containerTitle = document.getElementById('container-title');
let containerParagraph = document.getElementById('container-paragraph');
let currentShapeIndex = 0;
let autoMoveInterval;
let clickedIndex = null;
let isUserInteracted = false;

function updateTextAndMoveShapes() {
    let shape = shapes[currentShapeIndex];
    dynamicImage.style.opacity = 0; // Fade out the current image

    // Move the current shape to the first position
    shape.style.order = 1;

    // Change the image dynamically based on the shape
    dynamicImage.src = shape.src;
    dynamicImage.alt = shape.getAttribute('data-shape');

    // Fade in the new content for container title and paragraph
    containerTitle.style.opacity = 0;
    containerParagraph.style.opacity = 0;

    setTimeout(() => {
        containerTitle.textContent = shape.getAttribute('data-title');
        containerParagraph.textContent = shape.getAttribute('data-paragraph');

        // Fade in the new content smoothly
        containerTitle.style.opacity = 1;
        containerParagraph.style.opacity = 1;

        // Fade in the image smoothly
        dynamicImage.style.opacity = 1;
    }, 500); // Wait until the fade-out is complete

    clickedIndex = currentShapeIndex;

    // Move the rest of the shapes back to default order
    shapes.forEach((shape, index) => {
        if (index !== currentShapeIndex) {
            shape.style.order = index + 2; // Ensure other shapes move accordingly
        }
    });
}

// Function to start automatic movement
function startAutoMovement() {
    clearInterval(autoMoveInterval);
    autoMoveInterval = setInterval(() => {
        currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
        // Ensure Frame 19 is never first
        if (currentShapeIndex === 1) {
            currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
        }
        updateTextAndMoveShapes();
    }, 3000); // Interval of 3 seconds for auto-move
}

// Start automatic movement initially
startAutoMovement();

// Stop the automatic movement for 5 seconds after user clicks a shape
shapes.forEach((shape, index) => {
    shape.addEventListener('click', () => {
        currentShapeIndex = index;
        updateTextAndMoveShapes();

        // Stop automatic movement temporarily
        clearInterval(autoMoveInterval);

        // Resume automatic movement after 5 seconds
        setTimeout(() => {
            startAutoMovement();
        }, 5000); // Extended to 5 seconds
    });
});


const menuebutton = document.getElementById ('menu-btn');
const Navlinks = document.getElementById ('nav-links');

menuebutton.addEventListener  ('click' , ()=>{
 Navlinks.classList.toggle('show');
})