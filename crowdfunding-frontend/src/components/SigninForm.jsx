async function SigninForm(username, password, email) {
    const url = `${import.meta.env.VITE_API_URL}/users`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email}),
    });

    return (
        <p> insert form here </p>)
}
export default SigninForm;


// {
//     "username": "kaye",
//     "first_name": "Kaye",
//     "last_name": "Dante",
//     "email": "dante.kaye@fundassista.org",
//     "is_staff": true,
//    "password":"dante.kaye"
// }