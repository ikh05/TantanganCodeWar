// 031 - Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function dnaStrand(dna){
	return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}

// const _ = {'A' : 'T', 'T' : 'A', 'C' : 'G', 'G' : 'C'};
// const dnaStrand = dna =>  dna.split('').map(e => _[e] || e).join('');



console.log(dnaStrand('ATTGCSAA'))
