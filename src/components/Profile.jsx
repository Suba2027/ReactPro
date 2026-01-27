import React from 'react'

// const Profile = (props) => {
// const Profile = ({name}) => { destructuring way no need to use props.name just use name
// const Profile=(props)=> { for this way use props.name
const Profile = ({name,age,skills}) => {
  return (
    <div>
       <h1>Profile of {name} age {age} years old</h1>
        <ul>
            {skills.map((skill) => (
                //if curly braces are used then return is mandatory
                <li>{skill}</li>
            ))}
        </ul>
    </div>
  )
}

export default Profile