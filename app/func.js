

var f = function() {

		console.log("hi!");
		console.log(this);

		this.firstName = "Eric";

};

function MyModel() {

}

f();
var t = new MyModel();
console.log(t);
