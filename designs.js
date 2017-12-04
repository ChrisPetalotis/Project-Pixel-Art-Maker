function makeGrid() {
	
	// Get inserted size input
	var height = parseInt($('#input_height').val());
	var width = parseInt($('#input_width').val());
	
	$('#input_height').on('change', function() {
		height = $('#input_height').val();
	});

	$('#input_width').on('change', function() {
		width = $('#input_width').val();
	});

	// Get table
	var table = $('#pixel_canvas');

	//Reset to empty table --- in case one already created
 	table.children().remove();

 	// set limits for the dimensions of the table
 	if (height > 30) {
 		height = 30;
 		message.updateMessage("Height set to max value");
 	}
 	if (width > 30) {
 		width = 30
 		message.updateMessage("Width set to max value");
 	}

	// draw the table 
	for (var i = 0; i < height; i++) {
		$('#pixel_canvas').append('<tr></tr>'); // add row
		}
	$('tr').each(function() {
		for (var j = 0; j < width; j++) {
			$(this).append('<td></td>');
		}
	}); // add column for each row
}

function coloring() {
	// Select color input
	var color = $('#colorPicker').val();
	
	// Listen for cell left-clicks
	$('#pixel_canvas').on('click','td', function (event) {
		// Apply color to cell
	    $(event.target).css('background', color);
	});
	
	$(document).mousedown(function () {
		$('#pixel_canvas').on('mouseover','td', function (event) {
			// Apply color to cell
	    	$(event.target).css('background', color);
		});

		$('#colorPicker').on('change', function() {
			color = $('#colorPicker').val();
		});
	})
	.mouseup(function() {
		$('#pixel_canvas').unbind('mouseover');
	})
}

function resetColor() {
	// Listen for cell right-clicks
	$('#pixel_canvas').on('contextmenu', 'td', function(event) { 
		event.preventDefault(); 
		$(event.target).css('background', '#ffffff')
	});
}	

// reset table
function reset () {
	$('#reset').on('click', function() {
		$('td').css('background', 'white');
	});

}

const message = {
    updateMessage: function (msg) {
        $('#message span').text("").fadeIn();
        $('#message span').text(msg).fadeOut('slow');
    }
}

// When size is submitted by the user, call functions to make and color the table
$('input[type="submit"]').click(function(event) {
		event.preventDefault(); //Required to avoid submit and page reload

		// Call the functions
		makeGrid();
		coloring();
		resetColor();
		reset();
});

