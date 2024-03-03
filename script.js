
let count=-1;
var loadPost= async()=>{

    let count=0;
const res=await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts/`)
const data =await res.json();
// console.log(data.posts)
const postContainer=document.getElementById('cardContainer')
data.posts.forEach(item => {
    // console.log(item);
    const div=document.createElement('div');

    div.innerHTML=`
    <div id="cardContainer">

    <div class="card card-side bg-base-200 shadow-2xl mb-5 hover:bg-sky-50">
   
<!-- ------------- -->
<div class="avatar indicator">
    <span class="indicator-item badge ${item.isActive ? 'badge-success' : 'badge-error' }  rounded-full"></span> 
    <div class="w-20 h-20 rounded-lg">
      <img alt="Tailwind CSS examples" src="${item.image}" />
    </div>
  </div>
        <!-- ---------- -->
        <div class="card-body">
            <div class="flex">
                <p>#${item.category}</p>
            <p class="mr-32">Authhor: ${item.author.name}</p>
            </div>
          <h2 class="card-title">${item.title}</h2>
          <p>${item.description}</p>

          <div class="flex" >
            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>${item.comment_count}</p>

            <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  ${item.view_count}
            </p>

            <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
              ${item.posted_time}min                  
            </p>
             
          </div>
          <!-- massage icon -->
          <div class="card-actions justify-end">
            <button onclick="leftContainer('${item.title}','${item.view_count}')" class="btn btn-primary rounded-full "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
              </svg>
              </button>
          </div>
        </div>
      </div>
      
</div>
    `

 
postContainer.appendChild(div);
});
}
//----------------

const handelSearch=()=>{
    const value=document.getElementById('handelSearch').value;
    if(value){
        loadPost(value)
    }
    else{
        alert('please enter a valid number ')
    }
}













//--------------------------------------------------------------------

 
const leftContainer=(title,view)=>{
    count++;
    document.getElementById('itemCount').innerText=count;
   //
    const text=document.getElementById('leftCardContainer');
    const div=document.createElement('div');
    div.innerHTML=`
    <div class="flex bg-white p-4 rounded-2xl w-72 mb-2 ">
        <h2>${title}</h2>
       <div class="flex gap-1">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          
        <p>${view}</p>
       </div>
   
    </div>
    `
    
    text.appendChild(div);
    
};




var latestPost= async()=>{
const res=await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
const data =await res.json();

 const latestCardContainer=document.getElementById('latestCard')
 data.forEach(item => {
    const div=document.createElement('div');
    div.innerHTML=`
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="${item.cover_image}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
        <div class="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
              <p>${item.author.posted_date ? item.author.posted_date : 'no date yet'}</p>
              
        </div>
      <h2${item.title}</h2>
      <p>${item.description}</p>
      
      <div class="flex space-x-2  justify-start items-start mr-24 mt-5">
        <div>
            <img class="w-12 h-12 rounded-full" src="${item.profile_image}" alt="Shoes" />
        </div>
        <div >
            <h2 class="card-title">${item.author.name}</h2>
            
            <p class="mt-1">${item.author.designation}</p>
        </div>
    </div>
    </div>
  </div>
    `
    latestCardContainer.appendChild(div);
 })
}

latestPost();


leftContainer();
loadPost();