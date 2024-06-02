const userData=[
  {
    name:"Alena",
    city:"Cambodia",
    description:"Web Developer",
    skills:["UI/UX","Front End Developmer","CSS","Javascript","React","Node"],
    online:false,
    profile:"images/1.jpg",

  },
  {
    name:"Alena",
    city:"Cambodia",
    description:"Web Developer",
    skills:["UI/UX","Front End Developmer","CSS","Javascript","React","Node"],
    online:false,
    profile:"images/2.jpeg",

  },
  {
    name:"Alena",
    city:"Cambodia",
    description:"Web Developer",
    skills:["UI/UX","Front End Developmer","CSS","Javascript","React","Node"],
    online:false,
    profile:"images/2.jpeg",

  }
];
function User(props){
return (
<div className="card-container">
    <span className={props.online? "pro online":"pro offline"}>{props.online? "ONLINE":"Offline"}</span>
<img src={props.profile} alt="" srcset="" className="img"/>
<h3>{props.name}</h3>
<h3>{props.city}</h3>
<p>{props.description}</p>
<div className="buttons">
  <button className="primary">Message</button>
  <button className="primary outline">Following</button>
</div>
<div className="skills">
<h4>Skills</h4>
<ul>
{props.skills.map((skill,index)=> (
  <li key={index}>{skill}</li>
))}
</ul>
</div>
</div>

);
}

export const Usercard = () => {
  return (
  <>
  {
  userData.map((user,index)=>(
    <User key={index}
     name={user.name}
     city={user.city}
     description={user.description}
     online={user.online}
     profile={user.profile}
     skills={user.skills}
     />
  ))
}
  </>
      // <User name="Alena" city="Cambodia" description="Web Developer" skills={["UI/UX","Front End Developmer","CSS","Javascript","React","Node"]} online={true} profile="images/1.jpg" />
)

};



