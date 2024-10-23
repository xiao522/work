function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";

        // 假设预存的用户名和密码
        var storedUsername = "xiao";
        var storedPassword = "123456";

        if (username === storedUsername && password === storedPassword) {
            alert("欢迎 " + username);
        } else {
            alert("用户名或密码错误");
        }
    }
}
