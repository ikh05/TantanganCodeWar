// 039 - ROT13
// https://www.codewars.com/kata/52223df9e8f98c7aa7000062

const ROT13 = {
	A : 'N', N : 'A',
	B : 'O', O : 'B',
	C : 'P', P : 'C',
	D : 'Q', Q : 'D',
	E : 'R', R : 'E',
	F : 'S', S : 'F',
	G : 'T', T : 'G',
	H : 'U', U : 'H',
	I : 'V', V : 'I',
	J : 'W', W : 'J',
	K : 'X', X : 'K',
	L : 'Y', Y : 'L',
	M : 'Z', Z : 'M', 

	a : 'n', n : 'a',
	b : 'o', o : 'b',
	c : 'p', p : 'c',
	d : 'q', q : 'd',
	e : 'r', r : 'e',
	f : 's', s : 'f',
	g : 't', t : 'g',
	h : 'u', u : 'h',
	i : 'v', v : 'i',
	j : 'w', w : 'j',
	k : 'x', x : 'k',
	l : 'y', y : 'l',
	m : 'z', z : 'm' 
}



const rot13 = str => str.split('').map(e => ROT13[e] || e).join('')


console.log(rot13('EBG13 rknzcyr.'))
