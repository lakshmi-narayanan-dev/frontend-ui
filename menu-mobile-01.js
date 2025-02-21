<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

        * {
            padding: 0;
            margin: 0;
            font-family: "Oswald", serif;
            box-sizing: border-box;
            font-size: 16px;
        }

        /* main nav */
        .nav {
            position: fixed;
            top: 0;
            width: 100%;
            left: 0;
            border-bottom: 1px solid gainsboro;
            z-index: 1000 !important;
            display: none;
        }

        /* nav ul */
        .nav ul {
            list-style: none;
        }

        /* nav container */
        .nav-container {
            height: 65px;
            max-width: 100%;
            background-color: rgb(255, 255, 255);
        }

        /* nav data left menus */
        .nav-data {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            padding: 0 2.5%;
        }

        /* logo */
        .nav .logo-data img {
            max-width: 5rem;
            /* height: 100%; */
        }

        .nav .logo-data {
    color: black;
        }

        /* nav a tags */
        .nav a {
            text-decoration: none;
        }

        /* nav toggle */
        .nav-toggle {
            position: relative;
            width: 20px;
            height: 20px;
        }

        .nav-toggle #close,
        .nav-toggle #hamburger {
            color: rgb(0, 0, 0);
            font-size: 1.3rem;
            position: absolute;
            display: grid;
            place-items: center;
            inset: 0;
            cursor: pointer;
            transition: opacity .2s ease, transform .5s ease;
        }

        .nav-toggle #close {
            opacity: 0;
        }

        /* Dropdown Menus */
        .mega-btn {
            cursor: pointer;
        }

        /* Dropdown Menu Arrow */
        .mega-btn-arrow {
            font-size: 1rem;
            color: goldenrod;
            font-weight: 100;
        }

        .li-btn-arrow {
            color: rgb(0, 0, 0);
            font-size: .8rem;
        }

        /* mega content */
        .mega-btn-content {
            display: flex;
            /* background-color: rgb(64, 255, 0); */
            padding: 1.5rem;
            padding-bottom: 3rem;
            border-bottom: 1px solid gainsboro;
        }

        /* Mega Container */
        .mega-btn-container {
            background-color: rgb(255, 255, 255);
            height: 0;
            overflow: hidden;
            transition: height 1s ease, background-color .4s ease;
        }

        .mega-btn-bg-toggle {
            background-color: #000000 !important;
            color: white !important;
        }

        /* Mega Canva left */
        .mega-btn-content-01 .mega-btn-content-01-left {
            min-width: 100%;
            padding-bottom: 0rem;
            border-bottom: 1px solid gainsboro;
            margin-bottom: 1.5rem;
            /* border: 1px solid red; */
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
        }

        /* Mega Canva right a */
        .mega-btn-content-01-right-a {
            color: #000;
            margin-top: 1.5rem !important;
            min-width: 100%;
            padding-left: 1rem;
            border-left: 1px solid gainsboro;
            display: flex;
            flex-direction: column;
        }

        /* 02 Menu */
        .mega-btn-content-02 {
            display: flex;
            flex-direction: column;
        }

        .mega-btn-content-02 h2 {
            margin-bottom: 1.5rem;
            text-decoration: 1px underline gainsboro;
            text-underline-offset: 5px;
            /* padding-left: 1rem; */
            margin-top: 1rem;
            color: goldenrod;
            font-weight: 400;
        }

        .mega-btn-content-02 a {
            margin-bottom: 1.5rem;
            color: #000;
            padding-left: 1rem;
            border-left: 1px solid gainsboro;
            font-weight: 400;
        }

        .mega-btn-content-02 a:last-child {
            margin-bottom: 0;
        }

        .mega-btn-content-01-right-a:first-child {
            margin-top: 0 !important;
        }

        /* Mega Canva Left a */
        .mega-btn-content-01-left-a {
            margin-bottom: 1.5rem !important;
            color: #000;
            display: flex;
            flex-direction: column;
            /* border: 1px solid red; */
            min-width: 100%;
            padding-left: 1rem;
            border-left: 1px solid gainsboro;
            transition: color .6s ease;
        }


        .mega-btn-content-01-left-a:hover {
            color: blue;
        }

        /* nav link */
        .nav-link {
            color: rgb(0, 0, 0);
            font-weight: 300;
            padding: 1rem 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid gainsboro;
            transition: all .4s ease;
        }

        .nav-link:hover {
            background-color: #000 !important;
            color: white !important;
            transition: all .4s ease;
        }


        .mega-btn-content-01 p {
            font-size: .85rem;
            font-weight: 300;
            display: none;
        }

        .mega-btn-content-01 h2,
        .mega-btn-content-01 h3 {
            font-weight: 400;
        }

        /* Mobile */
        @media screen and (max-width : 1100px) {

            .nav {
                display: block;
            }

            /* mobile nav menu entire container */
            .nav-menu {
                background-color: rgb(255, 255, 255);
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: calc(100vh - 71px);
                overflow: auto;
                pointer-events: none;
                opacity: 0;
                transition: top .3s, opacity .2s;
            }

            .mega-btn-content-01 a img,
            .mega-btn-content-01-right-a .fa-tiktok {
                display: none;
                visibility: hidden;
            }


            /* Show menu on click */
            .show-menu-toggle {
                opacity: 1;
                pointer-events: initial;
                top: 66px !important;
            }

            /* change menu icon to x icon on click */
            .show-icon-toggle #hamburger {
                opacity: 0;
                transform: rotate(720deg);
            }

            .show-icon-toggle #close {
                opacity: 1;
                transform: rotate(720deg);
            }

            .nav-data {
                padding: 0 1.5rem 0 2rem;
            }

            /* Canva menu */
            .mega-btn-content-01 {
                flex-direction: column;
            }
        }
    </style>

</head>

<body>

    <!-- nav => fixed -->
    <div class="nav">

        <!-- Entire nav container => relative -->
        <div class="nav-container">

            <!-- menus Control -->
            <div class="nav-data" id="nav-data">

                <!-- logo -->
                <a href="https://naraine.tech/err/" class="logo-data">
                   <!-- <img src="https://geraldarundass.com/-/ASSETS/Logos/LogoC.webp" alt="images"> -->
                    LOGO.
                </a>

                <div class="nav-toggle" id="nav-toggle">
                    <i class="fa-solid fa-xmark" id="close"></i>
                    <i class="fa-solid fa-compass" id="hamburger"></i>
                </div>

            </div>

            <!-- Dropdowns + Megamenus -->
            <div class="nav-menu" id="nav-menu">

                <!-- main ul navbar -->
                <ul class="nav-menu-ul-01">

                    <!-- About 01 -->
                    <li class="nav-menu-ul-01-mega">
                        <div class="nav-link mega-btn">
                            Menu 01
                            <i class="fa-solid fa-sort-down mega-btn-arrow"></i>
                        </div>

                        <div class="mega-btn-container">
                            <!-- <div class="mega-btn-content mega-btn-content-01">
                                <div class="mega-btn-content-01-left">
                                    <a href="https://geraldarundass.com/-/" class="mega-btn-content-01-left-a">
                                        <img src="https://content-management-files.canva.com/19cffaaf-33c5-40a6-8784-29efb5121920/a668dd8e-ce27-4017-8916-61d9ab90d578.png"
                                            alt="image">
                                        <h2>
                                           SUB_MENU
                                        </h2>
                                        <p>
                                            Achieve lasting transformation in all areas of your life.
                                        </p>
                                    </a>

                                    <a href="https://geraldarundass.com/-/" class="mega-btn-content-01-left-a">
                                        <img src="https://content-management-files.canva.com/19cffaaf-33c5-40a6-8784-29efb5121920/a668dd8e-ce27-4017-8916-61d9ab90d578.png"
                                            alt="image">
                                        <h2>
                                            SUB_MENU
                                        </h2>
                                        <p>
                                            Achieve lasting transformation in all areas of your life.
                                        </p>
                                    </a>

                                    <a href="https://geraldarundass.com/-/" class="mega-btn-content-01-left-a">
                                        <img src="https://content-management-files.canva.com/19cffaaf-33c5-40a6-8784-29efb5121920/a668dd8e-ce27-4017-8916-61d9ab90d578.png"
                                            alt="image">
                                        <h2>
                                            SUB_MENU
                                        </h2>
                                        <p>
                                            Achieve lasting transformation in all areas of your life.
                                        </p>
                                    </a>

                                    <a href="https://geraldarundass.com/-/" class="mega-btn-content-01-left-a">
                                        <img src="https://content-management-files.canva.com/19cffaaf-33c5-40a6-8784-29efb5121920/a668dd8e-ce27-4017-8916-61d9ab90d578.png"
                                            alt="image">
                                        <h2>
                                            SUB_MENU
                                        </h2>
                                        <p>
                                            Achieve lasting transformation in all areas of your life.
                                        </p>
                                    </a>
                                </div>

                                <div class="mega-btn-content-01-right">
                                    <a href="https://geraldarundass.com/-/" class="mega-btn-content-01-right-a">
                                        <i class="fa-brands fa-tiktok"></i>
                                        <div>
                                            <h3>MAIN_MENU</h3>
                                            <p>
                                                Achieve lasting transformation in all areas of your life.
                                            </p>
                                        </div>
                                    </a>
                                    <a href="https://geraldarundass.com/-/" class="mega-btn-content-01-right-a">
                                        <i class="fa-brands fa-tiktok"></i>
                                        <div>
                                            <h3>MAIN_MENU</h3>
                                            <p>
                                                Achieve lasting transformation in all areas of your life.
                                            </p>
                                        </div>
                                    </a>
                                    <a href="https://geraldarundass.com/-/" class="mega-btn-content-01-right-a">
                                        <i class="fa-brands fa-tiktok"></i>
                                        <div>
                                            <h3>MAIN_MENU</h3>
                                            <p>
                                                Achieve lasting transformation in all areas of your life.
                                            </p>
                                        </div>
                                    </a>
                                </div>

                            </div> -->

                            <div class="mega-btn-content mega-btn-content-02">

                               
                             <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                            </div>

                        </div>

                    </li>

                    <!-- Consulting 02 -->
                    <li class="nav-menu-ul-01-mega">
                        <div class="nav-link mega-btn">
                            MENU 02
                            <i class="fa-solid fa-sort-down mega-btn-arrow"></i>
                        </div>

                        <div class="mega-btn-container">
                            <div class="mega-btn-content mega-btn-content-02">

                                <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>


                                <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>

                               <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                
                               <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>

                                <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>

                                <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                
                                <br>
                                <a href="#">SUB_MENU</a>

                            </div>
                        </div>
                    </li>

                    <!-- Coaching 03 -->
                    <li class="nav-menu-ul-01-mega">
                        <div class="nav-link mega-btn">
                            MENU 03
                            <i class="fa-solid fa-sort-down mega-btn-arrow"></i>
                        </div>

                        <div class="mega-btn-container">
                            <div class="mega-btn-content mega-btn-content-02">
                                
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>

                              <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>

                              <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>

                                <br>
                                <a href="">SUB_MENU</a>
                            </div>
                        </div>

                    </li>

                    <!-- Corporate 04 -->
                    <li class="nav-menu-ul-01-mega">
                        <div class="nav-link mega-btn">
                            MENU 04
                            <i class="fa-solid fa-sort-down mega-btn-arrow"></i>
                        </div>

                        <div class="mega-btn-container">
                            <div class="mega-btn-content mega-btn-content-02">

                                 <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>

                              <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>

                                
                            </div>
                        </div>
                    </li>

                    <!-- Events 05 -->
                    <li class="nav-menu-ul-01-mega">
                        <div class="nav-link mega-btn">
                            MENU 05
                            <i class="fa-solid fa-sort-down mega-btn-arrow"></i>
                        </div>

                        <div class="mega-btn-container">
                            <div class="mega-btn-content mega-btn-content-02">

                                <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>

                              <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                
                            </div>
                        </div>
                    </li>

                    <!-- Discover 06 -->
                    <li class="nav-menu-ul-01-mega">
                        <div class="nav-link mega-btn">
                            MENU 06
                            <i class="fa-solid fa-sort-down mega-btn-arrow"></i>
                        </div>

                        <div class="mega-btn-container">
                            <div class="mega-btn-content mega-btn-content-02">
                                
                                <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>

                              <h2>SUB_MENU_HEADING</h2>
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>

                            </div>
                        </div>
                    </li>

                    <!-- Shop 07 -->
                    <li class="nav-menu-ul-01-mega">
                        <div class="nav-link mega-btn">
                           MENU 07
                            <i class="fa-solid fa-sort-down mega-btn-arrow"></i>
                        </div>

                        <div class="mega-btn-container">
                            <div class="mega-btn-content mega-btn-content-02">                     
                                <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                                 <a href="">SUB_MENU</a>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="https://geraldarundass.com/-/" class="nav-link">MENU_SOLO <i
                                class="fa-solid fa-download li-btn-arrow"></i></a>
                    </li>

                    <li>
                        <a href="https://geraldarundass.com/-/" class="nav-link">MENU_SOLO<i
                                class="fa-solid fa-right-to-bracket li-btn-arrow"></i></a>
                    </li>
                </ul>
            </div>

        </div>
    </div>

</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js"
    integrity="sha512-b+nQTCdtTBIRIbraqNEwsjB6UvL3UEMkXnhzd8awtCYh0Kcsjl9uEgwVFVbhoj3uu1DO1ZMacNvLoyJJiNfcvg=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>


<!-- menus js -->
<script>

    // Menu Toggle
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav-menu');

    // Toggle menu visibility
    toggle.addEventListener("click", () => {
        nav.classList.toggle('show-menu-toggle');
        const audioPlay = new Audio('./audio.wav');
        audioPlay.play();

        // Toggle icon state
        toggle.classList.toggle('show-icon-toggle');
    });

    // Menu Dropdown On Hover with transition for each
    const dropdownItems = document.querySelectorAll('.nav-menu-ul-01-mega'); // Corrected variable name

    dropdownItems.forEach((dropdownItem) => {
        const dropdownBtn = dropdownItem.querySelector('.nav-link.mega-btn'); // Ensure both classes are applied

        dropdownBtn.addEventListener("click", function () {
            // Close all other dropdowns
            closeOtherDropdowns(dropdownItem);

            const audioPlay = new Audio('./audio.wav');
            audioPlay.play();

            // Toggle the clicked dropdown
            toggleDropdownHeight(dropdownItem);

            // Toggle background color or style if needed
            dropdownBtn.classList.toggle('mega-btn-bg-toggle');
        });
    });

    // Adjust dropdown height when clicked
    const toggleDropdownHeight = (dropdownItem) => {
        const dropContainer = dropdownItem.querySelector('.mega-btn-container');
        const isOpen = dropContainer.style.height && dropContainer.style.height !== '0px';

        // Toggle height smoothly
        if (isOpen) {
            dropContainer.style.height = '0px';
        } else {
            dropContainer.style.height = dropContainer.scrollHeight + 'px';
        }
    }

    // Close all other dropdowns except the clicked one
    const closeOtherDropdowns = (currentDropdown) => {
        dropdownItems.forEach((dropdownItem) => {
            if (dropdownItem !== currentDropdown) {
                const dropContainer = dropdownItem.querySelector('.mega-btn-container');
                dropContainer.style.height = '0px'; // Close the other dropdowns
                const dropdownBtn = dropdownItem.querySelector('.nav-link.mega-btn');
                dropdownBtn.classList.remove('mega-btn-bg-toggle'); // Optionally remove any styling applied
            }
        });
    }


</script>

</html>
