let input = document.getElementById("textInput")


async function fetchuser(username) {
   let responce = await fetch(`https://api.github.com/users/${username}`)
   let result = await responce.json()
   displayuser(result)
    
}



document.getElementById("btnSearch").addEventListener('click',()=>{
    let username = input.value
    fetchuser(username)
})


function displayuser(result){

if (!result.avatar_url) {
    document.getElementById("second").innerHTML=`<h1>User not found</h1>`
    return
}

if (!result.bio) {
   result.bio='' 
}
document.getElementById("second").innerHTML=`<div id="profileImg">
                <img src=${result.avatar_url}
                alt=""></img>
                <div id="profileName">
                     <p><b>${result.name}</b></p>
                     <p>${result.bio}</p>
                 </div>
             </div>
             
             <div id="following">
                 <div id="followingUpper">
                     <div class="foll">
                         <p class="name">
                             Follow
                         </p>
                         <p class="num">
                           ${result.followers}
                         </p>
                     </div>
                     <div class="foll">
                         <p class="name">
                             Following
                         </p>
                         <p class="num">
                           ${result.following}
                         </p>
                     </div>
                     <div class="foll">
                         <p class="name">
                             Repo
                         </p>
                         <p class="num">
                           ${result.public_repos}
                         </p>
                     </div>
                 </div>
                 <a href=${result.html_url} target="_blank">
                 <div id="followingLower">
                     <button>
                         View Profile
                     </button>
                 </div>
                 </a>
             </div>
             
         </div>`
}