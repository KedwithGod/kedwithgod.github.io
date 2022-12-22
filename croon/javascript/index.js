
class Header extends HTMLElement {
    constructor() {
      super();
    }
    
  
    connectedCallback() {
      
      this.innerHTML = `
   
        <style>
        .scroll_up {
          opacity: 0;
      }
      
      .scroll_down{
          opacity: 1;
      }
        .heading_background{
            position: absolute;
            width: 98vw ;
            height: 56vw;
            top:4.505vw;
            left: 5.695vw;
          max-width: 100%;
        }
        /* croon logo */
        .croonLogo{
            position: fixed;
             top: 2.5vw;
             left: 3vw;
             width:10vw;
             height:8vw;
             z-index: 1; 
           }
        /* heading categetory */
        .heading_category {
            position: fixed;
            top: 5.5vw;
            left: 20vw;
            z-index: 1;
            display: flex;
            justify-content: center;
            
        }
        .heading_category a{
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 1.20vw;
          align-content: center;
          text-align: center;
          color: rgba(0, 0, 0, 0.8); 
            text-decoration: none; 
        }
        /* div for the header button */
        .header_button{
            position: fixed;
            top: 4.3vw;
            right: 3.5vw;
             z-index: 1;
            
        }
        
        /* book a celeb button */
        .book_a_celeb{
            width: 12vw;
            height: 3.825vw;
            border-radius: 0.85vw;
            border:0px;
            background-color: var(--button-color);
            box-shadow: 3.06vw 2.38vw 17vw rgba(0, 0, 0, 0.25);
            color: rgba(61, 179, 173, 1);
            font-size: 1.275vw;
            font-weight: 600;
            font-family: 'Poppins';
            font-style: normal;
            text-decoration: none;
        }
        
        /* login button */
        .login{
            width: 12vw;
            height: 3.825vw;
            border-radius: 0.85vw;
            border:0px;
            background-color: var(--button-color);
            box-shadow:  3.06vw 2.38vw 17vw rgba(0, 0, 0, 0.25);
            color: black;
            font-size: 1.275vw;
            font-weight: 600;
            font-family: 'Poppins';
            font-style: normal;
           
        }
        .remove_decoration{
          text-decoration:none;
        }

        </style>
        <header>

        <nav class="header">
           <!-- header is placed below, so it can be above other item as they scroll throught-->
         <!-- croon logo -->
        
          <a href="/index.html"><img class="croonLogo" src = "/images/croonLogo.svg" alt="croon logo" /></a>
  
      <!-- menu text -->
      <div class="heading_category">
          <a href="#celebrity_id" class='regular_text' style="margin-right: 1.36vw" >Categories</a>
          <a href="#ongoing_project_id" class='regular_text' style="margin-right: 1.36vw">Our Work</a>
          <a href="#how_we_work_id" class='regular_text' style="margin-right: 1.36vw">Packages</a>
          <a href="#ongoing_project_id" class='regular_text' style="margin-right: 1.36vw">Get Involved</a>
          <a href="#ongoing_project_id" class='regular_text' style="margin-right: 1.36vw">About us</a>
    
      <div class="header_button">
      <a class="remove_decoration" href="../celeb/book_a_celeb.html">  <button class="book_a_celeb" style="margin-right:2.55vw" onchange="count" type="button">Book a Celeb</button> </a>
            <a class="remove_decoration" href="../authentication/login.html">
              <button class="login" type="button">Login</button>
            </a>
      </div>
      </div>
    </nav>
        </header>
   <script>
   const body = document.body;
const header = document.querySelector("header");
const main = document.querySelector("main");
const headerHeight = document.querySelector("header").offsetHeight;
main.style.top = headerHeight + "px";
let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll - lastScroll > 0) {
   console.log('up')
    header.classList.remove("scroll_down");
    header.classList.add("scroll_up");
  } else {
    // scrolled up -- header show
    header.classList.remove("scroll_up");
    header.classList.add("scroll_down");
    console.log('down')
  }
  lastScroll = currentScroll;
})
   </script>

      `;
    }
  }


  customElements.define('header-component', Header);

  var x, i, j, selElmnt, a, b, c;
      /*look for any elements with the class "custom-select":*/
      x = document.getElementsByClassName("custom-select");
      for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {
          /*for each option in the original select element,
          create a new DIV that will act as an option item:*/
          c = document.createElement("DIV");
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener("click", function(e) {
              /*when an item is clicked, update the original select box,
              and the selected item:*/
              var y, i, k, s, h;
              s = this.parentNode.parentNode.getElementsByTagName("select")[0];
              h = this.parentNode.previousSibling;
              for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  h.innerHTML = this.innerHTML;
                  y = this.parentNode.getElementsByClassName("same-as-selected");
                  for (k = 0; k < y.length; k++) {
                    y[k].removeAttribute("class");
                  }
                  this.setAttribute("class", "same-as-selected");
                  break;
                }
              }
              h.click();
          });
          b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
      }
      function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
          if (elmnt == y[i]) {
            arrNo.push(i)
          } else {
            y[i].classList.remove("select-arrow-active");
          }
        }
        for (i = 0; i < x.length; i++) {
          if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
          }
        }
      }
      /*if the user clicks anywhere outside the select box,
      then close all select boxes:*/
      document.addEventListener("click", closeAllSelect);