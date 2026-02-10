function compareVersion(v1, v2) {
    let nums1 = v1.split(".");
    let nums2 = v2.split(".")

    let n1 = nums1.length
    let n2 = nums2.length

    for (let i = 0; i < Math.max(n1, n2); i++) {
        let val1 = i < n1 ? parseInt(nums1[i]) : 0;
        let val2 = i < n2 ? parseInt(nums2[i]) : 0;

        if (val1 > val2) {
            return 1;
        }
        if (val1 < val2) {
            return -1;
        }
    }
    return 0;
}
console.log("Test 1 (1.01 vs 1.1): " + compareVersion("1.01", "1.1")); // 0
console.log("Test 2 (1.2 vs 1.10): " + compareVersion("1.2", "1.10")); // -1
console.log("Test 3 (1.0 vs 1.0.0.0): " + compareVersion("1.0", "1.0.0.0")); // 0