/************************************************
					VARIABLES
************************************************/
var menuDescriptions = {
	mac: "Magna Dapibus Risus Tortor Inceptos.",
	broccoli: "Inceptos Ultricies Dapibus Mollis.",
	nachos: "Vestibulum Sollicitudin Elit Cursus Parturient.",
	beanSalad: "Dolor Ridiculus Risus Dapibus Magna.",
	pasta: "Maecenas sed diam eget risus varius blandit sit amet non magna.",
	gcheese: "Elit Venenatis Adipiscing Parturient Tortor.",
	fish: "Sit Consectetur Vulputate.",
	burger: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}

var infoButton = ".menu__container-snackContainer__item-infoButton";


/************************************************
				FUCNTIONS
************************************************/
//target correct div and get parent ID
function getParentID(x) {
	var parentID = $(x).parent().attr('id');
	return parentID;
}

//create the description element
function htmlString(x) {
	var html = "<div class='menu__container--description'><p>";
	html += x;
	html += "</p></div>"
	return html;
}

//change the class of the parent
function classChange(x) {
	if ($(x).parent().hasClass('is-descriptor') ) {
		$(x).parent().removeClass('is-descriptor');
	} else {
		$(x).parent().addClass('is-descriptor');
	}
}

//detect paragraph
function addDiv(x, i) {
	if ($(x).parent().hasClass('is-descriptor')) {
		$(x).siblings(".menu__container--description").remove();
	} else {
		$(x).before( htmlString(i) );
	}
}


/************************************************
				ON BUTTON CLICK
************************************************/
$(infoButton).click( function() {
	var x = getParentID(this);
	var menuText = eval("menuDescriptions." + x);
	
	
	addDiv(this, menuText);
	classChange(this);
}); // end of infoButton.onClick

