(function() {
	function getInfo() {
		var browser = 'chrome', // TODO get browserName
			os = navigator.platform;

		return browser + ' ' + os;
	}

	function getResolution() {
		var width = screen.availWidth;
		var height = screen.availHeight;

		return [width, height];
	}

	function addCssClass(className, element) {
		var curentClass = element.getAttribute('class');

		element.setAttribute('class', curentClass + ' ' + className);
	}

	function removeCssClass(className, element) {
		var curentClass = element.getAttribute('class'),
			curentClassArray = curentClass.split(' '),
			i,
			newClass;

		for(i in curentClassArray) {
			if(curentClassArray[i] !== className) {
				newClass = curentClassArray[i] + ' ';
			}
		}

		element.setAttribute('class', newClass);
	}

	(function() {
		if(document.readyState === 'complete') {
			var html = document.getElementsByTagName('html')[0];

			addCssClass(getInfo(), html);
			addCssClass(getResolution().join('X'), html);
		}
	})();
})();
