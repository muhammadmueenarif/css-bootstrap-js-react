
const Home = () => {
    
    return (
        <div className= "Home">
            <h2>Home Page</h2> <br/><br/>
            <ExampleTwo Name="John" Age="23" Job="Frontend Dev"/>
            <ExampleTwo Name="Emily" Age="22" Job="Backend Dev"/>
            <ExampleTwo Name="Jack" Age="24" Job = "Full Stack Dev" />
        </div>
      );
}
 

const ExampleTwo = (props)=> {
    return (
        <div>
            <h3>Name: {props.Name}</h3><br/>
            <h3>Age: {props.Age}</h3><br/>
            <h3>Job: {props.Job}</h3><br/><hr/>
        </div>
    )
}

// We can pass data like this but in large application we can't do like this as there is no reuseability. 
// and no proper data passing so we use props.


{/*const Example = ()=> {
    return (
        <div>
            <div>
                <h3>Name: John</h3> <br/>
                <h3>Age: 25</h3> <br/>
                <h3>Job: Frontend Developer</h3> <br/> <hr/>
            </div>
            <div>
                <h3>Name: Emily</h3> <br/>
                <h3>Age: 30</h3> <br/>
                <h3>Job: Backend Developer</h3> <br/> <hr/>
            </div>
            <div>
                <h3>Name: David</h3> <br/>
                <h3>Age: 35</h3> <br/>
                <h3>Job: Fullstack Developer</h3> <br/> <hr/>
            </div>
        </div>
    )
}*/
}

export default Home;
