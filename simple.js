//Program to encode a given input by huffman compression

s="malayalam"



//function find the frequency of each character
function frequency(s){	
	var freq={};
	for(var i=0;i<s.length;i++){
  		if (freq[s[i]]==undefined){
    	freq[s[i]]=1;
  	}
 	else{
    		freq[s[i]]=freq[s[i]]+1;
  	}
	}
	return freq;
}







//function to sort the frequencies in increasing order
function sortfreq(freq){
  	l=[];
  	for(var key in freq){
    		l.push([freq[key],key]);
        }
   	return l.sort()
}






//function to build the tree
function buildtree(l){
	while (l.length>1){
        	leastTwo=[l[0][1],l[1][1]];
		theRest=l.slice(2,l.length);
       		combFreq=l[0][0]+l[1][0];
		l=theRest;
		n=[combFreq,leastTwo];
        	l.push(n);
       		l.sort();
        
	}
	return l[0][1]
}
tree=buildtree(sortfreq(frequency(s)));

codes={}





//function to assign codes to each character
function coding(node,pat){
	pat=pat || ""
  	if (typeof node==typeof ""){
    	codes[node]=pat
  	}
  	else{
    	coding(node[0],pat+"0")
    	coding(node[1],pat+"1")
	}
}
coding(tree)





//function to convert given string to compressed mode
function encode(s){
	output=""
  	for(var c in s){
   		output=output+codes[s[c]]
  	}
  	return output
	}
console.log("Encoded form:",encode(s))






//function to decode the compressed form to origial string
function decode(tree,s){
	output=""
  	p=tree
  	for(var i in s){
   		if (s[i]==0)
      			p=p[0]
    		else
      			p=p[1]
  		if (typeof p==typeof "")
  		{
    			output=output+p
    			p=tree
  		}
	}
	return output
}
console.log("Decoded form:",decode(tree,encode(s)))



