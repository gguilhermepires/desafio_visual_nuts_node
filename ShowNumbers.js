module.exports = class ShowNumbers {
    
    show(tam) {
        let data = '';
        let output = [];

        for (let i = 1; i < tam; i++) {
            
            data = `${i}`;

            if (this.isDivisibleBy3(i) && this.isDivisibleBy5(i))
                data = "Visual Nuts";
            else
                if (this.isDivisibleBy3(i))
                    data = "Visual";
                else
                    if (this.isDivisibleBy5(i))
                        data = "Nuts";

            console.log(data);
            output.push(data);
        }
        return output;
    }

    isDivisibleBy3(num) {
        if ((num % 3) == 0) {
            return true;
        } else {
            return false;
        }
    };

    isDivisibleBy5(num) {
        if ((num % 5) == 0) {
            return true;
        } else {
            return false;
        }
    };
}