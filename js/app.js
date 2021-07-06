'use strict';

/* let imgArray = ['action.png', 'adventure.png', 'animation.png', 'comedy.png', 'detective.png', 'fantasy.png', 'history.png', 'horror.png' , 'musical.png' , 'pirate.png' , 'romantic.png' , 'sci-fi.png' , 'war.png' , 'western.png']; */



/* let movieType = ['Action'
,'Adventure'
,' Animation'
,' Comedy'
,' Detective'
,' Fantasy'
,' History'
,' Horror'
,' Musical'
,' Pirate'
,' Romantic'
,' SCI-FI'
,' War'
,' Western']; */

function Movie (details){
    
    Movie.all.push(this);
}
Movie.all = [];

/* for (let i = 0 ; i<imgArray.length ; i++){
    
    new Movie(imgArray[i].split('.')[0], `./img/${imgArray[i]}`);

}
*/
Movie.prototype.addMovie = function(name , category, issue){
    
    let newItem = new MovieDeatails(name, category, issue);
    Movie.all.push(newItem);
}

function MovieDeatails(name, category, issue){
    this.name = name;
    this.category = category;
    this.issue = issue;
}

Movie.prototype.saveTolocal = function(){
    localStorage.setItem('storedObj' , JSON.stringify(Movie.all));
}

Movie.prototype.removeMovie = function(movie){
    Movie.all.splice(movie,1);
}

function Moviee(name,path ,issue){
    this.name = name;
    this.path = path;
    this.issue = issue
    Moviee.all.push(this)
}

Moviee.all = [];

function addMovie(){
    new Moviee ('action','action.png', 1977);
    new Moviee ('adventure','adventure.png', 1997);
    new Moviee ('animation','animation.png', 1937);
    new Moviee ('comedy','comedy.png', 1998);
    new Moviee ('detective','detective.png', 1937);
    new Moviee ('fantasy','fantasy.png', 1978);
    new Moviee ('history','history.png', 1974);
    new Moviee ('horror','horror.png', 1967);
    new Moviee ('musical','musical.png', 1971);
    new Moviee ('pirate','pirate.png', 1974);
    new Moviee ('romantic','romantic.png', 1997);
    new Moviee ('sci-fi','sci-fi.png', 2000);
    new Moviee ('war3','war.png', 2003);



    let movieCart=([])

    function writeMovie(){

        let movieName = document.getElementById('items');
        for( let j in Moviee.all){
            let option = document.createElement('option');
            option.textContent= `${Moviee.all[j].name} ${Moviee.all[j].path} ${Moviee.all[j].issue}`
            movieName.appendChild(option)
        }
        
    }


    function getData(){

        let convertedobj = JSON.parse(localStorage.getItem('storedObj'))
        if(convertedobj){
            for(let k = 0 ; k< convertedobj.length ; k++){
                let movieCart = new Movie(convertedobj[k])
            }
        }
    }

    getData();
    writeMovie();
function handleSubmission(e){
    e.preventDefault();
    addSelectedMovies(e.target.items.value,e.target.imgItems.value,e.target.yearItems.value)
}