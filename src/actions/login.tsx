/** #################
 * Login service
 * ################# */


if (localStorage.getItem("logged") === null) {
    localStorage.setItem("logged", "false");
}



/**###################
     *  Login function
     *
     * @param username - The username of the user
     * @param password - The password of the user
     * @return void
     *
     * Logs in the user by setting the "logged" item in localStorage to "true"
     *
     * Need backend integration later
     * ################### */

function loginUser(username: string, password: string) {
    console.log("Logging in user...");
    console.log("Username: " + username);
    console.log("Password: " + password);
    if (localStorage.getItem("user") === null) {
        localStorage.setItem("user", username); // not how it should be done, but for demo purposes
    }
    localStorage.setItem("logged", "true")

    window.location.href = "/"; // Redirecting to the dashboard after login
    console.log("User logged in successfully.");
}

export { loginUser };

