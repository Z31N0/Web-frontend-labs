"use strict";
document.addEventListener("DOMContentLoaded", init);

let activeShields = []; // Track selected shields

function init() {
    const form = document.querySelector('form');
    const statusMessage = document.querySelector('.statusmessage'); // Message element for feedback
    const overlay = document.querySelector('#overlay'); // The popup element
    const closeOverlayButton = overlay.querySelector('.close'); // Button to close the popup

    form.addEventListener('submit', submit);

    // Add event listener to all links
    const links = document.querySelectorAll('#link-list a');
    links.forEach((link) => {
        link.addEventListener('click', handleLinkClick);
    });

    // Add event listener to close the popup
    closeOverlayButton.addEventListener('click', (event) => {
        event.preventDefault();
        overlay.classList.remove('active'); // Hide the popup when "I understand" is clicked
    });
}

// Function to handle form submission and track selected shields
function submit(event) {
    const form = document.querySelector('form');
    event.preventDefault();

    const formData = new FormData(form);
    activeShields = []; // Reset the shields array

    form.querySelectorAll('input[name="shields"]:checked').forEach((checkbox) => {
        activeShields.push(checkbox.value);
    });

    // Display active shields in the status message
    updateStatusMessage();

}

// Function to update the status message with selected shields
function updateStatusMessage() {
    const statusMessage = document.querySelector('.statusmessage');
    if (activeShields.length > 0) {
        statusMessage.textContent = `Shields active for ${activeShields.join(' & ')}`;
    } else {
        statusMessage.textContent = 'No shields active.';
    }
}

// Function to handle link clicks based on active shields
function handleLinkClick(event) {
    const link = event.currentTarget; // The clicked link
    const status = link.dataset.status; // The data-status of the link
    const overlay = document.querySelector('#overlay'); // The popup element

    // Check if the link's status is blocked by active shields
    if (activeShields.includes(status) || activeShields.includes("all")) {
        event.preventDefault(); // Prevent navigation
        overlay.classList.add('active'); // Show the popup by adding the `active` class
    }
}

