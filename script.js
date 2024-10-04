


function show_sidebar() {
    let sidebar = document.getElementById("sidebar");
    let hamburger = document.getElementById("hamburger");

    var ham_close = "assets/Hamburger_Close.svg";
    var ham_open = "assets/Hamburger_open.svg";

    // Toggle the sidebar visibility
    sidebar.classList.toggle("side-active");

    // Check the current state of the sidebar and change the hamburger icon accordingly
    if (sidebar.classList.contains("side-active")) {
        hamburger.src = ham_close;  
    } else {
        hamburger.src = ham_open;   // Open icon when sidebar is inactive
    }
}
