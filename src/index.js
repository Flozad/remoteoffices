import {myServer, PORT} from './services/server'

myServer.listen(PORT, () => console.log(`Listening in port: ${PORT}`));
