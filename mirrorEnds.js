function mirrorEnds(string) {
    const result = ""

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[string.length - 1 - i]) {
            result += string[i]
        } else {
            break
        }
    }
        return result
    }
  



  
  
  