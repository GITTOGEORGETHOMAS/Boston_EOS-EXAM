function renderPosts(boston, container) {
    const people = boston.data;
    people.sort((a,b)=>{return b[11]-a[11]})
    const len = boston.data.length;
    var topSalaryPeople=[];
    let html = '';
    
    for (let i = 0; i < len; i++) {
            if(people[i][11]>200000){
                html +=
                '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
    
            }

    }
    for (let i = 0; i < boston.data.length; i++) {
        if(people[i][11]>=181000){
      html +=
        '<li class="post">' + '<h2 style="color: blue;">' + people[i][8] + '</h2>' + '<h3 style="color: blue;">' + people[i][11] + '</h3>';
        }
    }

    container.innerHTML = '<ul id = "data">' + html + '</ul>';
   
    
  }


  renderPosts(boston, document.getElementById('container'));
 