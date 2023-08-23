export const isValidItem = (item,cart) => {
    return !cart.find(d => d.id === item.id);
}