import { env } from './env';
import { app } from './app'

app.listen({
    port: env.PORT
}).then(() => {
    console.log('HTTP app Running at 3000!')
}).catch((err) => {
    console.log(err)
})

// unit: ensure that a section of the application behaves as intended
// integration: entegrates the units and test them as a group
// end 2 end: verifies the functionality and performance of the application