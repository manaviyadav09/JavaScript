const user = {
    name:"manavi",
    email: "manavi@example.com"
}
Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
})