export const getYearDifference = year => {
    return new Date().getFullYear() - year
};
export const getBrandValue = brand => {
    let increment;
    switch(brand) {
        case 'europeo':
            increment = 1.30;
            break;
        case 'americano':
            increment = 1.50;
            break;
        case 'asiatico':
            increment = 1.05;
            break;
        default:
            break;
    }
    return increment
};
export const getPlanValue = plan => {
    return (plan === 'basic') ? 1.20 : 1.50;
};
export const firstLetter = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}