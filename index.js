const ShowNumbers = require('./ShowNumbers');


const showNumbers = new ShowNumbers();
let data = [
    {
        country: "US",
        languages: ["en", "AS"]
    },
    {
        country: "BE",
        languages: ["nl", "fr", "de"]
    },
    {
        country: "NL",
        languages: ["nl"]
    },
    {
        country: "DE",
        languages: ["de"]
    },
    {
        country: "ES",
        languages: ["es",  "a", "b","v","e","s"]
    },
    {
        country: "BR",
        languages: ["de"]
    }
];
console.log(showNumbers.getStatistics(data));