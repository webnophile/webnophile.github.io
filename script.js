    body {
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    background-color: #333;
    flex-wrap: wrap;
}
nav ul li {
    display: inline;
}
nav ul li a {
    color: white;
    text-decoration: none;
    padding: 14px 20px;
    display: block;
}
nav ul li a:hover {
    background-color: #575757;
}
#hero {
    text-align: center;
    padding: 50px 20px;
}
#hero h1 {
    font-size: 3em;
    margin: 0;
}
#hero p {
    font-size: 1.2em;
    margin: 20px 0;
}
#hero a {
    text-decoration: none;
    background-color: #f90;
    color: black;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
}
section {
    padding: 50px 20px;
    text-align: center;
}
footer {
    background-color: #333;
    padding: 20px 0;
    text-align: center;
}
footer ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
footer ul li {
    margin: 0 15px;
}
footer ul li a {
    color: white;
    text-decoration: none;
}
footer p {
    margin: 10px 0 0;
    font-size: 0.9em;
}
/* Slider CSS */
.slider {
    position: relative;
    max-width: 30%;
    margin: auto;
}
.slides {
    display: none;
}
.slider img {
    width: 100%;
    height: auto;
}
.prev, .next {
    cursor: pointer;
    position: center;
    top: auto;
    width: auto;
    padding: 16px;
    margin-top: -var(--transition);
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}
.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
}


/* Media Queries */
@media (max-width: 768px) {
    #hero h1 {
        font-size: 2em;
    }
    #hero p {
        font-size: 1em;
    }
    .slider {
        max-width: 90%;
    }
}

@media (max-width: 480px) {
    nav ul {
        flex-direction: column;
        align-items: center;
    }
    nav ul li a {
        padding: 10px 15px;
    }
    #hero h1 {
        font-size: 1.5em;
    }
    #hero p {
        font-size: 0.9em;
    }
    #hero a {
        padding: 8px 15px;
    }
    section {
        padding: 30px 15px;
    }
    footer ul {
        flex-direction: column;
    }
    footer ul li {
        margin: 10px 0;
    }
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

:root {
    --index: calc(1vw + 1vh);
    --transition: cubic-bezier(.1, .7, 0, 1);
}
.items {
    display: flex;
    gap: 0.4rem;
    perspective: calc(var(--index) * 35);
}

.item {
    width: calc(var(--index) * 3);
    height: calc(var(--index) * 12);
    background-color: #222;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    filter: grayscale(1) brightness(.5);
    transition: transform 1.25s var(--transition), filter 3s var(--transition), width 1.25s var(--transition);
    will-change: transform, filter, rotateY, width;
}

.item::before, .item::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 20px;
    right: calc(var(--index) * -1);
}

.item::after {
    left: calc(var(--index) * -1);
}

.items .item:hover {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 10));
}

.items .item:hover + * {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 8.5)) rotateY(35deg);
    z-index: -1;
}

.items .item:hover + * + * {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 5.6)) rotateY(40deg);
    z-index: -2;
}

.items .item:hover + * + * + * {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 2.5)) rotateY(30deg);
    z-index: -3;
}

.items .item:hover + * + * + * + * {
    filter: inherit;
    transform: translateZ(calc(var(--index) * .6)) rotateY(15deg);
    z-index: -4;
}

.items .item:has( + :hover) {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 8.5)) rotateY(-35deg);
}

.items .item:has( + * + :hover) {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 5.6)) rotateY(-40deg);
}

.items .item:has( + * + * + :hover) {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 2.5)) rotateY(-30deg);
}

.items .item:has( + * + * + * + :hover) {
    filter: inherit;
    transform: translateZ(calc(var(--index) * .6)) rotateY(-15deg);
}

.items .item:active, .items .item:focus {
    width: 28vw;
    filter: inherit;
    z-index: 100;
    transform: translateZ(calc(var(--index) * 10));
    margin: 0 .45vw;
}
/* Define the keyframes for the fade-in animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Apply the animation to all section elements */
section {
    animation: fadeIn 1s ease-in-out;
    opacity: 0;
    animation-fill-mode: forwards;
}

/* Ensure the animation is applied when the element is in view */
section.in-view {
    opacity: 1;
    animation-play-state: running;
}
body {
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    background-color: #333;
}
nav ul li {
    display: inline;
}
nav ul li a {
    color: white;
    text-decoration: none;
    padding: 14px 20px;
    display: block;
}
nav ul li a:hover {
    background-color: #575757;
}
#hero {
    text-align: center;
    padding: 50px 20px;
}
#hero h1 {
    font-size: 3em;
    margin: 0;
}
#hero p {
    font-size: 1.2em;
    margin: 20px 0;
}
#hero a {
    text-decoration: none;
    background-color: #f90;
    color: black;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
}
section {
    padding: 50px 20px;
    text-align: center;
}

footer {
    background-color: #333;
    padding: 20px 0;
    text-align: center;
}
footer ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
}
footer ul li {
    margin: 0 15px;
}
footer ul li a {
    color: white;
    text-decoration: none;
}
footer p {
    margin: 10px 0 0;
    font-size: 0.9em;
}
#templates
.wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

:root{
    --index: calc(1vw + 1vh);
    --transition: cubic-bezier(.1, .7, 0, 1);
}
.items{
    display: flex;
    gap: 0.4rem;
    perspective: calc(var(--index) * 35);
}

.item{
    width: calc(var(--index) * 3);
    height: calc(var(--index) * 12);
    background-color: #222;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    filter: grayscale(1) brightness(.5);
    transition: transform 1.25s var(--transition), filter 3s var(--transition), width 1.25s var(--transition);
    will-change: transform, filter, rotateY, width;
}

.item::before, .item::after{
    content: '';
    position: absolute;
    height: 100%;
    width: 20px;
    right: calc(var(--index) * -1);
}

.item::after{
    left: calc(var(--index) * -1);
}

.items .item:hover{
    filter: inherit;
    transform: translateZ(calc(var(--index) * 10));
}

.items .item:hover + *{
    filter: inherit;
    transform: translateZ(calc(var(--index) * 8.5)) rotateY(35deg);
    z-index: -1;
}

.items .item:hover + * + *{
    filter: inherit;
    transform: translateZ(calc(var(--index) * 5.6)) rotateY(40deg);
    z-index: -2;
}

.items .item:hover + * + * + *{
    filter: inherit;
    transform: translateZ(calc(var(--index) * 2.5)) rotateY(30deg);
    z-index: -3;
}

.items .item:hover + * + * + * + *{
    filter: inherit;
    transform: translateZ(calc(var(--index) * .6)) rotateY(15deg);
    z-index: -4;
}

.items .item:has( + :hover){
    filter: inherit;
    transform: translateZ(calc(var(--index) * 8.5)) rotateY(-35deg);
}

.items .item:has( + * + :hover){
    filter: inherit;
    transform: translateZ(calc(var(--index) * 5.6)) rotateY(-40deg);
}

.items .item:has( + * + * + :hover){
    filter: inherit;
    transform: translateZ(calc(var(--index) * 2.5)) rotateY(-30deg);
}

.items .item:has( + * + * + * + :hover){
    filter: inherit;
    transform: translateZ(calc(var(--index) * .6)) rotateY(-15deg);
}

.items .item:active, .items .item:focus {
	width: 28vw;
	filter: inherit;
	z-index: 100;
	transform: translateZ(calc(var(--index) * 10));
    margin: 0 .45vw;
}
.wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

:root{
    --index: calc(1vw + 1vh);
    --transition: cubic-bezier(.1, .7, 0, 1);
}
.items{
    display: flex;
    gap: 0.4rem;
    perspective: calc(var(--index) * 35);
}

.item{
    width: calc(var(--index) * 3);
    height: calc(var(--index) * 12);
    background-color: #222;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    filter: grayscale(1) brightness(.5);
    transition: transform 1.25s var(--transition), filter 3s var(--transition), width 1.25s var(--transition);
    will-change: transform, filter, rotateY, width;
}

.item::before, .item::after{
    content: '';
    position: absolute;
    height: 100%;
    width: 20px;
    right: calc(var(--index) * -1);
}

.item::after{
    left: calc(var(--index) * -1);
}

.items .item:hover{
    filter: inherit;
    transform: translateZ(calc(var(--index) * 10));
}

.items .item:hover + *{
    filter: inherit;
    transform: translateZ(calc(var(--index) * 8.5)) rotateY(35deg);
    z-index: -1;
}

.items .item:hover + * + *{
    filter: inherit;
    transform: translateZ(calc(var(--index) * 5.6)) rotateY(40deg);
    z-index: -2;
}

.items .item:hover + * + * + *{
    filter: inherit;
    transform: translateZ(calc(var(--index) * 2.5)) rotateY(30deg);
    z-index: -3;
}

.items .item:hover + * + * + * + *{
    filter: inherit;
    transform: translateZ(calc(var(--index) * .6)) rotateY(15deg);
    z-index: -4;
}

.items .item:has( + :hover){
    filter: inherit;
    transform: translateZ(calc(var(--index) * 8.5)) rotateY(-35deg);
}

.items .item:has( + * + :hover){
    filter: inherit;
    transform: translateZ(calc(var(--index) * 5.6)) rotateY(-40deg);
}

.items .item:has( + * + * + :hover){
    filter: inherit;
    transform: translateZ(calc(var(--index) * 2.5)) rotateY(-30deg);
}

.items .item:has( + * + * + * + :hover){
    filter: inherit;
    transform: translateZ(calc(var(--index) * .6)) rotateY(-15deg);
}

.items .item:active, .items .item:focus {
	width: 28vw;
	filter: inherit;
	z-index: 100;
	transform: translateZ(calc(var(--index) * 10));
    margin: 0 .45vw;
}
/* Contact Us Section */
#contact {
    background-color: #f9f9f9;
    padding: 50px 20px;
    text-align: center;
}
#contact h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
}
.contact-info p {
    font-size: 1.2em;
    margin: 10px 0;
}
.contact-info p i {
    margin-right: 10px;
    color: #555;
}
.contact-info a {
    color: rgb(0, 38, 255);
    text-decoration: none;
}
.contact-info a:hover {
    text-decoration: underline;
}
.contact-form {
    max-width: 600px;
    margin: 20px auto;
}
.contact-form form {
    display: flex;
    flex-direction: column;
}
.contact-form input, .contact-form textarea {
    margin-bottom: 15px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
}
.contact-form button {
    padding: 15px;
    background-color: rgb(0, 119, 255);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.contact-form button:hover {
    background-color: #008cff;
}
/* About Us Section */
#about {
    padding: 50px 20px;
    text-align: center;
    background-color: #f8f8f8;
}

#about h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
}

.about-content img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 10px;
}

.about-content p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #666;
    margin-bottom: 20px;
}

.about-content i {
    margin-right: 10px;
    color: #5d5d5d;
}

/* Media Queries */
@media (max-width: 768px) {
    .about-content {
        padding: 0 20px;
    }
}

@media (max-width: 480px) {
    #about h2 {
        font-size: 2em;
    }

    .about-content p {
        font-size: 1em;
    }
}
#templates {
    background: linear-gradient(to bottom right, #4A90E2, #9013FE);
    color: white;
    text-align: center;
    padding: 50px 20px;
}
#templates h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
}
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}
.items {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
.item {
    width: 200px;
    height: 300px;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: transform 0.3s ease, filter 0.3s ease;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
}
.item:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
}
.item img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.item .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}
.item:hover .overlay {
    opacity: 1;
}
.item .overlay-content {
    text-align: center;
    color: white;
}
.item .overlay-content i {
    font-size: 3em;
    margin-bottom: 10px;
}
@media (max-width: 768px) {
    .item {
        width: 150px;
        height: 225px;
    }
}
@media (max-width: 480px) {
    .item {
        width: 100px;
        height: 150px;
    }
}
