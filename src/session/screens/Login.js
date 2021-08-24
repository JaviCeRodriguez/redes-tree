import React from "react";

const LoginScreen = ({ signIn, status }) => (
    <div>
        {status === "init" && <span>Cargando...</span>}
        {status === "restored" && <button onClick={signIn}>Iniciar sesión con Google</button>}
    </div>
);

export default LoginScreen;