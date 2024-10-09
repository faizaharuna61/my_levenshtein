function my_levenshtein(string1, string2){
	if(string1.length == 0 || string2.length == 0){
        return 0;
    }else if(string1.length != string2.length){
        return -1;
    }else{
        value = 0;
        for(i=0;i<string1.length;i++){
            if(string1[i]!=string2[i]){
                value ++;
            }
        }
        return value;
    }
}