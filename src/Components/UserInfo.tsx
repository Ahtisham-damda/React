function UserInfo(){
    const user = {
        name: "Ahtisham Damda",
        Profession: "Software Engineer",
        Work:"Recently i worked on a project using Html css and js for web design and created website for FLA Academy",
        image:"https://st2.depositphotos.com/1071532/5655/i/450/depositphotos_56557479-Professional-man-in-business-attire.jpg",
    }
    return(
<div className="card  " style={{width: "18rem"}}>
  <img src={user.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{user.name}</h5>
     <p className="card-text">{user.Profession}</p>
    <p className="card-text">{user.Work}</p>
    <a href="https://ahtisham-damda.github.io/fla/" className="btn btn-primary">Vist My Showcase</a>
  </div>
</div>    )
}

export default UserInfo;