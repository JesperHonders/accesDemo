console.log('init')


function init(){
	if(typeof Storage !== "undefined")
  {
  	addFavoriteMenuItem();
  	changeMailToStorage();
	changeSaveToDelete();
	showLocalStorage();
  }
else
  {
  	console.log("Helaas geen coole Localstorage Deluxe capriolen")
  }
}

function addFavoriteMenuItem(){
	var para = document.createElement("li");
	para.setAttribute('id','favorites')
	var element = document.getElementById("site-nav");
	element.appendChild(para);
	document.getElementById('favorites').innerHTML = '<a href="./favorites.html">Favorites</a>';
}


function changeSaveToDelete(){
	var allSections = document.querySelectorAll('[data-id]');
	var lsData = [];
	for ( var i = 0, len = localStorage.length; i < len; ++i ) {
			  var localKey = localStorage.getItem( localStorage.key( i ) );
				lsData.push(localKey);
			}
	for (i = 0; i < allSections.length; i++) {
		
		var value = allSections[i].getAttribute('data-id')
		if (lsData.indexOf(value) >= 0) {
			var safeLink = allSections[i].children[1]
			safeLink.innerHTML = '<button onclick="deleteFromStorage('+i+')" class="favoriteItem">Verwijder</button>'
		} else {
		}
	}
}

function changeMailToStorage() {
	var saveButtons = document.getElementsByClassName('save');
	
	for (var i = 0; i < saveButtons.length; i++) {
		
		
		saveButtons[i].innerHTML = '<button onclick="addItemtoStorage('+i+')" class="favoriteItem">Opslaan</button>';
	}
	
}




function addItemtoStorage(buttonID) {
	localStorage.setItem(buttonID, buttonID);
	changeMailToStorage();
	changeSaveToDelete();
}

function deleteFromStorage(buttonID) {
	localStorage.removeItem(buttonID);
	changeMailToStorage();
	changeSaveToDelete();
}

function showLocalStorage() {
	if (window.location.href.indexOf("favorites") > -1) {
		microAjax("../content.json", function(resp) { 
			var data = JSON.parse(resp);
			var shirts = data.shirts;
			var shirtArray = [];
			
			for ( var i = 0, len = localStorage.length; i < len; ++i ) {
			  var localKey = localStorage.getItem( localStorage.key( i ) );
			}
			
			
			for (var i = 0; i < localStorage.length; i++){
                        var shirt = {
                                name: data.shirts[localStorage.getItem( localStorage.key(i))].name,
                                foto: data.shirts[localStorage.getItem( localStorage.key(i))].image,
                                price: "$ " + data.shirts[localStorage.getItem( localStorage.key(i))].price,
								url: data.shirts[localStorage.getItem( localStorage.key(i))].link,
								id: data.shirts[localStorage.getItem( localStorage.key(i))].id
                            }
						
						
						shirtArray.push(shirt)
						
						}
                         var directives = {
                                image: {
                                    src: function(params) {
                                        return this.foto;
                                    },
									alt: function(params) {
										return "photo of "+this.name;
									}
                                },
                                link: {
                                    href: function(params) {
											return this.url   
                                    }
                                },
							 	function: {
									href: function(params) {
											return this.id;
									}
								}
                            }
                        Transparency.render(document.getElementById('products'), shirtArray, directives);
			
		})
	}
}

init();