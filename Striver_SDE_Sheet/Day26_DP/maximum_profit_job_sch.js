function maximumProfitJobSch(startTime, endTime, profit) {
    let jobs = [];
    for (let i = 0; i < startTime.length; i++) {
        jobs.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
    }
    jobs.sort((a, b) => a.start - b.start);

    function getNextJob(jobs, currentJobEnd, startInd) {
        let low = startInd,
            high = jobs.length - 1;
        let ans = jobs.length; // Agar koi job nahi mili toh index n return karenge

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (jobs[mid].start >= currentJobEnd) {
                ans = mid;
                high = mid - 1; // Aur pehle search karo
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
    function solve(jobs, ind, dp) {
        if (ind >= jobs.length) return 0;
        if (dp[ind] !== undefined) return dp[ind];

        // Option 1: Skip current job
        let profit1 = solve(jobs, ind + 1, dp);

        // Option 2: Include current job
        let nextInd = getNextJob(jobs, jobs[ind].end, ind + 1);
        let profit2 = jobs[ind].profit + solve(jobs, nextInd, dp);

        return dp[ind] = Math.max(profit1, profit2);
    }

    return solve(jobs, 0, {});

}