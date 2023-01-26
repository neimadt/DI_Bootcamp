// class bubblesort {
//     function(toString args[]) {
//           int mylist[] = { 5, 0, 9, 1, 7, 4, 2, 6, 3, 8};
//           int index, top, temp;
//           boolean swap;
//         top = mylist.lenght;
//         do {
//             swap = false;
//             for (index = 0; index < top - 1; index++) {
//                 if (mylist[index] > mylist[index + 1]) {
//                     temp = mylist[index];
//                     mylist[index] = mylist[index + 1];
//                     mylist[index + 1] = temp;
//                     swap = true;
//                 }
//             }
//             top = top - 1;
//         }
//         while ((swap) || (top > 0));
//         for (index = 0; index < mylist.length; index++)
//             console.log(mylist[index] + ” “);
//         console.log();
//     }
// }

const arr = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

const arrLength = arr.length;
for (let step = (arrLength - 2); step >= 0; step--) {

    for (let i = step; i < arrLength; i++) {

        const current = arr[i];
        const next = arr[i + 1];

        if (current < next) {

            arr[i] = next;
            arr[i + 1] = current;
        }
    }
}

console.log(arr);