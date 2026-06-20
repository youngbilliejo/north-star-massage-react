// navigation.js

// Main top navigation (only the .nav div)
const navHTML = `
    <a href="/North-Star-Massage/index.html">Home</a>
    <a href="/North-Star-Massage/benefits.html">Benefits</a>
    <a href="/North-Star-Massage/services-rates.html">Services & Rates</a>
    <a href="/North-Star-Massage/contact.html">Contact</a>
    <a href="/North-Star-Massage/scheduling.html">Scheduling</a>
    <a href="/North-Star-Massage/faq.html">FAQ</a>
`;

// Sidebar navigation (only the content inside .sidebar)
const sidebarHTML = `
    <h3>Quick Links</h3>
    <ul>
        <li><a href="/North-Star-Massage/index.html">Home</a></li>
        <li><a href="/North-Star-Massage/benefits.html">Benefits</a></li>
        <li><a href="/North-Star-Massage/services-rates.html">Services & Rates</a></li>
        <li><a href="/North-Star-Massage/contact.html">Contact</a></li>
        <li><a href="/North-Star-Massage/scheduling.html">Scheduling</a></li>
        <li><a href="/North-Star-Massage/faq.html">FAQ</a></li>
    </ul>
`;

// Function to load both navigations
function loadNavigations() {
    // Replace only the .nav div
    const navContainer = document.querySelector('.nav');
    if (navContainer) {
        navContainer.innerHTML = navHTML;
    }

    // Replace only the .sidebar
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.innerHTML = sidebarHTML;
    }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', loadNavigations);