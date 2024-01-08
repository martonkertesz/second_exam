function canBalance(nums) {
    const fullSum = 0
    for (let i = 0; i < nums.length; i++) {
        fullSum += nums[i]
    }

    const leftSum = 0
    for (let i = 0; i <nums.length; i++) {
        leftSum += nums[i]

    const rightSum = fullSum - leftSum
    if (leftSum === rightSum) {
        return true
    }
}

        return false
 }
  