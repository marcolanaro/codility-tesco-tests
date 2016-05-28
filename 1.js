function solution(S) {
    // write your code in JavaScript (Node.js 4.0.0)
    var string = S.replace(/-/g,'').replace(/ /g,'');
    var L = string.length;
    var result = '';
    for (var i = 0; i < L; i += 1) {
        var lastDashIndex = result.lastIndexOf("-");
        var nextChar = string[0];
        if (string.length > 1) {
            string = string.substring(1);
        } else {
            string = '';
        };
        var distFromLastDash = result.length - 1 - lastDashIndex;
        var isLastTwo = distFromLastDash === 3 && string.length === 3;
        if (distFromLastDash === 2 && string.length === 1) {
            result = result + '-';
        }
        if (distFromLastDash === 3 && string.length !== 0) {
            result = result + '-';
        }
        // if (isLastTwo) {
        //     result = result + '*';
        // }
        result = result + nextChar;
    }

    return result;
}
