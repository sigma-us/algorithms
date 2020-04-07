/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
let justifyText = (str, lineLen) => {
    let arr = [''];
    let line = 0;
    let end = [];

    for (let i = 0; i < str.length; ++i) {
        let word = str[i];

        if (!arr[line]) arr[line] = '';

        if (arr[line].length >= lineLen) line++;

        if (!arr[line]) arr[line] = '';


        if (arr[line].length + word.length <= lineLen) {
            arr[line] += `${word} `;
        } else {
            ++line;
            --i;
        }
    }

    for (i in arr) {
        let line = arr[i];
        // mius 1 for trailing space
        let len = line.length - 1;
        let missing = lineLen - len;
        line = line.split(' ');
        line.pop();
        if (!missing) {
            arr[i] = line.join(" ");
            continue;
        }

        let numWords = line.length;

        let innerSpaces = numWords - 1;
        let join = "";
        let loops = (missing / innerSpaces);
        // console.log(missing, innerSpaces, loops, line)

        if (i == arr.length - 1 || !innerSpaces) {
            console.log(missing, innerSpaces, loops, line);

            

            while (missing > 0) {
                join += " ";
                missing--;
            }
            line = line.join(" ");
            arr[i] = line.concat(join);
            continue;
        } else if (missing%innerSpaces !== 0) {
            console.log(missing, innerSpaces, loops, line);

            let extra = missing%innerSpaces
            for (let j = 0; j < innerSpaces; ++j) {
                let add = extra>0 ? ' ': '';
                for (let k = 1; k < Math.ceil(loops); k++) {
                    add += " ";
                }
                line[j] += j < missing ? add : "";
                --extra;
            }
            join = " ";
        } else if (innerSpaces && loops >= 1) {
            for (loops; loops >= 0; --loops) {
                join += " ";
            }
        }
        arr[i] = (line.join(join));
    }




    console.log(arr);
}

let words = ["This", "is", "an", "example", "of", "text", "justification."];
let words2 = ["What","must","be","acknowledgment","shall","be"];
let words3 = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]
let maxWidth = 16;

let ok = ["The","important","thing","is","not","to","stop","questioning.","Curiosity","has","its","own","reason","for","existing."]
17

let kk = ["My","momma","always","said,","\"Life","was","like","a","box","of","chocolates.","You","never","know","what","you're","gonna","get."]
20
let jj = ["Give","me","my","Romeo;","and,","when","he","shall","die,","Take","him","and","cut","him","out","in","little","stars,","And","he","will","make","the","face","of","heaven","so","fine","That","all","the","world","will","be","in","love","with","night","And","pay","no","worship","to","the","garish","sun."]
25

justifyText(jj, 25);
justifyText(kk, 20);
justifyText(words2, 16);