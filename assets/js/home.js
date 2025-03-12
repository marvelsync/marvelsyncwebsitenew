// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select all .whyChsUsInfoMian elements
const infoSections = document.querySelectorAll(".whyChsUsInfoMian");

// Iterate over each .whyChsUsInfoMian element and set up ScrollTrigger
infoSections.forEach((section, index) => {
  const imageUrl = section.getAttribute("data-image"); // Get the image URL from data-image attribute

  ScrollTrigger.create({
    trigger: section,
    // markers: true,
    start: "top 20%", // Trigger when the top of each section hits the center of viewport
    end: "bottom", // Continue until the bottom of each section hits the center
    onEnter: () => {
      // Remove 'active' class from all .whyChsUsInfoMian elements
      infoSections.forEach((s) => s.classList.remove("dataactive"));
      // Add 'active' class to the current section
      section.classList.add("dataactive");
      // Update the image based on the current section
      updateImage(imageUrl);
    },
  });
});

// Function to update the image in .whyChsUsTitle
function updateImage(imageUrl) {
  const imageElement = document.getElementById("dynamicImage");
  gsap.to(imageElement, {
    opacity: 0, // Fade out the image
    duration: 0.5,
    onComplete: () => {
      imageElement.src = imageUrl; // Change the image source
      gsap.to(imageElement, {
        opacity: 1, // Fade the new image in
        duration: 0.5,
      });
    },
  });
}
