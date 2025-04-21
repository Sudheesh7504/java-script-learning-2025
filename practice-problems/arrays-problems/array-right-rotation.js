function kthRightRotation(arr,k){
    k = k % arr.length // 2%4= 4)20(0.5 (ignore decimal from quotient)
                        //        20     (quotient * b = 0*4=0 => subract the result from a-result = 2-0 =2)
                        //        ---
                        //         0
return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log(kthRightRotation([2, 4, 6, 9],2))