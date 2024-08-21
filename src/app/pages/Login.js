
export default function Login() {

    function login(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formData.get("username"),
                password: formData.get("pswd")
            })
        })
            .then(res => res.json())
            .then(json => {
				localStorage.setItem("login", json.token)
				window.location.href = "/"
			})
            .catch(() => alert("Please, enter a valid user"));
    }

	function signup(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email: formData.get("email"),
                    username: formData.get("username"),
                    password: formData.get("pswd"),
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
			.then(alert("You would have signed up successfully but, because of the limitations of the free Fake Store Api, this username is not being saved in the database"))
            .catch(error => console.error('Error:', error));
    }

    return (
        <div className="login-container">
            <div className="signup-and-login">  	
                <input className="login-input" type="checkbox" id="chk" aria-hidden="true"/>
                <div className="signup">
                    <form onSubmit={signup}>
                        <label className="login-label" htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input className="login-input" type="text" name="username" placeholder="Username" required/>
                        <input className="login-input" type="email" name="email" placeholder="Email" required/>
                        <input className="login-input" type="password" name="pswd" placeholder="Password" required/>
                        <button className="login-button">Sign up</button>
                    </form>
                </div>
                <div className="login">
                    <form onSubmit={login}>
                        <label className="login-label" htmlFor="chk" aria-hidden="true">Login</label>
                        <input className="login-input" type="text" name="username" placeholder="Username" required/>
						<small className="flex justify-center">Use predefined users like johnd or mor_2314</small>
                        <input className="login-input" type="password" name="pswd" placeholder="Password" required/>
						<small className="flex justify-center text-center">The passwords for those users are m38rmF$ and 83r5^_ respectively</small>
                        <button className="login-button" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
