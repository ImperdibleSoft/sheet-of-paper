var sop = {
	"alreadyPrinted": false,
	"print": function(){
		sop.alreadyPrinted = false;
		
		/*	Set the viewer in Printer mode	*/
		document.body.className = "sop-printer";
		
		/*	Hide all invisible elemenets	*/
		var invisibleItems = document.getElementsByClassName("sop-invisible");
		for(var x in invisibleItems){
			if(invisibleItems[x] && invisibleItems[x].style){
				invisibleItems[x].style.display = "none";
			}
		}
		
		/*	Open Print dialog	*/
		if(window.print()){ 
			alreadyPrinted = true; 
		}else{ 
			alreadyPrinted = true;
		}
		
		function restoreViewer(){
			sop.alreadyPrinted = false;
			
			/*	Set the viewer in Printer mode	*/
			document.body.className = "sop-viewer";
			
			/*	Hide all invisible elemenets	*/
			var invisibleItems = document.getElementsByClassName("sop-invisible");
			for(var x in invisibleItems){
				if(invisibleItems[x] && invisibleItems[x].style){
					invisibleItems[x].style.display = "block";
				}
			}
		}
		
		function checkAlreadyPrinted(){
			if(alreadyPrinted == true){
				restoreViewer();
			}
			else{
				setTimeout(function(){
					checkAlreadyPrinted();
				}, 100);
			}
		}
		
		checkAlreadyPrinted();
	}
}
	