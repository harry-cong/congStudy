
//++++++++++++++++++++++++++++++++++ Function +++++++++++++++++++++++++
document.writeln("<h1>START Functions</h1><br>");
//==================
	// Create a variable called add and store a function
	// in it that adds two numbers.

	var add = function (a, b) { 
		
		
	    return a + b;
	};
	    
	    
//	====================================
	// Create myObject. It has a value and an increment
	// method. The increment method takes an optional
	// parameter. If the argument is not a number, then 1
	// is used as the default.

	var myObject = {
	    value: 0,
	    increment: function (inc) {
	        this.value += typeof inc === 'number' ? inc : 1;
	    }
	};

	myObject.increment(  );
	document.writeln(myObject.value);    // 1

	myObject.increment(2);
	document.writeln(myObject.value);    // 3
	    
	    
//	====================================
	var sum = add(3, 4);    // sum is 7
	    
	    
//	====================================
	// Augment myObject with a double method.

	myObject.double = function (  ) {
	    var that = this;    // Workaround.

	    var helper = function (  ) {
	        that.value = add(that.value, that.value);
	    };

	    helper(  );    // Invoke helper as a function.
	};

	// Invoke double as a method.

	myObject.double(  );
//	document.writeln(myObject.value);    // 6
	    
	    
//	====================================
	// Create a constructor function called Quo.
	// It makes an object with a status property.

	var Quo = function (string) {
	    this.status = string;
	};

	// Give all instances of Quo a public method
	// called get_status.

	Quo.prototype.get_status = function (  ) {
	    return this.status;
	};

	// Make an instance of Quo.

	var myQuo = new Quo("confused");

//	document.writeln(myQuo.get_status(  ));  // confused
	
var array = [3,4];
var sum = add.apply(null, array);

var statusObject = { 
		status : 'A-OK'
};

var status = Quo.prototype.get_status.apply(statusObject);
//document.writeln(status);

//==========================================================
//Make a function that adds a lot of stuff.

//Note that defining the variable sum inside of
//the function does not interfere with the sum
//defined outside of the function. The function
//only sees the inner one.

var sum = function (  ) {
 var i, sum = 0;
 for (i = 0; i < arguments.length; i += 1) {
     sum += arguments[i];
 }
 return sum;
};

//document.writeln(sum(4, 8, 15, 16, 23, 42)); // 108
