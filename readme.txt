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

Lec 09. Bootstrap Labels
when we want to show some information on webpage, we can use label. 
we can make any span as label by using label class of bootstrap. by using label class in span, it  will 
take only specific width according to text. 


Lec 10. Bootstrap Grid System.
Bootstrap include a responsive, mobile first fluid system.
it is based on 12 columns grid system. these 12 columns can be used accordingly on the base of different
screen sizes. 
check image for more details. 

col-lg-3 means 3 columns occupy for large devices. 
col-md-3 means 3 columns occupy for medium devices.
col-sm-3 means 3 columns occupy for small devices.
col-xs-3 means 3 columns occupy for extra small devices.


Section 04. React crash course.
Now we will discuss about react. In react, we have jsx syntax which is not html but combination 
of html and js. we can write js code inside html tags. It makes easy to build components and the transpiler 
called babel will convert jsx into html in background. we use classname instead of class in react. because 
class is a keyword in js. we always export our function at the end of file and use it in other files. 
component are rendered using react dom library. 

We will use npx create-react-app app_name to create the react app. then move to the containing folder like 
cd app_name. then npm start to start the app. we will use npm install bootstrap to install bootstrap in our react app. 
then we will import bootstrap in our app.js file. then we will use bootstrap classes in our components.

now i will make commit after the react learning is complete as it will take too much time to and file 
will be too large. so i will make commit after the react learning is complete. i will delete node modules folder 
and package-lock.json file. then i will make commit. if anyone wants to use this then he/she can just download 
the zip file and install node modules(using npm install) and then npm start to run the app.

lecture 01 complete here. 


Lecture 02. React Multiple components. 
app.js is called root component of application means this is the first component that renders when 
app starts. in react, the component rendered in such a way that they make component tree. 
A component is just a function that is exported at the end of file and called where need. install simple 
react snippets extension in vs code. 


Lecture 03. 
We can also return the variable in jsx of react. we simply need to use {} to output the variable in react.
e.g., const title = "React app"; <h1>{title}</h1>. 
Number, string and arrays can be output. we can't directly output boolean and object.
we can also use if else, loop, and array and its function inside jsx. 
const visit = 'https://www.Google.com';
<a href='visit'>Google</a>


Lecture 04. React usestate() hook. 
const Home = () => {
    
    let name = 'Kashan';
    const handleClick = ()=>{
        name = 'Moin';
        console.log(name);
    }

    return (
        <div className= "Home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
      );
}
 
export default Home;

in the above code, the name is not updated in the p tag. this is because the nameis a let variable and let variables are not reactive. we can't use let, const, var
in react. we can use useState() hook to make the variable reactive.
first import {usestate} from 'react;
then use useState() hook. useState() hook returns an array of two values. the first value is
the current state and the second value is a function to update the state.

const [name, setName] = useState('Kashan');
const handleClick = ()=>{
    setName('Moin');
    console.log(name);
    }

in the above code, the name is updated in the p tag.


Lecture 05. React usestate counter app. 
Try to build yourself.


Lecture 06. React props. 
Props is short for properties. Props are immutable. props used to pass data from one component to another. 
props are read only. means the data passed to the other component cannot be changed by it.

we can pass props in two ways.
1. passing props as a function argument
2. passing props as a JSX attribute.

two examples to render data with props and without props. 
1. without props
const Home = () => {
    return (
        <div className= "Home">
        <h2>Home Page</h2>
        <p>Kashan</p>
        </div>
        );
        }
    
2. with props
    const Home = (props) => {
        return (
            <div className= "Home">
            <h2>Home Page</h2>
            <p>{props.name}</p>
            </div>
            );
            }
            const App = () => {
                return (
                    <div>
                    <Home name="Kashan"/>
                    </div>
                    );
                    }
in the above code, the name is passed as a prop to the Home component. we can also pass multiple props.
            const Home = (props) => {
                return (
                    <div className= "Home">
                        <h2>Home Page</h2>
                        <p>{props.name}</p>
                        <p>{props.age}</p>
                    </div>
                    );
                }

Just check the code of props.js file. 


Lecture 07. React Adding Styles
first we will delete app.css file and remove it from app.js. we will use index.css file for stylng and
import it in app.js. we can also use different css files for component. 
    <nav className="navbar">
            <h1>The coder web App</h1>
            <div className="links">
                <a ahref= "/">Home</a>
                <a ahref= "/create" /*style={{
                    //in css we use style = "", but here if we want to give we will give this as an object
                    //and we will not use as border-radius but we use camel case as borderRadius.
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                }}*/>New App</a>
            </div>

        </nav>


Lecture 08. Build Project Using props
we will use two functional components that will display information about the books. four things for 
books. one is book title, book author, book description, book date. Try it yourself just like the props section.

