function EditAway(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    
    if (Math.abs(len1 - len2) > 1) {
      return false;
    }
  
    let edits = 0; 
  
    let i = 0; 
    let j = 0; 
  
    while (i < len1 && j < len2) {
  
      if (str1[i] !== str2[j]) {
        edits++;
        if (len1 > len2) {
          i++; 
        } else if (len2 > len1) {
          j++; 
        } else {
          i++; 
          j++;
        }
      } else {
        i++;
        j++;
      }
  
     
      if (edits > 1) {
        return false;
      }
    }
  
    if (i < len1 || j < len2) {
      edits++;
    }
  
    return edits <= 1;
  }
  
  console.log(EditAway("pale", "ple"));   
  console.log(EditAway("pales", "pale")); 
  console.log(EditAway("pale", "bale"));  
  console.log(EditAway("pale", "bake"));  
  