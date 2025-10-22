

class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <header>
            <nav id="navbar">
                <i class="fa fa-code" aria-hidden="true" id="nav_icon">Portfolio</i>

                <ul id="nav_list">
                    <li class="nav-item">
                        <a href="../../index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="../pages/about.html">About me</a>
                    </li>
                    <li class="nav-item">
                        <a href="../pages/projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="../pages/resume.html">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a href="../pages/contact.html">Contact</a>
                    </li>
                </ul>

                <button id="mobile_button">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </nav>

            <div id="mobile_menu">
                <ul id="mobile_nav_list">
                    <li class="nav-item">
                        <a href="../../index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="../pages/about.html">About me</a>
                    </li>
                    <li class="nav-item">
                        <a href="../pages/projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="../pages/contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a href="../pages/resume.html">Resume</a>
                    </li>
                </ul>
            </div>
        </header>`
    };
};

customElements.define ('my-header', MyHeader);

$(document).ready(function(){
    $('#mobile_button').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_button').find('i').toggleClass('fa-bars fa-xmark');
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const current = window.location.pathname.split("/").pop(); 
  document.querySelectorAll("#nav_list a").forEach(link => {
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
