const ShowNumbers = require('../ShowNumbers');

test('test', () => {
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

    const result = showNumbers.getStatistics(data);

    expect(result.numberCountry).toBe(6);
    expect(result.countryHighestNumberOfficialLanguage.country).toBe("ES");
    expect(result.countryMostOfficialLanguageDe.country).toBe("BE");
    expect(result.common).toBe("de");
});
