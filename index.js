
const buildCategory = (category, product, levels) => {
    const subCategories = category.subCategories;
    const result = generateCategory(subCategories, product, levels);
    return result;
}

const trackPageView = () => {
    return adobe.trackUniquePageVisit();
}

const isEmptyFirstName = (firstName) => {
    const strippedFirstName = stripWhitespaces(firstName);
    return strippedFirstName.length === 0;
}

const getRouteParams = (location, locale) => {
    return routeManager.getParams(location, locale);
}

// Do something
const onPageLoad = () => {
    const categories = buildCategory(this.props.category, this.props.product, 4);
    const firstName = isEmptyFirstName(this.props.firstName) ? this.props.firstName : "Anonymous";
    const params = getRouteParams(window.location, "en");
    if (params.length && params.length > 0) {
        const { postalCode } = params;
        const products = getProductsForLocation(postalCode);
        if (!products || product.length === 0) {
            return;
        }
        this.renderPage(products, firstName, categories);
    }
    trackPageView();
}

