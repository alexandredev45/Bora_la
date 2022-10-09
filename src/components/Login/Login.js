
import './Login.css'

function Login() {
    return (
        <div className='container'>
            <div className="box-login">
                
                <form>
                    <h2>Login</h2>
                    <label>Usuario:</label>
                    <input type="text" name="" id="" placeholder="Usuario" />
                    <label>Senha:</label>
                    <input type="password" name="" id="" placeholder="Senha" />

                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login