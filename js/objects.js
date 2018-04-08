var movies = [
    {
        name: "Star Wars The Last Jedi",
        rating: 3.0,
        watched: true
    },
    {
        name: "The Death of Stalin",
        rating: 8.5,
        watched: true
    },
    {
        name: "The Lobster",
        rating: 9.0,
        watched: false
    },
    {
        name: "Twin Peaks Season 3",
        rating: 9,
        watched: false
    }
];

for (var i = movies.length - 1; i >= 0; i--) {        
    if (movies[i].watched === true) {
        console.log("You have watched " + movies[i].name + " which has a rating of " + movies[i].rating + " out of 10.");
    }
    else {
        console.log("You have not watched " + movies[i].name + " which has a rating of " + movies[i].rating  + " out of 10.");  
    }
}