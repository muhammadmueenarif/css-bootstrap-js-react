we have already learned css and js. now we will focus on bootstrap and react. 

Lec 01. Bootstrap Environment Setup
Bootstrap packages include  scaffolding, components, css, js plugins. 

scaffolding means we will get number of folders differently for css, for js in the different folders 
so that we can pickup particular concept from scaffolded folder. 

components means if we want to use icon in a button or giph icons. 
js plugins helps us in making rapid app development. 

goto bootstrap website and setup Environment. we can setup using cdn links, download source code or 
download css and js files.

Lec 02. Bootstrap Forms
form-group class to div. means all things in it will be logically bound together. So whenever we will apply some
changes in this div that will be applicable for all the controls inside this form group.
So logically which controls are doing the similar task we will enclose them inside a group.

form-control class in input. makes input responsive. 

form-inline class to form. it will align in single line. form-inline class is not applicable in Bootstrap 5.
we can use the d-flex and flex-wrap classes to achieve the same effect. 


Lec 03. Badges 
Badgers give additional information along with the label.
nav nav pills in nav for 3 lines. 
active means selected.       
<li><a href="#">Messages <span class="badge">3</span></a></li> this 3 will be showin in front of Messages
like a badge. badge-pill class will make it circular.

nav-stacked class in ul will make all the list items vertical. 
The nav-stacked class is not a valid class in Bootstrap 5. It was used in Bootstrap 3, but in Bootstrap 5, 
you should use flex-column instead.

The pull-right class is not a valid class in Bootstrap 5. It was used in Bootstrap 3, but in Bootstrap 5, you should use float-end instead.

while using ul and li for nav. give nav-item class to li, nav-link class to a in li. then active class
will work. 


Lec 04. Bootstrap Alerts.
we can use it for feedback and showing something to users. we can show close icon to close alert. 
alert-success, info, warning, danger are just to give different colors to our alert. 

alert-dismissible class will show close icon. it is not in bootstrap 5 but it was in 3. we use close class 
to show close icon.

data-dismiss="alert", it will not remove the alert but we will use data-bs-dismiss="alert".


Lec 05. Bootstrap Breadcrumbs
Breadcrumbs is like we go to home/sport/cricket page of a website. it provides us facility to go back
in the same order.
we can use lists for this purpose. 
to show list items as breadcrumbs and at some space, we will use breadcrumb-item class in each list item.

Lec 06. Bootstrap Button Groups
if we put buttons group, it gives a feeling of menu. we can create a menu in web page using button groups.
we can set different actions for different buttons. 

btn-group class will group all buttons inside it. 
btn-group-lg class will give large size to buttons. 
btn-group-vertical class will make buttons vertical.
btn-group-sm class will make buttons small.
btn-group-xs class will make buttons extra small.
btn-group-vertical will arrange buttons in vertical order. 
caret class will show dropdown symbol button.
btn-group-toggle class will make buttons toggle buttons.


Lec 07. Bootstrap Buttons 
here are button classess that we will discuss. 
btn, btn-primary, btn-success, btn-info, btn-warning, btn-danger, btn-link.
btn is basic class for buttons. by default these all classes will give some color to buttons like blue 
or dark blue etc., 

btn-primary will give blue color, btn-success will give green, btn-info will give light blue color to buttons.
btn-warning will give yellow color, btn-danger will give red color. 
btn-link will make buttons look like links.

btn-lg class will make buttons large.btn-sm class will make buttons small.
btn-xs class will make buttons extra small. btn-block class will make buttons full width.


Lec 08. List Groups in Bootstrap
