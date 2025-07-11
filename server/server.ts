import app from './src/app';
import { envConfig } from './src/config/Config';


//db connection
import './src/database/db.connection';


const startServer = ()=>{
    const PORT = envConfig.PORT
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();