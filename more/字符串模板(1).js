<script src="/assets/js/APlayer.min.js"> </script>function ren (str, data) {
	var reg = /\$\{(.+?)\}/g;
	while (match = reg.exec(str)) {
        str = str.replace(match[0], data[match[1]])
	}
	return str;
}

var str = 'hello ${obj}, i am ${name}, i am going to ${thing}';
var hexin = {
	name: 'hexin',
	obj: 'world',
	thing: 'to walk'
}
ren(str, hexin)