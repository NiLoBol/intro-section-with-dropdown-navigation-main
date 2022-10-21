const nav = document.querySelector(".navbar")
const savenav = document.querySelector(".navbar")
const content = document.querySelector("#row")
console.log(nav);
let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    console.log(width);
    if (width <= 550) {
        nav.innerHTML =
            `
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="images/logo.svg" class="img-fluid rounded-top"
                            alt="logo"></a>
                    <button type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <img src="images/icon-menu.svg" alt="">
                    </button>
                    <div class="offcanvas offcanvas-end bg-light" tabindex="-1" id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                        <button type="button" class="fr" data-bs-dismiss="offcanvas">
                                <img  src="images/icon-close-menu.svg" alt="">
                        </button>
                       
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">Features</a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                                        <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                                src="images/icon-todo.svg" alt="todo">Todo List</a>
                                        <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                                src="images/icon-calendar.svg" alt="calendar">Calendar</a>
                                        <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                                src="images/icon-reminders.svg" alt="reminders">Reminder</a>
                                        <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                                src="images/icon-planning.svg" alt="planning">Planning</a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="dropdownId2" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">Company</a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownId2">
                                        <a class="dropdown-item" href="#">History</a>
                                        <a class="dropdown-item" href="#">Our Team</a>
                                        <a class="dropdown-item" href="#">Blog</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#">Careers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                            </ul>
                            <div class="navbar-nav mx-3 mt-2 mt-lg-0">
                                <a class="nav-link mx-3 text-center" href="#">Login</a>
                                <a  id="Register" class="btn btnre" href="#" role="button">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
        `;

    }
    else{
        nav.innerHTML =
            `
            <div class="container mx-5 mt-3 mb-1">
                <a class="navbar-brand" href="#"><img src="images/logo.svg" class="img-fluid rounded-top"
                        alt="logo"></a>
                
                <div class="collapse  navbar-collapse " id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Features</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon" src="images/icon-todo.svg"
                                        alt="todo">Todo List</a>
                                <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                        src="images/icon-calendar.svg" alt="calendar">Calendar</a>
                                <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                        src="images/icon-reminders.svg" alt="reminders">Reminder</a>
                                <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                        src="images/icon-planning.svg" alt="planning">Planning</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId2" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Company</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId2">
                                <a class="dropdown-item" href="#">History</a>
                                <a class="dropdown-item" href="#">Our Team</a>
                                <a class="dropdown-item" href="#">Blog</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Careers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    <div class="d-flex my-2 my-lg-0">
                        <div class="row ">
                            <div class="col-6 navbar-nav me-auto mt-2 mt-lg-0">
                                <a class="nav-link " href="#">Login</a>
                            </div>
                            <div class="col-6">
                                <a  id="Register" class="btn btnre" href="#" role="button">Register</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            `;
        
    }

    if(width<=800){
        content.innerHTML =
            `
                    <div class="col-12">
                        <img class="w-100" src="images/image-hero-mobile.png" alt="img">
                    </div>
                    <div class="col-12 text-center ">
                        <h1 class="head-font">Make remote work</h1>
                        <p class="p-get">Get your team in sync, no matter your location.
                            Streamline processes, create team rituals, and
                            watch productivity soar.
                        </p>
                        <button type="button" class="btn btn-dark fw700">Learn more</button>
                        <div class="icon-end">
                            <div class="row mb-5">
                                <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img class="w80px" src="images/client-databiz.svg" alt="databiz"></div>
                                <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img class="w80px" src="images/client-audiophile.svg" alt="audio"></div>
                                <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img class="w80px" src="images/client-meet.svg" alt="meet"></div>
                                <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img class="w80px" src="images/client-maker.svg" alt="maker"></div>
                            </div>
                        </div>
                        
                    </div>
        `;
    }
    else{
        content.innerHTML =
            `
                <div class="col-xl-7 col-lg-7 col-md-7 col-xs-12" id="content">
                    <h1 class="head-font">Make remote work</h1>
                    <p class="p-get">Get your team in sync, no matter your location.
                        Streamline processes, create team rituals, and
                        watch productivity soar.
                    </p>
                    <button type="button" class="btn btn-dark fw700">Learn more</button>
                    <div class="row">
                        <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img src="images/client-databiz.svg" alt="databiz"></div>
                        <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img src="images/client-audiophile.svg" alt="audio"></div>
                        <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img src="images/client-meet.svg" alt="meet"></div>
                        <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img src="images/client-maker.svg" alt="maker"></div>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-xs-12" id="img">
                    <img class="w-100" src="images/image-hero-desktop.png" alt="">
                </div>
            `;
    }
addEventListener('resize', (event) => {
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    console.log(width);
    if (width <= 550) {
        nav.innerHTML =
            `
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="images/logo.svg" class="img-fluid rounded-top"
                            alt="logo"></a>
                    <button type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <img src="images/icon-menu.svg" alt="">
                    </button>
                    <div class="offcanvas offcanvas-end bg-light" tabindex="-1" id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                        <button type="button" class="fr" data-bs-dismiss="offcanvas">
                                <img  src="images/icon-close-menu.svg" alt="">
                        </button>
                       
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">Features</a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                                        <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                                src="images/icon-todo.svg" alt="todo">Todo List</a>
                                        <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                                src="images/icon-calendar.svg" alt="calendar">Calendar</a>
                                        <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                                src="images/icon-reminders.svg" alt="reminders">Reminder</a>
                                        <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                                src="images/icon-planning.svg" alt="planning">Planning</a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="dropdownId2" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">Company</a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownId2">
                                        <a class="dropdown-item" href="#">History</a>
                                        <a class="dropdown-item" href="#">Our Team</a>
                                        <a class="dropdown-item" href="#">Blog</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#">Careers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                            </ul>
                            <div class="navbar-nav mx-3 mt-2 mt-lg-0">
                                <a class="nav-link mx-3 text-center" href="#">Login</a>
                                <a id="Register" class="btn btnre" href="#" role="button">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
        `;

    }
    else{
        nav.innerHTML =
            `
            <div class="container mx-5 mt-3 mb-1">
                <a class="navbar-brand" href="#"><img src="images/logo.svg" class="img-fluid rounded-top"
                        alt="logo"></a>
                
                <div class="collapse  navbar-collapse " id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Features</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon" src="images/icon-todo.svg"
                                        alt="todo">Todo List</a>
                                <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                        src="images/icon-calendar.svg" alt="calendar">Calendar</a>
                                <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                        src="images/icon-reminders.svg" alt="reminders">Reminder</a>
                                <a class="dropdown-item" href="#"><img class="pe-3 mx-1 icon"
                                        src="images/icon-planning.svg" alt="planning">Planning</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId2" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Company</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId2">
                                <a class="dropdown-item" href="#">History</a>
                                <a class="dropdown-item" href="#">Our Team</a>
                                <a class="dropdown-item" href="#">Blog</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Careers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    <div class="d-flex my-2 my-lg-0">
                        <div class="row ">
                            <div class="col-6 navbar-nav me-auto mt-2 mt-lg-0">
                                <a class="nav-link " href="#">Login</a>
                            </div>
                            <div class="col-6">
                                <a  id="Register" class="btn btnre" href="#" role="button">Register</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            `;
        
    }

    if(width<=800){
        content.innerHTML =
            `
                    <div class="col-12">
                        <img class="w-100" src="images/image-hero-mobile.png" alt="img">
                    </div>
                    <div class="col-12 text-center ">
                        <h1 class="head-font">Make remote work</h1>
                        <p class="p-get">Get your team in sync, no matter your location.
                            Streamline processes, create team rituals, and
                            watch productivity soar.
                        </p>
                        <button type="button" class="btn btn-dark fw700">Learn more</button>
                        <div class="icon-end">
                            <div class="row mb-5">
                                <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img class="w80px" src="images/client-databiz.svg" alt="databiz"></div>
                                <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img class="w80px" src="images/client-audiophile.svg" alt="audio"></div>
                                <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img class="w80px" src="images/client-meet.svg" alt="meet"></div>
                                <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img class="w80px" src="images/client-maker.svg" alt="maker"></div>
                            </div>
                        </div>
                        
                    </div>
        `;
    }
    else{
        content.innerHTML =
            `
                <div class="col-xl-7 col-lg-7 col-md-7 col-xs-12" id="content">
                    <h1 class="head-font">Make remote work</h1>
                    <p class="p-get">Get your team in sync, no matter your location.
                        Streamline processes, create team rituals, and
                        watch productivity soar.
                    </p>
                    <button type="button" class="btn btn-dark fw700">Learn more</button>
                    <div class="row">
                        <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img src="images/client-databiz.svg" alt="databiz"></div>
                        <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img src="images/client-audiophile.svg" alt="audio"></div>
                        <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img src="images/client-meet.svg" alt="meet"></div>
                        <div class="col-xl-3  col-lg-6 col-md-3 pb-3 col-3"><img src="images/client-maker.svg" alt="maker"></div>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-xs-12" id="img">
                    <img class="w-100" src="images/image-hero-desktop.png" alt="">
                </div>
            `;
    }
});



