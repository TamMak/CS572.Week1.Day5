///**
// * http://usejsdoc.org/
// */

//exports.list = function(req, res){
//  res.send("respond with a resource wwwwwwwwww");
//  
//};

exports.list = function(req, res){
	
	var invents = [
				       {
					    "first": "Albert",
					    "last": "Einstein",
					    "year": 1879
					  },
					  {
					    "first": "Isaac",
					    "last": "Newton",
					    "year": 1643
					  },
					  {
					    "first": "Galileo",
					    "last": "Galilei",
					    "year": 1564
					  },
					  {
					    "first": "Marie",
					    "last": "Curie",
					    "year": 1867
					  },
					  {
					    "first": "Johannes",
					    "last": "Kepler",
					    "year": 1571
					  },
					  {
					    "first": "Nicolaus",
					    "last": "Copernicus",
					    "year": 1473
					  },
					  {
					    "first": "Max",
					    "last": "Planck",
					    "year": 1858
					  }
					  
			      ];
	
	
	
	  res.render('inventors', {  title: 'Express' 
		  						,invents:invents});
	};
	
	
	
	
	
	
	
	
	
	