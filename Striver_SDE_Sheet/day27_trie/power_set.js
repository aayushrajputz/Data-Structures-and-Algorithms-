function powerSet(nums) {
    let n = nums.length;
    let res = []

    function solve(ind, current_subSet) {
        if (ind === n) {
            res.push([...current_subSet])
            return;
        }

        let include = nums[ind];
        current_subSet.push(include);
        solve(ind + 1, current_subSet);

        current_subSet.pop();
        solve(ind + 1, current_subSet);
    }
    solve(0, [])
    return res;
}

let arr = [1, 2, 3];
console.log(powerSet(arr));