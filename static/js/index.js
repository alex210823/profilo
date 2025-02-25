function fetchUser() {
    fetch("https://randomuser.me/api/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var user = data.results[0];
            var card = document.getElementById("userCard");
            card.innerHTML = `
                <img src="${user.picture.large}" alt="User">
                <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
                <p>${user.gender}</p>
                <p>${user.email}</p>
                <p>${user.location.street.number} ${user.location.street.name},
                   ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
                <button onclick="fetchUser()">Generate New User</button>
            `;
        })
        .catch(function (error) {
            console.error("Error fetching user data:", error);
        });
}
fetchUser();
