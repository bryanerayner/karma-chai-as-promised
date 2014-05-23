var should, expect, assert;

(function(window) {
  	if (!window.should)
  	{
  		window.should = window.chai.should();
  	}
  	if (!window.expect)
  	{
	  window.expect = window.chai.expect;
	}
	if (!window.assert){
		window.assert = window.chai.assert;		
	}
  
})(window);
