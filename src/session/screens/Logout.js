import React from "react";

const LogoutScreen = ({ signOut, status }) => (
    <div>
        {status === "init" && <span>Cargando...</span>}
        {status === "restored" && <button onClick={signOut}>Cerrar Sesión</button>}
    </div>
);

export default LogoutScreen;