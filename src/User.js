import React, { useState} from 'react';
import './user.css'

function User() {

const [data, setData] = useState({})
const [username, setUsername] = useState("")


const onchangeHandler = (e) =>{
  setUsername(e.target.value)
}

const onclickHandler =async (e)=>{
  e.preventDefault()
  const profile = await fetch(`https://api.github.com/users/${username}`)
  const profileJson = await profile.json()
  console.log(profileJson)



  if(profileJson){
    setData(profileJson);
   
  }

}

  return (
    <div class="container">
     <div class="form__holder">
    <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text"  onChange={onchangeHandler} value={username} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your username" />
    <small id="emailHelp" class="form-text text-muted">enter your git hub user name</small>
  </div>

<button type="submit" class="btn btn-primary" onClick={onclickHandler} > Search </button>
</div>
<div className="card">
  <img src={data.avatar_url} className="rounded-circle" alt="user_profileimage" />
  
    <h5 className="card-title"><i className="fas fa-user">NAME :</i> {data.name}</h5>
    <h6 className="card-text"><i className="fas fa-atlas">BIOGRA :</i>{data.bio}</h6>
    <div className="follo">
    <h6 className="card-text"><i className="fas fa-map-marker-alt">LOCATION : </i> {data.location}</h6>
    <h6 className="card-text"> <i className="fab fa-github-alt">REPOSITORIES :</i> {data.public_repos}</h6>
</div>
    <div className="follo">
    <h6 className="card-text"><i className="fas fa-users">FOLLOWERS:</i> {data.followers}</h6>
    <h6 className="card-text"> <i className="fas fa-user-friends">FOLLOWING:</i> {data.following}</h6>
</div>
    <a href={data.blog} className="btn btn-primary">Blog</a>
  
</div> 
<div className="p-3 mb-2 bg-warning text-dark">made by <a href="https://iano.herokuapp.com" className="btn btn-success">IAN</a> Incase of any modification do contact me</div>   
</div>
  );
}

export default User;
