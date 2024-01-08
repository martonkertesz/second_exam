function evenlySpaced (a, b, c) {
    const small = Math.min(a, b, c)
    const large = Math.max(a, b, c)
    const medium = a + b + c - large - small

    if (large - medium === medium - small) {
    return true 
    } else {
        return false
    }
}  
  