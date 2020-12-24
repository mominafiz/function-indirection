const buildCategory = (category, product, levels) => {
    const subCategories = category.subCategories;
    const result = generateCategory(subCategories, product, levels);
    return result;
}
// Equivalent
const buildCategory = generateCategory;

const trackPageView = () => {
    return adobe.trackUniquePageVisit();
}
// Equivalent
const trackPageView = adobe.trackUniquePageVisit;


const isEmptyFirstName = (firstName) => {
    const strippedFirstName = stripWhitespaces(firstName);
    return strippedFirstName.length === 0;
}
// Equivalent
const isEmptyFirstName = stripWhitespaces;

const getRouteParams = (location, locale) => {
    return routeManager.getParams(location, locale);
}
// Equivalent
const getRouteParams = routeManager.getParams;
