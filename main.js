var triangle={
	ab:3,
	bc:4,
	ac:function(){
		sss = (this.ab*this.ab)+(this.bc*this.bc);
		return Math.sqrt(sss);
	}
};
console.log(triangle.ac());

var gipotenuza=(function(a,b){aaa=(a*a)+(b*b); return Math.sqrt(aaa);}(3,4));
console.log(gipotenuza);

var storona=function cc(aa,bb) {
	gip=(aa*aa)+(bb*bb);
	return Math.sqrt(gip);
}
console.log(storona(3,4));

//Найти длину окружности R=произвольный

var dlina=function pp(r) {
	vav=2*Math.PI*r;
	return vav;
}
console.log(dlina(4));

var lenght=(function(rad){zaz=2*Math.PI*rad; return zaz;}(3));
console.log(lenght);

var dl={
	radius:2,
	fun:function(){
		hhh=2*Math.PI*this.radius;
		return hhh;
	}
};
console.log(dl.fun());

//Найти площадь окружности

var okr={
	rr:4,
	func:function(){
		ploshad = Math.PI*this.rr*this.rr;
		return ploshad;
	}
};
console.log(okr.func());

var krug=(function(rrr){plosh=Math.PI*rrr*rrr; return plosh;}(3));
console.log(krug);

var kruzhok=function ppp(rrrr) {
	ploshadka=Math.PI*rrrr*rrrr;
	return ploshadka;
}
console.log(kruzhok(2));