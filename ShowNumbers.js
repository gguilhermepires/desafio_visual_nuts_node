module.exports = class ShowNumbers {

    getStatistics(data) {
        let numberCountry = 0;
        let countryHighestNumberOfficialLanguage;
        let countryMostOfficialLanguageDe;
        let includeDe;
        let languages = {};

        countryMostOfficialLanguageDe = data[0];
        countryHighestNumberOfficialLanguage = data[0];

        for (let i = 0; i < data.length; i++) {
            numberCountry += 1;

            includeDe = data[i].languages.find((elem) => elem === 'de');

            if (data[i].languages.length > countryMostOfficialLanguageDe.languages.length &&
                includeDe !== undefined
            ) {
                countryMostOfficialLanguageDe = data[i];
            }

            if (data[i].languages.length > countryHighestNumberOfficialLanguage.languages.length) {
                countryHighestNumberOfficialLanguage = data[i];
            }

            for (const language of data[i].languages) {
                if (languages[language] === undefined)
                    languages[language] = 1;
                else
                    languages[language] += 1;
            }
        }

        let higher = 0;
        let common;
        for (const key in languages) {
            if (languages[key] >= higher) {
                common = key;
                higher = languages[key];
            }
        }
        return { numberCountry, countryMostOfficialLanguageDe, countryHighestNumberOfficialLanguage, common };
    }
}