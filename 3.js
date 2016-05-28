function solution(S) {
    // write your code in JavaScript (Node.js 4.0.0)
    var total = 0;
    var rows = S.split('\n');

    function addToTotal(value) {
      console.log('value',value)
        total += value;
    }

    function getTotalSeconds(row) {
        var hh = parseInt(row.substr(0, 2), 10);
        var mm = parseInt(row.substr(3, 2), 10);
        var ss = parseInt(row.substr(6, 2), 10);

        var totalSeconds = ss + 60 * (mm + hh * 60);

        return totalSeconds;
    }

    function getNumberAddress(row) {
        var g1 = row.substr(9, 3);
        var g2 = row.substr(13, 3);
        var g3 = row.substr(17, 3);
        var address = g1 + g2 + g3;
        return address;
    }

    var addresses = {};
    for (var i = 0; i < rows.length; i += 1) {
        var totalSeconds = getTotalSeconds(rows[i]);
        var address = getNumberAddress(rows[i]);
        if (!addresses[address]) {
            addresses[address] = 0;
        }
        addresses[address] += totalSeconds;
    }

    var longestDuration = Object.keys(addresses).reduce(function(prev, address) {
        if (addresses[address] > prev) {
            return addresses[address];
        }
        return prev;
    }, 0);

    var possibleAddresses = Object.keys(addresses).reduce(function(prev, address) {
        var nextArray = prev.slice();
        if (addresses[address] === longestDuration) {
            nextArray.push(address);
        }
        return nextArray;
    }, []);

    var freeAddress;
    if (possibleAddresses.length === 1) {
        freeAddress = possibleAddresses[0];
    } else {
        freeAddress = possibleAddresses.reduce(function(prev, address) {
            if (parseInt(address, 10) < parseInt(prev, 10)) {
                return address;
            }
            return prev;
        }, '999999999');
    }

    for (var i = 0; i < rows.length; i += 1) {
        var totalSeconds = getTotalSeconds(rows[i]);
        var address = getNumberAddress(rows[i]);
        var fiveMinInSec = 5 * 60;

        if (address !== freeAddress) {
            if (totalSeconds < fiveMinInSec) {
                addToTotal(totalSeconds * 3);
            }
            if (totalSeconds >= fiveMinInSec) {
                var minutes = Math.ceil(totalSeconds/60);
                addToTotal(minutes * 150);
            }
        }
    }

    return total;
}
