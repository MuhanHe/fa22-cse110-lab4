1. It prints the index number of the price, which is 3. Although the index starts from 0, and the last index of the prices should be 2, the index was added with one and then leave the for-loop. We can access the index i outside the loop because it is declared as "var".
2. It prints the discountedprice of the last price, which used to be 300, but becomes 150 after the discount. We can access the discountedprice outside the loop because it is declared as "var".
3. It prints the finalprice of the last price, which used to be 300, but becomes 150 after the discount. We can access the finalprice outside the loop because it is declared as "var".
4. it returns nothing, because discounted  need to be returned to the function caller. Instead of calling the function directly, we need to use console.log(function) to call the function and then we can get the returned value.
5. It gives me an error. Although the index i was updated ,it still finally declared as "let", which does not allow us to access it outside the block it declared.
6. It gives me an error. Although discountedprice was updated, it still finally declared as "let", which does not allow us to access it outside the block it declared.
7. It prints the finalprice of the last price, 150, which used to be 300, but becomes 150 after the discount. Although finalprice was initially delcared as "let", it was not declared as "let" after being reassigned. 
8. it returns nothing, because discounted  need to be returned to the function caller. Instead of calling the function directly, we need to use console.log(function) to call the function and then we can get the returned value.
9.  It gives me an error. Although the index i was updated ,it still finally declared as "let", which does not allow us to access it outside the block it declared.
10. It prints 3, which is the length of prices. length is delcared as "const", and it never changed, so there's no error.
11. it returns nothing, because discounted need to be returned to the function caller. Instead of calling the function directly, we need to use console.log(function) to call the function and then we can get the returned value.
12. A. alert(student.name);
    B. let key = 'Grad Year';
        alert(student[key]);
    C. student.greeting();
    D. let dict = 'Favorite Teacher';
        alert(student[dict].name);
    E. alert(student.courseLoad[0]);
13. A. 32
        because 2 is considered as a string, and can concatenate with '3'.
    B. 1  
        when there's a '-' operation, '3' is considered as a number.
    C. 3
        null is considered to be 0 when added with number 3.
    D. 3null
        null is considered to be a string when added with number 3.
    E. 4
        true is 1 in number, so when it adds 3, it becomes 1+3 = 4.
    F. 0
        false is 0 in number, and null is considered to be 0, so when it adds with null, it becomes 0.
    G. 3undefined
        undefined is considered as a string when added with '3', so it can concatenate with '3'.
    H. NaN
        '3' is not a number, so the operation '-' cannot be used as substraction, then the output is nothing.
14. A. true
        '2' is considered as number 2 when compared with 1.
    B. false
        The ascii value of '2' is bigger than ascii value of '1' in '12', so '2' is bigger than '12' as sorted by ascii value.
    C. true
        '==' is loose equality, which will perform a type conversion when comparing 2 and '2'.
    D. false
        '===' is strict equality, which cannot perform a type conversion when comparing 2 and '2'.
    E. false
        true is considered as 1 when compare with a number, 0 is not equal to 2.
    F. true
        Boolean() takes 0 as false and all positive numbers as true, so it is true when compared with true.
15. '==' can do the type conversion of the operands before comparison, but '===' compares the values as well as the data types of the operands.
17. The result showing nothing. We have to use console.log(function) to print out the result. As we call modifyArray function, we take in an array [1,2,3], and while we access each number in the array in the for-loop, we will call the callback function dosomething and this function will double the value of the specific number we just accessed. Then the modified value will be returned and pushed into the new array created in the modifyArray function. Finally, the new array pushed all doubled values in the original array, and be returned.
19. 1
    4
    3
    2
    (1,4,and 3 were printed at the same time, and then 2 was printed after one second)
